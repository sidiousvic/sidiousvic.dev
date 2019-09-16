class Skull {
  constructor() {
    this.container = document.querySelector('#three-container');
    this.scene = new THREE.Scene();
    this.camera;
    this.light;
    this.renderer;
  }

  init() {
    // DIMENSIONS
    window.windowHalfX = window.innerWidth / 2;
    window.windowHalfY = window.innerHeight / 2;
    // scene
    this.createCamera();
    this.createLights();
    this.createRenderer();
    this.renderer.setClearColor(0x000000, 0);
    // load object
    this.loadObject('../../assets/3D/vsskulL.obj', 'skull');
    // e listeners
    document.addEventListener('mousemove', e => {
      this.onDocumentMouseMove(e);
    });
    window.addEventListener('resize', e => {
      this.onWindowResize(e);
    });
    //  animation loop
    this.renderer.setAnimationLoop(() => {
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
    this.light = new THREE.DirectionalLight(0xffffff, 1);
    // set position (x, y, z)
    this.light.position.set(10, 10, 10);
    this.scene.add(this.light);
  }

  loadObject(file, name) {
    // store scene reference
    const scene = this.scene;
    const loader = new THREE.OBJLoader();
    const material = new THREE.MeshStandardMaterial({
      color: 'black'
      // wireframeLinewidth: 0.1,
      // wireframe: true
    });

    return loader.load(
      file,
      object => {
        object.traverse(child => {
          if (child instanceof THREE.Mesh) {
            child.material = material;
          }
        });
        scene.add(object);
        object.name = name;
      },
      // called when loading is in progress
      xhr => {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
      },
      // called when error during loading
      error => {
        console.error('LOADING ERROR');
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
    this.camera.position.y = (mouseY - this.camera.position.z) * 0.06;
    this.camera.position.x = (-mouseX - this.camera.position.z) * 0.04;
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  play() {
    this.renderer.setAnimationLoop(() => {
      update();
      render();
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
}
