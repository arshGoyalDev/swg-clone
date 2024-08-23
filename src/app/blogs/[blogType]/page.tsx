import { BlogCard } from "~/components/cards";

import { type Metadata } from "next";

const metadata: Metadata = {
  title: "Blogs",
}

const BlogsPage = ({ params }: { params: { blogType: string } }) => {
  return (
    <main>
      <section className="grid place-content-center gap-8 px-4 py-20 pb-40 pt-20 text-center lg:px-12 lg:pt-32 xl:px-32">
        <h1 className="text-6xl font-semibold text-secondary">
          <span className="text-primary">{params.blogType.split('-').join(" ").toUpperCase()}</span>{" "}
          Blogs
        </h1>


        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>

      </section>
    </main>
  );
};


export {metadata}

export default BlogsPage;
