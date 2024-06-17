import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

interface CardProps {
  data: {
    id: string;
    title: string;
    desc: string;
    image: string;
    author: string;
  };
}

const Card: React.FC<CardProps> = ({ data }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/single/" + data.id)}
      className="bg-white p-4 rounded-md shadow-md cursor-pointer border hover:translate-x-[-10px] transition-all hover:border-blue-500"
    >
      <Image
        className="w-full h-[300px] rounded-md object-cover"
        src={data.image}
        width={400}
        height={300}
        alt={data.title}
      />
      <h2 className="text-xl font-bold mt-2">{data.title}</h2>
      <div className="flex items-center gap-2 text-blue-500 my-2 text-[14px]">
        <FaUser />
        <p>{data.author}</p>
      </div>
      <p className="text-gray-700">{data.desc}</p>
    </div>
  );
};

export default Card;
