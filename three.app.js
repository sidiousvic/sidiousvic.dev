let container, camera, renderer, scene, controls, skull;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let title = document.querySelector('#title');
let titleOverlay = document.querySelector('.title-overlay');
let aboutText = document.querySelector('.about-text');
let nav = document.querySelector('.nav');
let body = document.querySelector('body');
let html = document.querySelector('html');
let bool = true;

let mouseX = 0;
let mouseY = 0;

//////////////////////////////////////////////////////
// THREE.JS///////////////////////////////////////////
//////////////////////////////////////////////////////
function init() {
  container = document.querySelector('#three-container');

  // pause and play with s key
  document.body.onkeydown = function(e) {
    if (e.keyCode == 83) {
      stop();
    }
  };

  document.body.onkeyup = function(e) {
    if (e.keyCode == 83) {
      play();
    }
  };

  // set the scene
  scene = new THREE.Scene();

  createCamera();
  createLights();
  skull = Skull('vsskull.obj', 'skull');
  createRenderer();
  renderer.setClearColor(0x000000, 0);

  // event listeners
  document.addEventListener('mousemove', onDocumentMouseMove);
  window.addEventListener('resize', onWindowResize);

  // init animation loop
  renderer.setAnimationLoop(() => {
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
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
    },
    // called when loading has errors
    function(error) {
      console.log('An error happened');
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

function render() {
  camera.position.y = (mouseY - camera.position.z) * 0.06;
  camera.position.x = (-mouseX - camera.position.z) * 0.04;
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

//////////////////////////////////////////////////////
// SKULL CLICK FADE TITLE IN AND OUT /////////////////
//////////////////////////////////////////////////////
(function toggleTitleTransition() {
  if (bool) {
    title.style.transition = '0.5s ease-in-out';
  } else {
    title.style.transition = '';
  }
})();

document.querySelector('.vskullogo').addEventListener('click', e => {
  if (bool) {
    title.style.opacity = 0;
    bool = false;
  } else {
    title.style.transition = '0.5s ease-in-out';
    title.style.opacity = 1;
    bool = true;
  }
});

//////////////////////////////////////////////////////
// HOVER CHANGE TITLE TEXT ///////////////////////////
//////////////////////////////////////////////////////
nav.addEventListener('mouseover', e => {
  let navClass = e.target.classList;
  if (navClass.contains('github')) title.textContent = 'DEVELOPER';
  else if (navClass.contains('twitter')) title.textContent = 'TWEETER';
  else if (navClass.contains('spotify')) title.textContent = 'ROCKER';
  else if (navClass.contains('behance')) title.textContent = 'DESIGNER';
  else if (navClass.contains('medium')) title.textContent = 'WRITER';
  else if (navClass.contains('linkedin')) title.textContent = 'HUSTLER';
});
// return to "JUST DO SHIT" on leave
nav.addEventListener('mouseleave', e => {
  title.textContent = 'JUST DO SH*T.';
  setTimeout(() => {
    title.textContent = '@SIDIOUSVIC';
  }, 3000);
});

//////////////////////////////////////////////////////
// CLICK CHANGE TITLE TEXT ///////////////////////////
//////////////////////////////////////////////////////
titleOverlay.addEventListener('click', e => {
  if (title.textContent === 'JUST DO SH*T.') title.textContent = '@SIDIOUSVIC';
  else if (title.textContent === '@SIDIOUSVIC')
    title.textContent = 'JUST DO SH*T.';
});

// animated fadeInUp

let scrollpos = window.scrollY;
const about = document.querySelector('.about');
// const aboutHeight = about.offsetHeight;

const addFadeOnScroll = async () => {
  // add fade class to about section
  about.classList.add('fade-in');
  nav.classList.add('fade-out');
  body.style.backgroundColor = 'BLACK';
  html.style.backgroundColor = 'BLACK';
};

const removeFadeOnScroll = () => {
  // remove fade classes
  about.classList.remove('fade-in');
  nav.classList.remove('fade-out');
  body.style.backgroundColor = '#f5183d';
  html.style.backgroundColor = '#f5183d';
};

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos >= window.innerHeight) {
    addFadeOnScroll();
  } else {
    removeFadeOnScroll();
  }
  // console.log(scrollpos);
  // console.log(windowHalfY);
});
