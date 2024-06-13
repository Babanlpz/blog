import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../db/configFirebase";

export interface PostData {
  id: string;
  title: string;
  desc: string;
  image: string;
  author: string;
}

const useFirebaseData = (): PostData[] => {
  const [data, setData] = useState<PostData[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const newData: PostData[] = [];
        querySnapshot.forEach((doc) => {
          newData.push({
            id: doc.id,
            ...doc.data(),
          } as PostData);
        });
        setData((prevData) => {
          const newDataDuplicate = newData.filter(
            (newItem) =>
              !prevData.some((prevItem) => prevItem.id === newItem.id)
          );
          return [...prevData, ...newDataDuplicate];
        });
      } catch (error) {
        console.error(
          "Une erreur est survenue lors de la récupération des données"
        );
      }
    };
    getData();
    return () => setData([]);
  }, []);
  return data;
};

export default useFirebaseData;
