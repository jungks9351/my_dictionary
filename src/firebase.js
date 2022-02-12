// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAA1FpSgol9zM7okjszBJO_X9prENw5Ev8',
  authDomain: 'hanghae99-my-dictionary.firebaseapp.com',
  projectId: 'hanghae99-my-dictionary',
  storageBucket: 'hanghae99-my-dictionary.appspot.com',
  messagingSenderId: '285477703853',
  appId: '1:285477703853:web:c2a5fea0a3f1859eb5f624',
  measurementId: 'G-TTNH2LJQXV',
};
// Initialize Firebase
// firebase 호출 할때 바로 초기화 한다.
initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();
