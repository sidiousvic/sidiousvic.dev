import * as THREE from "three";
import vslogo from "../../assets/images/vslogo-square-black.gif";

function Cube(scene) {
  const loader = new THREE.TextureLoader();
  const materials = [
    new THREE.MeshStandardMaterial({
      map: loader.load(vslogo)
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(vslogo)
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(vslogo)
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(vslogo)
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(vslogo)
    }),
    new THREE.MeshStandardMaterial({
      map: loader.load(vslogo)
    })
  ];
  const mesh = new THREE.Mesh(new THREE.BoxBufferGeometry(3, 3, 3), materials);

  // mesh.position.set(0, 0, 0);

  scene.add(mesh);

  this.update = function(time) {
    mesh.rotation.x += 0.0085;
    mesh.rotation.y += 0.0085;
  };
}

export default Cube;
