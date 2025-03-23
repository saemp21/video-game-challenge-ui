/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_PROD_URL: string;
  readonly VITE_STAG_URL: string;
  readonly VITE_DEV_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
