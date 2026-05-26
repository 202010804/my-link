import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBLbEtgSLIoIG9vYeRDb57Wct7UGfOQzU4",
  authDomain: "my-jm-link.firebaseapp.com",
  projectId: "my-jm-link",
  storageBucket: "my-jm-link.firebasestorage.app",
  messagingSenderId: "688763844028",
  appId: "1:688763844028:web:25d5097932e2c256e8a7b9",
  measurementId: "G-CW5G713D77"
};

// Initialize Firebase (prevent duplicate initialization in Next.js hot reloads)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// Initialize Firestore Database
const db = getFirestore(app);

// Initialize Analytics safely on client side only
let analytics = null;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, db, analytics };
