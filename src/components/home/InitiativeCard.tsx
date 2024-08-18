const InitiativeCard = ({
  id,
  image,
  info,
  active,
}: {
  id: number;
  image: string;
  info: string;
  active: boolean;
}) => {
  return (
    <div
      className={`max-w-[540px] rounded-xl border-2 border-gray-200 bg-white shadow-xl ${active ? "z-10" : "invisible w-0 h-0 opacity-0"} transition-all`}
    >
      <img src={image} alt={"fjd"} className="rounded-t-xl" />
      <p className="px-6 py-4">{info}</p>
    </div>
  );
};
export default InitiativeCard;
