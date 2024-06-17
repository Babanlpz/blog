import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from "firebase/auth/web-extension";
import { auth } from "../db/configFirebase";
import { useRouter } from "next/navigation";



const providerGoogle = new GoogleAuthProvider();

const useClientAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetch , setIsFetch] = useState(true);
  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      router.push("/dashboard");
    }catch (error){
      console.log(error);
    }
  }
  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      router.push("/dashboard");
    }catch (error){
      console.log(error);
    }
  }


}

