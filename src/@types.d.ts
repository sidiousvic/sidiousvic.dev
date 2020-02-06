declare module "*.obj";

export interface MouseCoords {
  x: number;
  y: number;
}

export interface Z {
  mouse: MouseCoords;
  setMouse(): void;
  eyeVelocity: number;
  setEyeVelocity(): void;
}
