import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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
  // github sign in
  const githubProvider = (provider) => {
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

  const userProfileUpdate = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // email password sign in
  const signIn = (email, password) => {
    setLoadign(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
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
    githubProvider,
    logOut,
    createUser,
    signIn,
    userProfileUpdate,
    setLoadign,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
