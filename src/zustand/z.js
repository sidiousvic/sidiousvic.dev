import create from "zustand";

const [useZ] = create(set => ({
  eyeVelocity: 0,
  setEyeVelocity: eyeVelocity => {
    console.log("SET_EYE_VELOCITY");
    set(z => ({ eyeVelocity }));
  },
  mouse: { x: 0, y: 0 },
  setMouse: mouse => set(z => ({ mouse }))
}));

export default useZ;
