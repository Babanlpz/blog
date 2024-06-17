"use client";
import useClientAuth from "@/app/hooks/useClientAuth";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { auth } from "../../db/configFirebase";

export default function DashboardPage() {
  const { user, redirectIfAuthentificated } = useClientAuth();

  useEffect(() => {
    redirectIfAuthentificated();
  }, [user]);

  const router = useRouter();

  const handleSignOut = async () => {
    signOut(auth);
    router.push("/");
  };

  return (
    <>
      {user && (
        <div className="w-full h-screen flex items-center justify-center flex-col">
          <h1 className="text-4xl font-black text-blue-500">Dashboard Page</h1>
          <p>
            <b>Votre email: </b>
            {user?.email}
          </p>
          <button
            onClick={handleSignOut}
            className="block bg-blue-500 px-3 text-white rounded-md hover:bg-blue-700 py-1.5 mt-3"
          >
            Déconnexion
          </button>
        </div>
      )}
    </>
  );
}
