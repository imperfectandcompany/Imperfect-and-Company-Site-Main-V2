  declare module '*.png' {
    const content: string;
    export default content;
  }
  
  declare module '*.ico' {
    const content: string;
    export default content;
  }
  
  declare module '*.svg' {
    const content: string;
    export default content;
  }

  declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  interface SnowStorm {
    start: () => void;
  }
  
  interface Window {
    snowStorm: SnowStorm;
  }