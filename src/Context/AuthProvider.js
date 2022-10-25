import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoadign] = useState(true);

  // google sign in
  const googleProvider = (provider) => {
    setLoadign(true);
    return signInWithPopup(auth, provider);
  };

  // log out
  const logOut = () => {
    setLoadign(true);
    return signOut(auth);
  };

  // email password sign up
  const createUser = (email, password) => {
    setLoadign(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email password sign in
  const signIn = (email, password) => {
    setLoadign(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoadign(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    googleProvider,
    logOut,
    createUser,
    signIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
