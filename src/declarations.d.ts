declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  interface SnowStorm {
    start: () => void;
    // Add other methods and properties of snowStorm here as needed
  }
  
  interface Window {
    snowStorm: SnowStorm;
  }