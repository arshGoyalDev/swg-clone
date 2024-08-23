import { type Metadata } from "next";

import { CvContainer } from "~/components/cv-repo";

export const metadata: Metadata = {
  title: "SWG | CV Repo",
};

const CvRepoPage = ({ params }: { params: { cvCategory: string } }) => {
  return (
    <main>
      <section className="grid place-content-center gap-8 px-4 py-20 pb-40 pt-20 text-center lg:px-12 lg:pt-32 xl:px-32">
        <h1 className="text-6xl font-semibold text-secondary">
          <span className="text-primary">
            {params.cvCategory.toUpperCase()}
          </span>{" "}
          CVs
        </h1>

        <CvContainer />
      </section>
    </main>
  );
};

export default CvRepoPage;
