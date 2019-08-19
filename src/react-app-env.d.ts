/// <reference types="react-scripts" />
declare module '*.mp4' {
    const src: string;
    export default src;
  }

  declare module '*.webm' {
    const src: string;
    export default src;
  }

  declare module '*.ogv' {
    const src: string;
    export default src;
  }

  declare module "*.gif" {
    const fileName: string;
    export = fileName;
}