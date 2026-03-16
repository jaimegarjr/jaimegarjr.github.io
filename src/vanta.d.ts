declare module 'vanta/dist/vanta.fog.min' {
  import * as THREE from 'three';
  interface VantaOptions {
    el: HTMLElement | null;
    THREE: typeof THREE;
    [key: string]: unknown;
  }
  interface VantaEffect {
    destroy: () => void;
  }
  function FOG(options: VantaOptions): VantaEffect;
  export default FOG;
}