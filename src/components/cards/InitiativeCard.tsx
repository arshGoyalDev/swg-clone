const InitiativeCard = ({
  image,
  info,
  active,
}: {
  image: string;
  info: string;
  active: boolean;
}) => {
  return (
    <div
      className={`relative max-w-[540px] rounded-xl border-2 border-gray-200 bg-white shadow-xl ${active ? "z-10" : "invisible hidden h-0 w-0 opacity-0"} transition-all`}
    >
      <img src={image} alt={"fjd"} className="rounded-xl" />

      <div className="absolute -bottom-5 -left-5 right-10 rounded-xl bg-zinc-800 bg-opacity-75 backdrop-blur-xl">
        <p className="px-6 py-4 text-white">{info}</p>
      </div>
    </div>
  );
};
export default InitiativeCard;
