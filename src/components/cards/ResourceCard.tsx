import Link from "next/link";

const ResourceCard = ({
  title,
  content,
  bgImage,
  link,
}: {
  title: string;
  content: string;
  bgImage: string;
  link: string;
}) => {
  return (
    <div className="card--resource relative h-[240px] w-[92vw] cursor-default overflow-hidden rounded-2xl transition-all hover:shadow-xl md:h-[300px] md:max-w-[500px]">
      <img src={bgImage} alt={title} className="h-full w-full" />
      <div className="absolute left-0 top-0 z-[5] h-full w-full bg-black bg-opacity-10"></div>
      <Link href={link}>
        <div className="card--resource--info absolute bottom-4 left-4 right-4 z-10 gird place-content-center gap-1 rounded-xl bg-black bg-opacity-40 p-4 text-white backdrop-blur-lg transition-all">
          <h2 className="text-lg">{title}</h2>
          <p className="text-gray-300">{content}</p>
        </div>
      </Link>
    </div>
  );
};
export default ResourceCard;
