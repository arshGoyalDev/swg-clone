import { type Metadata } from "next";
import { Header, Footer, FAQs, Initiatives } from "~/components/home";

const metadata: Metadata = {
  title: "SWG",
  description: "Student's Welfare Group (SWG) Home PAge",
};

const HomePage = () => {
  return (
    <main>
      <Header />
      <Initiatives />
      <FAQs />
      <Footer />
    </main>
  );
};

export { metadata };
export default HomePage;
