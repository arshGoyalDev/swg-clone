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
    <div className="card--team relative">
      <div className="h-[280px] w-[90vh] overflow-hidden rounded-xl md:max-w-[320px]">
        <img src={profilePic} alt={name} />
      </div>
      <div className="absolute left-0 top-0 h-full w-full rounded-xl bg-black bg-opacity-15"></div>
      <div className="card--team--info absolute bottom-4 left-4 right-4 z-10 grid place-content-center gap-1 rounded-xl bg-black bg-opacity-10 p-4 text-white backdrop-blur-md transition-all">
        <h2 className="text-lg">{name}</h2>
        {role && <p className="text-gray-300">{role}</p>}
      </div>
    </div>
  );
};
export default TeamCard;
