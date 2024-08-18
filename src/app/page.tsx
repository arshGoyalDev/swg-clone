import { type Metadata } from "next";
import Header from "~/components/home/Header";

const metadata: Metadata = {
  title: "SWG",
  description: "Student's Welfare Group (SWG) Home PAge",
};


const HomePage = () => {
  return (
    <main className="min-h-[300vh]">
      <Header />
    </main>
  );
}

export {metadata}
export default HomePage;
