import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider,  onAuthStateChanged , signOut} from "firebase/auth";
import Router from "next/dist/server/router";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
import { useRouter } from 'next/router'

initializeAuthentication();
const useFirebase = () => {
    
    const [user, setUser] = useState({});
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();  
    const router = useRouter();
   
   
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                saveUser( email, name, 'POST' );
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                    
                });
                // router.push('/dashboard')
                // router.replace('/');
            })
            .catch((error) => {
                setError(error.message);
               
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {            
        
                // const destination = location?.state?.from || '/';
                // history.push(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    const signInUsingGoogle = () =>{
        setIsLoading(true);
      return   signInWithPopup(auth, googleProvider)
        .then(result =>{
          setUser(result.user);
            console.log(result.user);
        })
        .catch(error => {
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    

    }
    const logOut = () => {
        
        setIsLoading(true);
        signOut(auth)
            .then(() => { router.push('/') })
            .finally(() => setIsLoading(false)
           
            );
    }
    useEffect(()=>{
      const unsubscribed =  onAuthStateChanged(auth, user => {
            if (user) {
            setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[])
    return{
        user,
        error,
        isLoading,
        registerUser,
        loginUser,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;