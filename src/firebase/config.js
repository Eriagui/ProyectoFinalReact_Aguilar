import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5CrK6gJOzZ-40KqV7AYc3U3BwoAC6wNQ",
  authDomain: "proyecto-final-react-ea.firebaseapp.com",
  projectId: "proyecto-final-react-ea",
  storageBucket: "proyecto-final-react-ea.appspot.com",
  messagingSenderId: "127246298426",
  appId: "1:127246298426:web:3a22f50b23d598756fb403"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos
export const db = getFirestore(app);



/*import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuHxnmuF2RR4tBY0n-POnoACVtg44GWrU",
  authDomain: "coderhouse-60030.firebaseapp.com",
  projectId: "coderhouse-60030",
  storageBucket: "coderhouse-60030.appspot.com",
  messagingSenderId: "964335960966",
  appId: "1:964335960966:web:c82934c2703eee73f52207"
};

// Inicializamos el servicios de Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos la base de datos
export const db = getFirestore(app);*/