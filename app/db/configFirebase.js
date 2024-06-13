import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCOlHVF-lj-qYe4ScD0AbyCmAjhruz8W4k",
  authDomain: "blog-app-483b2.firebaseapp.com",
  projectId: "blog-app-483b2",
  storageBucket: "blog-app-483b2.appspot.com",
  messagingSenderId: "55602656061",
  appId: "1:55602656061:web:423b376735ae690ec08b54",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
