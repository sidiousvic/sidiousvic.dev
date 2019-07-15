let container, camera, renderer, scene, controls, skull;
let mouseX,
  mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

async function init() {
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
  Skull("vs-skull3.obj", "skull");
  createRenderer();

  // event listeners
  document.addEventListener("mousemove", onDocumentMouseMove);
  window.addEventListener("resize", onWindowResize);

  // init animation loop
  renderer.setAnimationLoop(() => {
    update();
    render();
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

function Skull(objFile, objName) {
  // instantiate a loader
  var loader = new THREE.OBJLoader();
  var material = new THREE.MeshStandardMaterial({
    color: 0x000000
    // wireframeLinewidth: 0.1
    // wireframe: true
  });

  //load object
  return loader.load(
    objFile,
    function(object) {
      object.traverse(function(child) {
        if (child instanceof THREE.Mesh) {
          child.material = material;
        }
      });
      scene.add(object);
      object.name = objName;
      object.rotation.y = -4.85;
      object.rotation.x = -0.09;
    },
    // called when loading is in progress
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

function update() {}

function render() {
  // console.log(mouseX);
  // camera.position.z = (-mouseY - camera.position.z) * 0.5;
  camera.lookAt(scene.position);
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
  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;
  // update aspect ratio
  camera.aspect = window.innerWidth / window.innerHeight;
  // update frustum
  camera.updateProjectionMatrix();
  // update renderer and canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  mouseX = (event.clientX - windowHalfX) / 2;
  mouseY = (event.clientY - windowHalfY) / 2;
}

init();
