/* eslint-disable @typescript-eslint/no-explicit-any */
import { getBlogsBySlug } from "@/lib/blogmarkdown";
import markdownToHtml from "@/lib/markdownToHtml";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";

export async function generateMetadata({ params }: any) {
  const blog = getBlogsBySlug(params.slug, [
    "tag",
    "title",
    "description",
    "date",
    "cover_image",
    "author_name",
    "author_position",
    "author_image",
    "author_detail",
    "bedge",
    "content",
    "quotes",
    "views",
    "comment",
  ]);

  const siteName = process.env.SITE_NAME || "Your Site Name";

  if (!blog) return notFound();

  return {
    title: `${blog.title} | ${siteName}`,
    description: blog.description,
  };
}

export default async function BlogPost({ params }: any) {
  const blog = getBlogsBySlug(params.slug, [
    "tag",
    "title",
    "description",
    "date",
    "cover_image",
    "author_name",
    "author_position",
    "author_image",
    "author_detail",
    "bedge",
    "content",
    "quotes",
    "views",
    "comment",
  ]);

  if (!blog) return notFound();
  const contentHtml = await markdownToHtml(blog?.content || "");

  return (
    <section>
      <div className="pb-14 md:pb-20 pt-28 md:pt-40 dark:bg-baseInk">
        <div className="container">
          <div className="shadow-md">

            {/* Cover Image */}
            <div className="relative w-full h-[400px] sm:h-[550px]">
              <Image
                src={blog.cover_image}
                alt="cover image"
                width={1140}
                height={550}
                className="w-full h-full object-cover rounded-t-md"
              />
            </div>

            {/* BLOG CONTENT */}
            <div className="flex flex-col dark:bg-surfaceDark rounded-b-md p-6">

              {/* === AD 1 === */}
              <div id="ad-1"></div>
              <Script
                id="ad-script-1"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.atOptions = {
                      'key' : '7cfc9f717089fffb351d015f6c3746da',
                      'format' : 'iframe',
                      'height' : 250,
                      'width' : 300,
                      'params' : {}
                    };
                  `,
                }}
              />
              <Script
                id="invoke-1"
                src="//www.highperformanceformat.com/7cfc9f717089fffb351d015f6c3746da/invoke.js"
                strategy="afterInteractive"
              />

              {/* === AD 2 === */}
              <div id="ad-2"></div>
              <Script
                id="ad-script-2"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.atOptions = {
                      'key' : '04080a1a59066b0cd1c95a29b84e4aaa',
                      'format' : 'iframe',
                      'height' : 50,
                      'width' : 320,
                      'params' : {}
                    };
                  `,
                }}
              />
              <Script
                id="invoke-2"
                src="//www.highperformanceformat.com/04080a1a59066b0cd1c95a29b84e4aaa/invoke.js"
                strategy="afterInteractive"
              />

              {/* BLOG PARAGRAPH */}
              <h3 className="font-semibold text-lg text-white mt-6">Summary</h3>
              <p className="text-gray-300">{blog.description}</p>

              {/* === AD 3 === */}
              <div id="ad-3"></div>
              <Script
                id="ad-script-3"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.atOptions = {
                      'key' : '830f5f2b0ea44313207eab3dd203eb5d',
                      'format' : 'iframe',
                      'height' : 300,
                      'width' : 160,
                      'params' : {}
                    };
                  `,
                }}
              />
              <Script
                id="invoke-3"
                src="//www.highperformanceformat.com/830f5f2b0ea44313207eab3dd203eb5d/invoke.js"
                strategy="afterInteractive"
              />

              {/* Main Content */}
              <div
                dangerouslySetInnerHTML={{ __html: contentHtml }}
                className="blog-content mt-6"
              />

              {/* === AD 4 === */}
              <div id="ad-4"></div>
              <Script
                id="ad-script-4"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.atOptions = {
                      'key' : 'eaac30cd5348e798a58339af3d327b2b',
                      'format' : 'iframe',
                      'height' : 60,
                      'width' : 468,
                      'params' : {}
                    };
                  `,
                }}
              />
              <Script
                id="invoke-4"
                src="//www.highperformanceformat.com/eaac30cd5348e798a58339af3d327b2b/invoke.js"
                strategy="afterInteractive"
              />

              {/* QUOTE */}
              <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 italic text-gray-200">
                {blog.quotes}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
