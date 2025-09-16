/// <reference types="vite/client" />
interface ImportMetaEnv {
  // Core
  readonly VITE_GITHUB_URL: string;
  readonly VITE_LINKEDIN_URL: string;
  readonly VITE_FIGMA_URL: string;
  readonly VITE_CV_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
