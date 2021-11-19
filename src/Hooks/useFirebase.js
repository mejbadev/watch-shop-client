import React, { useEffect, useState } from 'react';
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut} from 'firebase/auth';
import initializeFirebase from '../Componants/Login/Firebase/firebase.init';
import { errorPrefix } from '@firebase/util';
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();
    const registerUser =(email, password, location, history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user= userCredential.user;
            setUser(user);
            console.log(location?.state?.from);
            const destination= location?.state?.from || '/home';
            history.push(destination);
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setAuthError(errorMessage);
        }).finally(()=> setIsLoading(false));
    }

    const loginUser =(email, password, location, history)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            console.log(location?.state?.from);
            const destination= location?.state?.from || '/home';
            
            history.push(destination);
           
        }).catch((error)=>{
            const errorCode = error.code;
            const errorMessage = error.message;
            setAuthError(errorMessage);
        }).finally(()=>setIsLoading(false));
    }
    const logOut =()=>{
            setIsLoading(true);
            signOut(auth).then(()=>{
            }).catch((error)=>{

            }).finally(()=>setIsLoading(false));
        }
    
        useEffect(()=>{
            const unsubscribe= onAuthStateChanged( auth, (user)=>{
                if(user){
                    const uid =user.uid;
                    setUser(user);
                }else{
                    //user signed out
                    setUser({});
                }
                setIsLoading(false);
            });
            return ()=>unsubscribe;
        }, [])

    return {
        user,
        registerUser,
        loginUser,
        logOut,
        isLoading,
        authError
    };
    
};

export default useFirebase;