"use client";

import useFirebaseData, { PostData } from "@/app/hooks/useFirebaseData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface ArticleDetailsProps {
  params: {
    singleId: string;
  };
}

export default function SinglePage({ params }: ArticleDetailsProps) {
  const router = useRouter();
  const [articleDetails, setArticleDetails] = useState<PostData | null>(null);
  const articlesData = useFirebaseData();

  useEffect(() => {
    if (params && params.singleId && articlesData.length > 0) {
      const article = articlesData.find(
        (items) => items.id === params.singleId
      );
      if (article) {
        setArticleDetails(article);
      } else {
        console.log(
          "Une erreur est survenue lors de la récupération de l'article."
        );
      }
    }
  }, [params, articlesData]);

  return (
    <>
      <div className="flex-grow w-full pt-20 mb-20">
        <FaArrowLeft
          className="ml-10 text-[50px] cursor-pointer rounded-full p-2 bg-blue-500 text-white hover:scale-105 hover:translate-x-2 transition-all mb-5"
          onClick={() => router.back()}
        />
        {articleDetails && (
          <div className="max-w-lg rounded overflow-hidden shadow-lg m-auto">
            <img
              className="w-full"
              src={articleDetails?.image}
              alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
              <h1 className="font-bold text-xl mb-2">
                {articleDetails?.title}
              </h1>
              <span className="text-blue-500 text-[14px] mt-3">
                {articleDetails?.author}
              </span>
              <p className="text-gray-700 text-base">{articleDetails?.desc}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
