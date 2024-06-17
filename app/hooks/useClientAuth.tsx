import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../db/configFirebase";

const providerGoogle = new GoogleAuthProvider();

const useClientAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isFetch, setIsFetch] = useState(true);
  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const loginWithGoogle = async () => {
    const result = await signInWithPopup(auth, providerGoogle);
    const user = result.user;
    if (user) {
      router.push("/dashboard");
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setUser(user);
        setIsFetch(false);
      } else {
        setUser(null);
        setIsFetch(false);
      }
    });
    return () => unsubscribe();
  }, []);

  const redirectIfAuthentificated = () => {
    if (user) {
      router.push("/dashboard");
    }
  };
  return {
    user,
    signUp,
    signIn,
    loginWithGoogle,
    redirectIfAuthentificated,
    isFetch,
  };
};

export default useClientAuth;
