// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  getIdToken,
} from "firebase/auth";
import { auth } from "./firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const jwt = await getIdToken(currentUser);
        setToken(jwt);
        localStorage.setItem("jwt", jwt);
      } else {
        setToken(null);
        localStorage.removeItem("jwt");
      }
    });

    return () => unsubscribe();
  }, []);

  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);
  const signin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);
  const logout = () => signOut(auth);

  return (
    <AuthContext.Provider value={{ user, token, signup, signin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
