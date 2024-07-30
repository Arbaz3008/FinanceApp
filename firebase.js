import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDdy7wGghWGT_ZlBKMXuZx3OioV4QuGBOg",
  authDomain: "financeapp-780c8.firebaseapp.com",
  projectId: "financeapp-780c8",
  storageBucket: "financeapp-780c8.appspot.com",
  messagingSenderId: "79490908055",
  appId: "1:79490908055:web:88ce0184ebfbf3365fced2",
  measurementId: "G-YJ0ZFJ8FGF"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };