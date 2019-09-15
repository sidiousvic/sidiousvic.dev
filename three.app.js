let container, camera, renderer, scene, controls, skull;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let title = document.querySelector('.title');
let svTitle = document.querySelector('#sv-title');
let projectsTitle = document.querySelector('#projects-title');
let titleOverlay = document.querySelector('.title-overlay');
const projects = document.querySelector('.projects');
// let aboutText = document.querySelector('.about-text');
let nav = document.querySelector('.nav');
let pNav = document.querySelector('.pnav');
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
// stop();

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
  let cl = e.target.classList;
  console.log(cl);
  if (cl.contains('github')) svTitle.textContent = 'DEVELOPER';
  else if (cl.contains('twitter')) svTitle.textContent = 'TWEETER';
  else if (cl.contains('spotify')) svTitle.textContent = 'ROCKER';
  else if (cl.contains('behance')) svTitle.textContent = 'DESIGNER';
  else if (cl.contains('medium')) svTitle.textContent = 'WRITER';
  else if (cl.contains('linkedin')) svTitle.textContent = 'HUSTLER';
});

pNav.addEventListener('mouseover', e => {
  let cl = e.target.classList;
  console.log(cl);
  if (cl.contains('pPizzalculator'))
    projectsTitle.textContent = 'PIZZALCULATOR';
  else if (cl.contains('pTasker')) projectsTitle.textContent = 'TASKER';
  else if (cl.contains('pBlackdog')) projectsTitle.textContent = 'BLACKDOG';
  else if (cl.contains('pClock')) projectsTitle.textContent = 'CLOCK';
  else if (cl.contains('pSecretNumber'))
    projectsTitle.textContent = 'SECRET NUMBER';
  else if (cl.contains('pRpoke')) projectsTitle.textContent = 'R-POKE';
  else if (cl.contains('pBacefook')) projectsTitle.textContent = 'BACEFOOK';
  else if (cl.contains('pBudgy')) projectsTitle.textContent = 'BUDGETER';
  else if (cl.contains('pGithubSpotlight'))
    projectsTitle.textContent = 'GITHUB SPOTLIGHT';
  else if (cl.contains('pKisetsu')) projectsTitle.textContent = 'KISETSU';
  else if (cl.contains('pOcarina')) projectsTitle.textContent = 'OCARINA';
  else if (cl.contains('pBooklist')) projectsTitle.textContent = 'BOOKLIST';
});
// return to "JUST DO SHIT" on leave
nav.addEventListener('mouseleave', e => {
  svTitle.textContent = '@SIDIOUSVIC';
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
// const aboutHeight = about.offsetHeight;

const addFadeOnScroll = () => {
  // add fade class to about section
  projects.classList.add('fade-in');
  nav.classList.add('fade-out');
  pNav.classList.add('fade-in');
  projectsTitle.classList.add('fade-in');
  body.style.backgroundColor = 'rgb(10, 10, 10)';
  html.style.backgroundColor = 'rgb(10, 10, 10)';
};

const removeFadeOnScroll = () => {
  // remove fade classes
  projects.classList.remove('fade-in');
  nav.classList.remove('fade-out');
  pNav.classList.remove('fade-in');
  projectsTitle.classList.remove('fade-in');
  body.style.backgroundColor = '#f5183d';
  html.style.backgroundColor = '#f5183d';
};

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos >= window.innerHeight - 200) {
    addFadeOnScroll();
  } else {
    removeFadeOnScroll();
  }
});
