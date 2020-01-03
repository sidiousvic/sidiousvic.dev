class Skull {
  constructor() {
    this.container = document.querySelector("#three-container");
    this.scene = new THREE.Scene();
    this.camera;
    this.light;
    this.renderer;
    this.skull = null;
    this.scrollY = 0;
    this.eyeL;
    this.eyeR;
    this.clock = new THREE.Clock();
    this.uniforms = {
      u_time: { value: 1.0 }
    };
    this.shaders = {
      spiral: {
        v: `varying vec2 v_uv;
            void main() {
              v_uv = uv;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        
            }`,
        f: `varying vec2 v_uv;
        
            const float PI = 3.1415926535897932384626433832795;
            uniform float u_time;
            float time = u_time * 9.0;
        
            void main() {
              vec2 uv = gl_FragCoord.xy;
              vec3 color = vec3(1.0, sin(time * v_uv.x / v_uv.y), 0.5);
              gl_FragColor = vec4(color, 1).rgba;
            }`
      }
    };
  }

  init() {
    // dimensions
    window.windowHalfX = window.innerWidth / 2;
    window.windowHalfY = window.innerHeight / 2;
    // scene
    this.createCamera();
    this.createLights();
    this.createRenderer();
    this.renderer.setClearColor(0x000000, 0);
    // load object
    this.skull = this.loadObject("../../assets/3D/vsskull.obj", "skull");

    // e listeners
    document.addEventListener("mousemove", e => {
      this.onDocumentMouseMove(e);
    });
    window.addEventListener("resize", e => {
      this.onWindowResize(e);
    });
    window.addEventListener("click", e => {
      this.onDocumentClick(e);
    });
    //  animation loop
    this.renderer.setAnimationLoop(() => {
      this.update();
      this.render();
    });
  }

  createCamera() {
    const fov = 35;
    const aspect = this.container.clientWidth / this.container.clientHeight;
    const near = 0.1;
    const far = 100;
    // instantiate camera
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    // set position (x, y, z)
    this.camera.position.set(0, 0, 5);
  }

  createLights() {
    this.light = new THREE.DirectionalLight(0x432342, 1);
    // set position (x, y, z)
    this.light.position.set(10, 10, 10);
    this.scene.add(this.light);
  }

  createEyes() {
    const lightColor = 0xff0020;
    const matColor = 0xff0044;
    // glowing eyes
    const sphere = new THREE.SphereBufferGeometry(0.02, 20, 20);
    // make lights
    this.eyeL = new THREE.PointLight(lightColor, 2, 50);
    this.eyeR = new THREE.PointLight(lightColor, 2, 50);
    this.eyeL.position.set(-0.24, 0.19, 0.55);
    this.eyeR.position.set(0.24, 0.19, 0.55);
    // mesh 'em together
    this.eyeL.add(
      new THREE.Mesh(sphere, new THREE.MeshToonMaterial({ color: matColor }))
    );
    this.eyeR.add(
      new THREE.Mesh(sphere, new THREE.MeshToonMaterial({ color: matColor }))
    );
    this.skull.add(this.eyeL, this.eyeR);
    // set their initial velocity to 0
    this.eyeL.velocity = 0;
    this.eyeR.velocity = 0;
  }

  loadObject(file, name) {
    // store scene reference
    // const scene = this.scene;
    const loader = new THREE.OBJLoader();
    const material = new THREE.MeshToonMaterial({
      color: "black"
      // wireframeLinewidth: 0.1,
      // wireframe: true
    });

    // const material = new THREE.ShaderMaterial({
    //   uniforms: {
    //     u_time: this.uniforms.u_time
    //   },
    //   vertexShader: this.shaders.spiral.v,
    //   fragmentShader: this.shaders.spiral.f
    //   // wireframe: true
    // });

    return loader.load(
      file,
      object => {
        object.traverse(child => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        this.skull = object;
        this.scene.add(object);
        // add eyes
        this.createEyes();
        object.name = name;
      },
      // called when loading is in progress
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when error during loading
      error => {
        console.error("LOADING ERROR");
      }
    );
  }

  createRenderer() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(
      this.container.clientWidth,
      this.container.clientHeight
    );

    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.renderer.gammaFactor = 2.2;
    this.renderer.gammaOutput = true;

    this.container.appendChild(this.renderer.domElement);
  }

  render() {
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  update() {
    // shader uniforms
    this.uniforms.u_time.value = this.clock.getElapsedTime();
    // change camera position on mouse move
    this.camera.position.y = (mouseY - this.camera.position.z) * 0.06;
    this.camera.position.x = (-mouseX - this.camera.position.z) * 0.04;
    // float the eyes ghostily
    if (this.eyeL) {
      this.eyeL.position.y +=
        Math.cos(this.clock.getElapsedTime() * 2) * 0.0005;
      this.eyeL.position.x +=
        Math.sin(this.clock.getElapsedTime() * 2) * 0.0003;
      this.eyeR.position.y +=
        Math.cos(this.clock.getElapsedTime() * 2) * 0.0005;
      this.eyeR.position.x -=
        Math.sin(this.clock.getElapsedTime() * 2) * 0.0003;
      // fire the eyes as projectiles if velocity > 0
      this.eyeL.position.z += this.eyeL.velocity;
      this.eyeR.position.z += this.eyeR.velocity;
      // bring eyes back when shot out
      if (this.eyeL.position.z > 1) {
        this.eyeL.velocity = -this.eyeL.velocity;
        this.eyeR.velocity = -this.eyeR.velocity;
      }
      // land them at their original position
      if (this.eyeL.position.z < 0.55) {
        this.eyeL.position.z = 0.55;
        this.eyeR.position.z = 0.55;
      }
    }
    // move skull on scroll
    if (this.skull) {
      // move skull out on scroll
      // this.skull.position.z = Math.sin(window.scrollY * 0.001) * 3;
      // float the skull ghostily
      // this.skull.position.y += Math.cos(this.clock.getElapsedTime()) * 0.0005;
      // this.skull.position.z += Math.sin(this.clock.getElapsedTime()) * -0.003;
    }
  }

  play() {
    this.renderer.setAnimationLoop(() => {
      this.update();
      this.render();
    });
  }

  stop() {
    this.renderer.setAnimationLoop(null);
  }

  onWindowResize() {
    // update aspect ratio
    this.camera.aspect = window.innerWidth / window.innerHeight;
    // update frustum
    this.camera.updateProjectionMatrix();
    // update renderer and canvas
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  onDocumentMouseMove(e) {
    mouseX = (e.clientX - windowHalfX) / 2;
    mouseY = (e.clientY - windowHalfY) / 2;
  }

  onDocumentClick(e) {
    // shoot eyes
    this.eyeL.velocity = 0.03;
    this.eyeR.velocity = 0.03;
  }
}
