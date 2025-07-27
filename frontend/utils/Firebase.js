
import { initializeApp } from 'firebase/app';
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: 'loginnowshop.firebaseapp.com',
  projectId: 'loginnowshop',
  storageBucket: 'log innowshop.firebasestorage.app',
  messagingSenderId: '315421670772',
  appId: '1:315421670772:web:4feb3dc6bcf269bc860021',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth, provider};