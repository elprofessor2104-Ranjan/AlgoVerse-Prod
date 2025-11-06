/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import BlogCard from "@/app/components/shared/blog-card";
import Link from "next/link";

const CategoryComp = ({ blogs }: { blogs: any[] }) => {
  return (
    <section>
      <div className="dark:bg-baseInk">
        <div className="container">
          <div className="flex flex-col items-center gap-9 md:gap-14 py-14 md:py-20">
            <div className="flex flex-col items-center text-center gap-3.5">
              <h1 className="font-semibold">Explore Categories</h1>
              <p className="font-medium text-navyGray dark:text-white/80">
                Choose a category to explore related content -- Find what
                interests you
              </p>
            </div>

            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.slice(0, 6).map((blog, index) => (
                <BlogCard key={index} blog={blog} />
              ))}
            </div>

            <Link
              href="/blog"
              className="bg-transparent hover:bg-black dark:hover:bg-white px-6 py-3 border border-black dark:border-white font-medium text-black dark:text-white dark:hover:text-black hover:text-white rounded-md transition-colors duration-500 ease-in-out"
            >
              <span>View All Blogs</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryComp;
