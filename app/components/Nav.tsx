"use client";

import Link from "next/link";

export default function Nav() {
  const menu = [
    { name: "Home", path: "/" },
    { name: "Nouveau Post", path: "/create" },
    { name: "Se connecter", path: "/signInAndUp" },
  ];
  return (
    <>
      <div className="absolute text-gray-500 z-100 top-0 left-0 flex justify-between items-center w-full p-3 px-5 bg-white border-b border-b-blue-500">
        <ul className="">
          {menu.map((item) => (
            <li key={item.name} className="">
              <Link href={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
