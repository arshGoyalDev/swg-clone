import { type Metadata } from "next";

import { Header, Footer } from "~/components";
import { ResourceCard } from "~/components/cards";
import { resourcesData } from "~/utils";

const metadata: Metadata = {
  title: "SWG | Resources",
  description: "Student's Welfare Group (SWG) Resources Page",
};

const ResourcesPage = () => {
  return (
    <main>
      <Header />

      <section className="grid place-content-center gap-20 px-4 py-20 pb-40 pt-20 text-center lg:px-12 lg:pt-32 xl:px-32">
        <h1 className="text-6xl font-semibold text-secondary">
          Resources
        </h1>
        
        <div className="flex flex-wrap justify-center items-center gap-10">
          {resourcesData.map((resource) => {
            return(
              <ResourceCard key={resource.title} title={resource.title} content={resource.content} bgImage={resource.bgImage} link={resource.link} />
            )
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export { metadata };
export default ResourcesPage;
