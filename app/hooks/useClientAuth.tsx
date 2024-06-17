import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, User, GoogleAuthProvider, signInWithPopup } from "firebase/auth/web-extension";
import { auth } from "../db/configFirebase";
import { useRouter } from "next/navigation";



const providerGoogle = new GoogleAuthProvider();



