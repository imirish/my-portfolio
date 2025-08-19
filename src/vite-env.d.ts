/// <reference types="vite/client" />

import { FirebasePlugin } from "@/plugins/firebase";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $firebase: FirebasePlugin;
  }
}
