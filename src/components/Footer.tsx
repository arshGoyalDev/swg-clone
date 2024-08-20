import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary flex flex-col items-center gap-10 px-4 lg:px-12 xl:px-32 py-20 text-white lg:flex-row lg:justify-between lg:items-start rounded-t-[3rem] lg:rounded-t-[5rem]">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-2xl xl:text-4xl font-bold">Student Welfare Group</h2>
        <p className="text-gray-300 font-semibold">
          Indian Institute of Technology, Kharagpur
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-xl font-semibold">Quick Links</h3>
        <div className="flex flex-col items-center gap-3 text-gray-200">
          <Link href="/about" className="hover:text-primary transition">About Us</Link>
          <Link href="/event" className="hover:text-primary transition">Events</Link>
          <Link href="/" className="hover:text-primary transition">SWG App</Link>
          <Link href="/team" className="hover:text-primary transition">Our Team</Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl">Resources</h3>
        <div className="flex flex-col items-center gap-3 text-gray-200">
          <Link href="/resources" className="hover:text-primary transition">Study Material</Link>
          <Link href="/" className="hover:text-primary transition">Fundae Docs</Link>
          <Link href="/blogs/internship" className="hover:text-primary transition">Internship Blogs</Link>
          <Link href="/blogs/placement" className="hover:text-primary transition">Placement Blogs</Link>
        </div>
      </div>

      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <h3 className="text-2xl">Contact Us</h3>
          <Link
            href="mailto:info.swgiitkgp@gmail.com"
            className="text-gray-200 transition hover:text-primary"
          >
            info.swgiitkgp@gmail.com
          </Link>
        </div>

        <div>
          <h3 className="text-2xl">Follow Us</h3>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
