import type { App } from "vue";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, type FirebaseStorage } from "firebase/storage";

export interface FirebasePlugin {
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
  storage: FirebaseStorage;
}

export default {
  install: (app: App) => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };

    const firebaseApp = initializeApp(firebaseConfig);

    const firebase: FirebasePlugin = {
      app: firebaseApp,
      auth: getAuth(firebaseApp),
      db: getFirestore(firebaseApp),
      storage: getStorage(firebaseApp),
    };

    // Provide globally
    app.provide("firebase", firebase);

    // Optionally, attach to app.config.globalProperties
    app.config.globalProperties.$firebase = firebase;
  },
};
