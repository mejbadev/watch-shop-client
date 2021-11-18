import React from 'react';
import {initializeApp} from 'firebase/app';
import firebaseConfig from './firebase.config';
const initializeFirebase = () => {
    initializeApp(firebaseConfig);
};

export default initializeFirebase;