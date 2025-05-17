import React from "react";
import blogImg from "../../assets/blogimg.png";

const Blogs = () => {
  return (
    <section className="bg-gradient-to-b from-[white] py-8 pt-20">
      <p className="container px-6 py-10 mx-auto text-black">
        <h1 className="text-2xl font-semibold capitalize lg:text-3xl ">
          From the blog
        </h1>

        <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            src={blogImg}
            alt=""
          />
          <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
            <p className="text-sm uppercase ">About -</p>

            <a
              href="https://www.actifyzone.com/post/streamline-sales-grow-your-sme-with-actify-s-crm-portal"
              className="block mt-4 md:text-2xl text-xl font-semibold  hover:underline "
            >
              Streamline Sales & Grow Your SME with Actify’s CRM Portal!
            </a>

            <p className="mt-3 text-md  md:text-lg ">
              For small and medium-sized enterprises (SMEs) aiming for growth,
              managing leads effectively is key. Yet, many SMEs face obstacles
              in organizing and nurturing their leads, leading to missed
              opportunities and revenue loss. Actify’s CRM portal provides a
              solution by simplifying and streamlining your.....
            </p>

            <a
              href="https://www.actifyzone.com/post/streamline-sales-grow-your-sme-with-actify-s-crm-portal"
              className="inline-block mt-2 underline hover:text-blue-400"
            >
              Read more
            </a>
            <p className="text-sm">
              <span className="font-mono">2</span> min read
            </p>

            <div className="flex items-center mt-6">
              <img
                className="object-cover object-center w-10 h-10 rounded-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS76c_whJLWg5M4Xn9j_GPTVIm4NZSD80UrOQ&s"
                alt=""
              />
              <div className="mx-4">
                <h1 className="text-sm ">Aadishaki Tiwari</h1>
                <p className="text-sm ">Editor</p>
              </div>
            </div>
          </div>
        </div>
      </p>
    </section>
  );
};

export default Blogs;
