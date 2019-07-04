import * as THREE from "three";

function GeneralLights(scene) {
  const light = new THREE.DirectionalLight("#ffffff", 5.0);
  light.position.set(10, 10, 10);
  scene.add(light);

  this.update = function(time) {
    // light.intensity = (Math.sin(time) + 1.5) / 1.5;
  };
}

export default GeneralLights;
