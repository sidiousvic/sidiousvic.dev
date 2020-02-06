import create from "zustand";

const [useZ] = create(set => ({
  eyeVelocity: 0,
  setEyeVelocity: (eyeVelocity: number): void => {
    console.log("SET_EYE_VELOCITY");
    set({ eyeVelocity });
  },
  mouse: { x: 0, y: 0 },
  setMouse: (mouse: number): void => set({ mouse })
}));

export default useZ;
