import { type Metadata } from "next";

import {
  HeroSection,
  Initiatives,
  FeaturedBlogs,
  FAQs,
} from "~/components/home";

import { Header, Footer } from "~/components";

const metadata: Metadata = {
  title: "SWG",
  description: "Student's Welfare Group (SWG) Home Page",
};

const HomePage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <Initiatives />
      <FeaturedBlogs />
      <FAQs />
      <Footer />
    </main>
  );
};

export { metadata };
export default HomePage;
