import React from "react";

const ProductList = () => {
  return (
    <div className="blog-articles-container container mx-auto grid grid-cols-1 gap-10 px-4 py-4 md:grid-cols-2 lg:grid-cols-3 xl:px-10 xl:py-10 2xl:px-24 2xl:py-5">
      {[0, 1, 2, 3, 4].map((d) => (
        <div className="blog-article-card col-span-1">
          <a
            aria-label="Cover photo of the article titled Functions in TypeScript"
            className="mb-4 block w-full overflow-hidden rounded-lg border bg-slate-100 hover:opacity-90 dark:border-slate-800 dark:bg-slate-800"
            href="https://blog.learncodeonline.in/functions-in-typescript"
          >
            <span
              style={{
                boxSizing: "border-box",
                display: "block",
                overflow: "hidden",
                width: "initial",
                height: "initial",
                background: "none",
                opacity: 1,
                border: 0,
                margin: 0,
                padding: 0,
                position: "relative",
              }}
            >
              <span
                style={{
                  boxSizing: "border-box",
                  display: "block",
                  width: "initial",
                  height: "initial",
                  background: "none",
                  opacity: 1,
                  border: 0,
                  margin: 0,
                  padding: 0,
                  paddingTop: "52.5%",
                }}
              />
              <img
                alt="Functions in TypeScript"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1645371220076/16oJWNRPs.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
                decoding="async"
                data-nimg="responsive"
                className="blog-article-card-cover block w-full"
                style={{
                  position: "absolute",
                  inset: 0,
                  boxSizing: "border-box",
                  padding: 0,
                  border: "none",
                  margin: "auto",
                  display: "block",
                  width: 0,
                  height: 0,
                  minWidth: "100%",
                  maxWidth: "100%",
                  minHeight: "100%",
                  maxHeight: "100%",
                }}
              />
              <noscript>
                &lt;img alt="Functions in TypeScript" loading="lazy"
                decoding="async" data-nimg="responsive"
                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%"
                class="blog-article-card-cover block w-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1645371220076/16oJWNRPs.png?w=1600&amp;amp;h=840&amp;amp;fit=crop&amp;amp;crop=entropy&amp;amp;auto=compress,format&amp;amp;format=webp"/&gt;
              </noscript>
            </span>
          </a>
          <h1 className="blog-article-card-title mx-4 mb-2 block break-words font-heading text-2xl font-extrabold leading-snug text-slate-900 hover:opacity-75 dark:text-slate-100">
            <a href="https://blog.learncodeonline.in/functions-in-typescript">
              Functions in TypeScript
            </a>
          </h1>
          <div className="blog-article-card-author-strip mx-4 flex flex-row flex-wrap items-center">
            <div className="flex flex-col items-start leading-snug">
              <a
                className="block font-semibold text-slate-700 dark:text-slate-400"
                href="https://hashnode.com/@wajeshubham"
              >
                Shubham Waje
              </a>
              <div className="blog-article-card-article-meta flex flex-row text-sm">
                <a
                  className="flex flex-row items-center text-slate-500 dark:text-slate-400"
                  href="https://blog.learncodeonline.in/functions-in-typescript"
                >
                  <span className="flex items-center">
                    <svg
                      className="mr-2 h-4 w-4 fill-current"
                      viewBox="0 0 576 512"
                    >
                      <path d="M540.9 56.77c-45.95-16.66-90.23-24.09-129.1-24.75-60.7.94-102.7 17.45-123.8 27.72-21.1-10.27-64.1-26.8-123.2-27.74-40-.05-84.4 8.35-129.7 24.77C14.18 64.33 0 84.41 0 106.7v302.9c0 14.66 6.875 28.06 18.89 36.8 11.81 8.531 26.64 10.98 40.73 6.781 118.9-36.34 209.3 19.05 214.3 22.19C277.8 477.6 281.2 480 287.1 480c6.52 0 10.12-2.373 14.07-4.578 10.78-6.688 98.3-57.66 214.3-22.27 14.11 4.25 28.86 1.75 40.75-6.812C569.1 437.6 576 424.2 576 409.6V106.7c0-22.28-14.2-42.35-35.1-49.93zM272 438.1c-24.95-12.03-71.01-29.37-130.5-29.37-27.83 0-58.5 3.812-91.19 13.77-4.406 1.344-9 .594-12.69-2.047C34.02 417.8 32 413.1 32 409.6V106.7c0-8.859 5.562-16.83 13.86-19.83C87.66 71.7 127.9 63.95 164.5 64c51.8.81 89.7 15.26 107.5 23.66V438.1zm272-28.5c0 4.375-2.016 8.234-5.594 10.84-3.766 2.703-8.297 3.422-12.69 2.125C424.1 391.6 341.3 420.4 304 438.3V87.66c17.8-8.4 55.7-22.85 107.4-23.66 35.31-.063 76.34 7.484 118.8 22.88 8.2 3 13.8 10.96 13.8 19.82v302.9z" />
                    </svg>
                    <span>10 min read</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
