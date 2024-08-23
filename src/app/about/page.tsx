import { type Metadata } from "next";

import { Team } from "~/components/about";

const metadata: Metadata = {
  title: "SWG | About",
  description: "Student's Welfare Group (SWG) Home Page",
};

const AboutPage = () => {
  return (
    <main>
      <section className="grid place-content-center gap-8 px-4 py-20 pb-40 pt-20 text-center lg:px-12 lg:pt-32 xl:px-32">
        <h1 className="text-6xl font-semibold text-secondary">
          Student Welfare Group
        </h1>

        <p className="max-w-[1200px] text-lg lg:text-xl">
          Student Welfare Group helps students in improving their skills,
          attitude and resources necessary to both succeed in the college
          environment as well as to pursue productive and satisfying lives by
          organizing different activities on the campus. Our Group strives to
          contribute to the overall educational mission of the Institute by
          facilitating the academic, emotional, social and vocational
          development of the entire campus community.
        </p>
      </section>

      <Team />
    </main>
  );
};

export { metadata };
export default AboutPage;
