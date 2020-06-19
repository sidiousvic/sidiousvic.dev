import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  Object3D,
  Mesh,
  MeshToonMaterial,
  OBJLoader
} from "../three.x";

import SidiousSkullModel from "../assets/models/SidiousSkull.obj";

export default function SidiousSkull() {
  let windowSize = {
    w: window.innerWidth,
    h: window.innerHeight
  };
  let mouse = { x: windowSize.w, y: windowSize.h };
  const fov = 35;
  const aspect = window.innerWidth / window.innerHeight;
  const near = 0.1;
  const far = 100;

  let scene = new Scene();

  let camera = new PerspectiveCamera(fov, aspect, near, far);
  camera.position.set(0, 0, 4.5);

  let renderer = new WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x000000, 0);
  document.body.appendChild(renderer.domElement);

  let directionalLight = new DirectionalLight(0x432342, 4);
  directionalLight.position.set(10, 10, 10);
  scene.add(directionalLight);

  var loader = new OBJLoader();
  loader.load(
    SidiousSkullModel,

    // ONLOAD
    function(obj) {
      obj.children.map((child: Object3D): void => {
        (child as Mesh).material = new MeshToonMaterial({
          color: 0x000000
        });
      });
      scene.add(obj);
    },

    // ONPROGRESS
    function(xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },

    // ONERROR
    function(err) {
      console.error(`ERROR LOADING ${SidiousSkullModel} 🚨`, err);
    }
  );

  function onDocumentMouseMove(e: MouseEvent) {
    mouse = {
      x: (e.clientX - windowSize.w / 2) / 2,
      y: (e.clientY - windowSize.h / 2) / 2
    };
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  window.addEventListener("resize", onWindowResize, false);

  var animate = function() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    // look @ mouse
    window.removeEventListener("mousemove", onDocumentMouseMove);
    window.addEventListener("mousemove", onDocumentMouseMove);
    camera.position.y = (mouse.y - camera.position.z) * 0.06;
    camera.position.x = (-mouse.x - camera.position.z) * 0.04;
    camera.lookAt(scene.position);
  };

  animate();
}
