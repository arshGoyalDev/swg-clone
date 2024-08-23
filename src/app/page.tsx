import { type Metadata } from "next";

import {
  HeroSection,
  Initiatives,
  FeaturedBlogs,
  FAQs,
} from "~/components/home";

const metadata: Metadata = {
  title: "SWG",
  description: "Student's Welfare Group (SWG) Home Page",
};

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <Initiatives />
      <FeaturedBlogs />
      <FAQs />
    </main>
  );
};

export { metadata };
export default HomePage;
