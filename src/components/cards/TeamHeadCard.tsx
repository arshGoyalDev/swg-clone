const TeamHeadCard = ({
  name,
  role,
  profilePic,
}: {
  name: string;
  role: string;
  profilePic: string;
}) => {
  return (
    <div className="w-60 justify-self-center flex cursor-default flex-col items-center rounded-xl border-4 border-gray-200 bg-white p-6 shadow-lg transition-all hover:scale-105 hover:border-primary">
      <div className="team-pic-container h-32 w-32 rounded-full">
        <img src={profilePic} alt={name} />
      </div>

      <div className="mt-4 grid place-content-center gap-3 text-center">
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-gray-500">{role}</p>
      </div>
    </div>
  );
};
export default TeamHeadCard;
