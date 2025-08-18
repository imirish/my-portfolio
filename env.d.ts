/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Core
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
