import Link from "next/link";

const BlogCardHome = ({
  profilePic,
  name,
  blogType,
  link,
  content,
  active,
}: {
  profilePic: string;
  name: string;
  blogType: string;
  link: string;
  content: string;
  active: boolean;
}) => {
  return (
  <div className={`grid grid-cols-3 max-w-[600px] ${active ? "z-10" : "hidden"} bg-white rounded-xl`}>
    <div className="flex flex-col items-center gap-2 p-4 text-center lg:p-6">
      <img src={profilePic} alt={name} className="w-20 h-20 rounded-full border-4 p-[2px] border-primary"/>
      <p className="font-semibold mt-2">{name}</p>
      <p className="text-gray-700">{blogType}</p>
    </div>
    <div className="p-4 col-span-2 flex flex-col items-end lg:p-6">
      <p>{content}</p>
      <Link href={link}>
      <button className="bg-primary text-white py-2 px-3 rounded-lg mt-3">Read More</button>
      </Link>
    </div>
  </div>
);
};
export default BlogCardHome;
