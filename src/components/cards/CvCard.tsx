const CvCard = ({
  cvLink,
  name,
  companyName,
}: {
  cvLink: string;
  name: string;
  companyName: string;
}) => {
  return (
    <div className="relative border-4 border-gray-200 rounded-xl shadow-xl cursor-pointer">
      <div className="w-[80vh] sm:max-w-[320px] overflow-hidden rounded-xl">
        <img src={cvLink} alt={companyName + "cv"} />
      </div>

      <div className="grid place-content-center gap-1 text-white absolute -bottom-4 left-4 right-4 bg-black bg-opacity-25 backdrop-blur-lg rounded-lg py-4">
        <p className="text-lg">{companyName}</p>
        <p className="text-gray-200">{name}</p>
      </div>
    </div>
  );
};
export default CvCard;
