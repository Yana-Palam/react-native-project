import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: 'AIzaSyATMoDwvV0noSaUzvw1qbhsGAG5Tl_vac4',
  authDomain: 'react-native-project-cab6c.firebaseapp.com',
  projectId: 'react-native-project-cab6c',
  storageBucket: 'react-native-project-cab6c.appspot.com',
  messagingSenderId: '161433229458',
  appId: '1:161433229458:web:efac916f19a64d8c3bae4b',
};

// export const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app);

// export const storage = getStorage(app);

// export const db = getFirestore(app);

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const storage = getStorage(app);

export const db = getFirestore(app);
