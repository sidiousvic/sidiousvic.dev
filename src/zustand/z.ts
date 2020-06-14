import create from "zustand";

const [useZ] = create(set => ({
  title: "Vic Sidious",
  setTitle: (title: string): void => {
    set({ title });
  },
  eyeVelocity: 0,
  setEyeVelocity: (eyeVelocity: number): void => {
    set({ eyeVelocity });
  },
  mouse: { x: 0, y: 0 },
  setMouse: (mouse: number): void => set({ mouse }),
  about: false,
  setAbout: (about: boolean): void => set({ about })
}));

export default useZ;
