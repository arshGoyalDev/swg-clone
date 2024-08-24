const EventCard = ({id, imageUrl, content }: {id: number; imageUrl: string; content:string }) => {
  return (
    <div
      className="w-[90vw] flex  flex-col sm:max-w-[600px] overflow-hidden rounded-2xl border-4 border-black"
    >
      <div className="w-[90vw] sm:max-w-[600px]">
        <img src={imageUrl} alt={id.toString()} />
      </div>
      <div className="p-4 border-t-4 xl:text-lg border-black rounded-b-2xl">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default EventCard
