const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;
const title = document.querySelector('.title');
const svTitle = document.querySelector('#sv-title');
const projectsTitle = document.querySelector('#projects-title');
const titleOverlay = document.querySelector('.title-overlay');
const projects = document.querySelector('.projects');
const nav = document.querySelector('.nav');
const pNav = document.querySelector('.pnav');
const body = document.querySelector('body');
const html = document.querySelector('html');
const bool = true;
// mouse coords
let mouseX = 0;
let mouseY = 0;
// 3D skull
const skull = new Skull();
skull.init();

// pause and play with s key
document.body.onkeydown = function(e) {
  if (e.keyCode == 83) {
    skull.stop();
  }
};

document.body.onkeyup = function(e) {
  if (e.keyCode == 83) {
    skull.play();
  }
};

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
  if (cl.contains('github')) svTitle.textContent = 'DEVELOPER';
  else if (cl.contains('twitter')) svTitle.textContent = 'TWEETER';
  else if (cl.contains('spotify')) svTitle.textContent = 'ROCKER';
  else if (cl.contains('behance')) svTitle.textContent = 'DESIGNER';
  else if (cl.contains('medium')) svTitle.textContent = 'WRITER';
  else if (cl.contains('linkedin')) svTitle.textContent = 'HUSTLER';
});

pNav.addEventListener('mouseover', e => {
  let cl = e.target.classList;
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
  // body.style.backgroundColor = 'rgb(10, 10, 10)';
  // html.style.backgroundColor = 'rgb(10, 10, 10)';
};

const removeFadeOnScroll = () => {
  // remove fade classes
  projects.classList.remove('fade-in');
  nav.classList.remove('fade-out');
  pNav.classList.remove('fade-in');
  projectsTitle.classList.remove('fade-in');
  // body.style.backgroundColor = '#f5183d';
  // html.style.backgroundColor = '#f5183d';
};

window.addEventListener('scroll', function() {
  scrollpos = window.scrollY;
  if (scrollpos >= window.innerHeight - 200) {
    addFadeOnScroll();
  } else {
    removeFadeOnScroll();
  }
});
