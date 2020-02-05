import { useEyeVelocity } from "./types.d";
declare module "*.obj";

export interface MouseCoords {
  x: number;
  y: number;
}

export interface SidiousSkullProps {
  mouse: MouseCoords;
  eyeVelocity: number;
  setEyeVelocity: React.Dispatch<React.SetStateAction<number>>;
}
