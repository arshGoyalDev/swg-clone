const TeamCard = ({
  name,
  role,
  profilePic,
}: {
  name: string;
  role?: string;
  profilePic: string;
}) => {
  return (
    <div className="card--team relative rounded-xl h-[280px] w-[80vw] sm:w-full sm:max-w-[280px]">
      <div className="overflow-hidden rounded-xl">
        <img src={profilePic} alt={name} className="h-[280px] w-full" />
      </div>
      <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-black bg-opacity-15"></div>
      <div className="card--team--info absolute -bottom-5 left-4 right-4 z-10 grid place-content-center gap-1 rounded-xl bg-black bg-opacity-10 p-4 text-white backdrop-blur-md transition-all">
        <h2 className="text-lg">{name}</h2>
        {role && <p className="text-gray-300">{role}</p>}
      </div>
    </div>
  );
};
export default TeamCard;
