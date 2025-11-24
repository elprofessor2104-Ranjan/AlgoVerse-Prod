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
  const authorName = process.env.AUTHOR_NAME || "Your Author Name";

  if (!blog) {
    return {
      title: "Not Found",
      description: "No blog article has been found",
      author: authorName,
      robots: {
        index: false,
        follow: false,
        nocache: false,
        googleBot: {
          index: false,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
    };
  }

  return {
    title: `${blog.title || "Single Post Page"} | ${siteName}`,
    description: blog.description || blog.detail,
    authors: [{ name: authorName }],
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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
          <div className=" shadow-md">
            <div className="relative w-full h-[400px] sm:h-[550px]">
              <Image
                src={blog?.cover_image}
                alt="cover image"
                width={1140}
                height={550}
                className="w-full h-full object-cover rounded-t-md"
              />
              <span className="absolute bottom-6 right-6 text-xs font-semibold w-fit p-1 px-2.5 text-black bg-white rounded-md capitalize">
                2 min Read
              </span>
            </div>
            <div className="flex flex-col dark:bg-surfaceDark rounded-b-md">
              <div className="relative flex flex-col gap-6 p-6 border-b border-gray-200 dark:border-white/20">
                <div className="group absolute -top-7">
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-gray-800 text-white text-xs rounded-md shadow-lg opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 whitespace-nowrap">
                    {blog?.author_name}
                  </div>
                  <Image
                    src={blog?.author_image}
                    alt="author-image"
                    width={40}
                    height={40}
                    className=" rounded-full"
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-sm font-medium w-fit p-1 px-2.5 text-navyGray dark:text-white bg-gray dark:bg-white/20 rounded-md capitalize mt-4">
                    {blog?.tag}
                  </span>
                  <h1 className="font-semibold text-navyGray dark:text-white">
                    {blog?.title}
                  </h1>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="14"
                      width="14"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"></path>
                    </svg>
                    <p className="text-xs text-navyGray dark:text-white/80 font-medium">
                      {new Date(blog?.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
              {/* <Script id="atOptions" strategy="afterInteractive">
                {`
                    atOptions = {
                      'key' : '7cfc9f717089fffb351d015f6c3746da',
                      'format' : 'iframe',
                      'height' : 250,
                      'width' : 300,
                      'params' : {}
                    };
                  `}
              </Script>
              <Script
                src="//www.highperformanceformat.com/7cfc9f717089fffb351d015f6c3746da/invoke.js"
                strategy="afterInteractive"
              /> */}
              <Script
  id="adsterra-options"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.atOptions = {
        'key': '7cfc9f717089fffb351d015f6c3746da',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    `,
  }}
/>

<Script
  id="adsterra-script"
  strategy="afterInteractive"
  src="//www.highperformanceformat.com/7cfc9f717089fffb351d015f6c3746da/invoke.js"
/>


              <Script id="atOptions" strategy="afterInteractive">
                {`
                    atOptions = {
                      'key' : '04080a1a59066b0cd1c95a29b84e4aaa',
                      'format' : 'iframe',
                      'height' : 50,
                      'width' : 320,
                      'params' : {}
                    };
                  `}
              </Script>
              <Script
                src="//www.highperformanceformat.com/04080a1a59066b0cd1c95a29b84e4aaa/invoke.js"
                strategy="afterInteractive"
              />

              <div className="flex flex-col p-6 gap-7">
                <div className="flex flex-col gap-5 border-b border-gray-200 dark:border-white/20 pb-7">
                  <h3 className="font-semibold text-navyGray dark:text-white">
                    Title of Paragraph
                  </h3>
                  <p className="text-navyGray dark:text-white/80">
                    {blog?.description}
                  </p>
                </div>

                <Script id="atOptions" strategy="afterInteractive">
                  {`
                    atOptions = {
                      'key' : '830f5f2b0ea44313207eab3dd203eb5d',
                      'format' : 'iframe',
                      'height' : 300,
                      'width' : 160,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script
                  src="//www.highperformanceformat.com/830f5f2b0ea44313207eab3dd203eb5d/invoke.js"
                  strategy="afterInteractive"
                />

                <div className="border-b border-gray-200 dark:border-white/20">
                  {contentHtml && (
                    <div
                      dangerouslySetInnerHTML={{ __html: contentHtml }}
                      className="blog-content"
                    ></div>
                  )}
                </div>

                <Script id="atOptions" strategy="afterInteractive">
                  {`
                    atOptions = {
                      'key' : 'eaac30cd5348e798a58339af3d327b2b',
                      'format' : 'iframe',
                      'height' : 60,
                      'width' : 468,
                      'params' : {}
                    };
                  `}
                </Script>
                <Script
                  src="//www.highperformanceformat.com/eaac30cd5348e798a58339af3d327b2b/invoke.js"
                  strategy="afterInteractive"
                />
                <div className="flex flex-col gap-3 border-b border-gray-200 dark:border-white/20 pb-6">
                  <h4 className="font-semibold text-navyGray dark:text-white">
                    Quotes
                  </h4>
                  <div className="pt-5 pb-4 px-4 rounded-md border-s-2 border-primary bg-primary/5 flex gap-1 items-start">
                    <p className="text-navyGray dark:text-white/80 font-semibold">
                      {blog?.quotes}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
