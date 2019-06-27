import * as THREE from "three";
import GeneralLights from "./sceneSubjects/GeneralLights";
import Cube from "./sceneSubjects/Cube";
// import OrbitControls from "three-orbitcontrols";

function SceneManager(canvas) {
  const clock = new THREE.Clock();

  const screenDimensions = {
    width: canvas.width,
    height: canvas.height
  };

  const scene = buildScene();
  const renderer = buildRender(screenDimensions);
  const camera = buildCamera(screenDimensions);
  const sceneSubjects = createSceneSubjects(scene);
  function buildScene() {
    const scene = new THREE.Scene();
    // scene.background = new THREE.Color("#f5183d");

    return scene;
  }

  function buildRender({ width, height }) {
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    const DPR = window.devicePixelRatio ? window.devicePixelRatio : 1;
    renderer.setPixelRatio(DPR);
    renderer.setSize(width, height);

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    return renderer;
  }

  function buildCamera({ width, height }) {
    const aspectRatio = width / height;
    const fieldOfView = 60;
    const nearPlane = 1;
    const farPlane = 100;
    const camera = new THREE.PerspectiveCamera(
      fieldOfView,
      aspectRatio,
      nearPlane,
      farPlane
    );

    // camera.position.set(10, 0, 2.5);

    return camera;
  }

  function createSceneSubjects(scene) {
    const sceneSubjects = [new GeneralLights(scene), new Cube(scene)];

    return sceneSubjects;
  }

  this.update = function() {
    const elapsedTime = clock.getElapsedTime();

    for (let i = 0; i < sceneSubjects.length; i++)
      sceneSubjects[i].update(elapsedTime);

    renderer.render(scene, camera);
  };

  this.onWindowResize = function() {
    const { width, height } = canvas;

    screenDimensions.width = width;
    screenDimensions.height = height;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };

  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   controls.enabled = true;
}

export default SceneManager;
