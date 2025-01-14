declare module 'simplex-noise' {
    export type Noise3D = (x: number, y: number, z: number) => number;
  
    export function createNoise3D(seed?: number): Noise3D;
    export default class SimplexNoise {
      constructor(seed?: number);
      noise3D: Noise3D;
    }
  }
  