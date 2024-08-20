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
    <div className="overflow-hidden rounded-xl border-4 border-gray-200">
      <div className="grid place-content-center bg-zinc-900 px-10 py-8">
        <div className="rounded-full border-4 border-white p-1">
          <div className="team-pic-container h-32 w-32 rounded-full">
            <img src={profilePic} alt={name} />
          </div>
        </div>
      </div>

      <div className="bg-zinc-600 py-6">
        <p className="text-lg font-semibold text-white">{name}</p>
        {role && <p className="text-gray-300">{role}</p>}
      </div>
    </div>
  );
};
export default TeamCard;
