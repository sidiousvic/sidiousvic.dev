import * as THREE from "three";

function GeneralLights(scene) {
  const light = new THREE.PointLight("#ffffff", 5.0, 300);
  scene.add(light);

  this.update = function(time) {
    light.intensity = (Math.sin(time) + 1.5) / 1.5;
    // light.color.setHSL(Math.sin(time), 0.5, 0.5);
  };
}

export default GeneralLights;
