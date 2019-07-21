let container, camera, renderer, scene, controls, skull;
let mouseX = 0;
let mouseY = 0;
let gyroX = 0;
let gyroY = 0;
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
  // scene.background = new THREE.Color(0xf5183d);
  // scene.background = new THREE.Color(0x1111111);2

  createCamera();
  createControls();
  createLights();
  skull = Skull("vsskull.obj", "skull");
  createRenderer();
  renderer.setClearColor(0x000000, 0);

  // event listeners
  document.addEventListener("mousemove", onDocumentMouseMove);
  window.addEventListener("deviceorientation", onDeviceRotation);
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
  // controls = new THREE.OrbitControls(camera, container);
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
      // object.rotation.y = -4.84;
      // object.rotation.x = -0.09;
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
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);

  renderer.setPixelRatio(window.devicePixelRatio);

  renderer.gammaFactor = 2.2;
  renderer.gammaOutput = true;

  container.appendChild(renderer.domElement);
}

function update() {}

function render() {
  // console.log(mouseX);
  camera.position.y = (mouseY - camera.position.z) * 0.06;
  camera.position.x = (-mouseX - camera.position.z) * 0.04;
  // console.log(mouseX);

  if (gyroX && gyroY) {
    camera.position.y = (gyroY - camera.position.z) * 0.06;
    camera.position.x = (-gyroX - camera.position.z) * 0.04;
  }
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

function onDeviceRotation(event) {
  gyroX = (event.beta - windowHalfX) / 2;
  gyroY = (event.gamma - windowHalfY) / 2;
}

document.querySelector(".vskullogo").addEventListener("click", e => {
  let title = document.querySelector("#title");
  if (title.style.opacity == 0) title.style.opacity = 1;
  else title.style.opacity = 0;
});

init();
