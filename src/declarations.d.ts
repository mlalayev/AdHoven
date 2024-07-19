// declarations.d.ts
declare module 'module-name';

// src/declarations.d.ts
declare module '*.jsx' {
    const content: any;
    export default content;
}
