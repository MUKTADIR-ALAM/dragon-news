import { createContext, useEffect, useState } from "react"
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthProvider({children}) {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    console.log(user);
    const createNewUser = (email,password) => {
      return createUserWithEmailAndPassword(auth, email, password);
    }

    const logOut = () =>{
      return signOut(auth);
    }

    const userLogin = (email,password) => {
      return signInWithEmailAndPassword(auth,email,password);
    }

    const updateUserProfile=(updatedData)=>{
      return updateProfile(auth.currentUser,updatedData);
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser);
          setLoading(false);
      });
      return ()=>{
        unSubscribe();
      }
    },[])

    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
        updateUserProfile
    } 
  
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
}
