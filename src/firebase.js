// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk8nFwS-LH4K6tTCKPCVQM-LvQClzIuLk",
  authDomain: "portfolio-cdf0d.firebaseapp.com",
  projectId: "portfolio-cdf0d",
  storageBucket: "portfolio-cdf0d.appspot.com",
  messagingSenderId: "188237475321",
  appId: "1:188237475321:web:9aeb5a95afa42a6036e128",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const colRefProjects = collection(db, "projects");
export const colRefExperienceList = collection(db, "experience");
export const colRefAchievements = collection(db, "achievements");
export const storage = getStorage(app);
export const colRefImages = ref(storage, "images");
