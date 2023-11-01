import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBpjx96L0hGVPXvHe7vp1dMMlmf5F4Rghs",
    authDomain: "ecommerce-joa.firebaseapp.com",
    projectId: "ecommerce-joa",
    storageBucket: "ecommerce-joa.appspot.com",
    messagingSenderId: "15583448782",
    appId: "1:15583448782:web:a2f51b316decff692aca9f"
  };
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);