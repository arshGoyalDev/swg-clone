/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
const CvCard = ({
  cvLink,
  name,
  companyName,
  setCvLightBox,
}: {
  cvLink: string;
  name: string;
  companyName: string;
  setCvLightBox: any;
}) => {
  return (
    <div
      className="relative cursor-pointer rounded-xl border-4 border-gray-200 shadow-xl"
      onClick={() => {
        setCvLightBox({
          name: name,
          cvLink: cvLink,
        });
      }}
    >
      <div className="w-[80vw] overflow-hidden rounded-xl sm:max-w-[320px]">
        <img src={cvLink} alt={companyName + "cv"} />
      </div>

      <div className="absolute -bottom-4 left-4 right-4 grid place-content-center gap-1 rounded-lg bg-black bg-opacity-25 py-4 text-white backdrop-blur-lg">
        <p className="text-lg">{companyName}</p>
        <p className="text-gray-200">{name}</p>
      </div>
    </div>
  );
};
export default CvCard;
