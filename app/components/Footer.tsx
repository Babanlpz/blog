import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const menuFooter = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      path: "https://www.facebook.com/",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      path: "https://twitter.com/",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      path: "https://www.instagram.com/",
    },
  ];
  return (
    <>
      <footer className="flex items-center justify-center flex-col gap-5 p-5 bg-blue-700 text-white mt-20">
        <ul className="flex items-center justify-center gap-2">
          {menuFooter.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="flex items-center gap-2 text-[12px]"
              >
                {item.icon}
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="text-[11px]">
          &copy; Baban Dev - Tous droits réservés - 2024{" "}
        </p>
      </footer>
    </>
  );
}
