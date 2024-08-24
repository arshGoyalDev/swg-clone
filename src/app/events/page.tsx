
import { type Metadata } from "next";

const metadata: Metadata = {
  title: "SWG | Events"
}

import { HorizontalScrollCarousel } from "~/components/events";

const EventsPage = () => {
  return (
    <main>
      <HorizontalScrollCarousel />
    </main>
  );
};


export {metadata};

export default EventsPage;





