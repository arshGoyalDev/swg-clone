import { type Metadata } from "next";
import {
  Header,
  HeroSection,
  Initiatives,
  FeaturedBlogs,
  FAQs,
  Footer,
} from "~/components/home";

const metadata: Metadata = {
  title: "SWG",
  description: "Student's Welfare Group (SWG) Home PAge",
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
