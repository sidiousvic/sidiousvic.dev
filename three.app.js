let container, camera, renderer, scene, mesh, controls, skull;

function init() {
  container = document.querySelector("#three-container");

  // pause with spacebar
  document.body.onkeydown = function(e) {
    if (e.keyCode == 32) {
      stop();
    }
  };
  document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
      play();
    }
  };

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xf5183d);
  // scene.background = new THREE.Color(0x1111111);

  createCamera();
  createControls();
  createLights();
  createMeshes();
  createRenderer();

  renderer.setAnimationLoop(() => {
    render();
    update();
  });
}

function createCamera() {
  camera = new THREE.PerspectiveCamera(
    35,
    container.clientWidth / container.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 5);
}

function createControls() {
  controls = new THREE.OrbitControls(camera, container);
}

function createLights() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 1);
  scene.add(ambientLight);

  const mainLight = new THREE.DirectionalLight(0xffffff, 1);
  mainLight.position.set(10, 10, 10);

  scene.add(ambientLight, mainLight);
}

function createMeshes() {
  // instantiate a loader
  var loader = new THREE.OBJLoader();
  var material = new THREE.MeshStandardMaterial({
    color: 0x000000
    // wireframe: true,
    // precision: "highp"
  });

  // load a resource
  loader.load(
    // resource URL
    "vs-skull3.obj",
    // called when resource is loaded
    object => {
      object.traverse(function(child) {
        if (child instanceof THREE.Mesh) {
          child.material = material;
        }
      });
      scene.add(object);
      skull = object;
      skull.rotation.y = -4.85;
    },
    // called when loading is in progresses
    function(xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function(error) {
      console.log("An error happened");
    }
  );
}

function createRenderer() {
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);

  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;

  container.appendChild(renderer.domElement);
}

function update() {
  // skull.rotation.x += 0.001;
  skull.rotation.y += 0.001;
  // skull.rotation.z += 0.001;
}

function render() {
  renderer.render(scene, camera);
}

function play() {
  renderer.setAnimationLoop(() => {
    update();
    render();
  });
}

function stop() {
  renderer.setAnimationLoop(null);
}

function onWindowResize() {
  // update aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;
  // update frustum
  camera.updateProjectionMatrix();
  // update renderer and canvas
  renderer.setSize(container.clientWidth, container.clientHeight);
}

window.addEventListener("resize", onWindowResize);

init();
