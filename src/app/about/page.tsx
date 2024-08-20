import { type Metadata } from "next";

import { Footer, Header } from "~/components";
import { Team } from "~/components/about";

const metadata: Metadata = {
  title: "SWG | About",
  description: "Student's Welfare Group (SWG) Home PAge",
};

const AboutPage = () => {
  return (
    <main>
      <Header />

      <section className="grid place-content-center gap-8 text-center py-20 pb-40 pt-20 lg:pt-32 px-4 lg:px-12 xl:px-32">
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

      <Footer />
    </main>
  );
};

export { metadata };
export default AboutPage;
