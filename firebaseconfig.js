import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
  apiKey: "AIzaSyCEwg_HYvUZrjaXX4OJhy8y7MwGQNYZxsE",
  authDomain: "maalapp-7c1f1.firebaseapp.com",
  projectId: "maalapp-7c1f1",
  storageBucket: "maalapp-7c1f1.firebasestorage.app",
  messagingSenderId: "223752936818",
  appId: "1:223752936818:web:1976c5975911d1cfda11eb",
  measurementId: "G-TFG2M0XTGY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);