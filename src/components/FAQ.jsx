import React, { useState } from "react";

// const QNA_DATA = [
//   {
//     id: "1",
//     question: "How can the Actify CRM Portal benefit my business?",
//     answer:
//       "With Actify CRM, your business can improve sales tracking, enhance customer service, and optimize marketing efforts. It helps you stay organized by managing customer interactions, sales opportunities, and support tickets in one place, leading to better decision-making and stronger customer relationships.",
//   },
//   {
//     id: "3",
//     question: "Is the CRM portal customizable for my business needs?",
//     answer:
//       "Yes, Actify CRM is highly customizable. You can tailor workflows, adjust user roles, and create custom reports that align with your specific business processes. Our platform adapts to the unique needs of your business, ensuring that you get the most value from our CRM solution.",
//   },
//   {
//     id: "4",
//     question: "Is the Actify CRM Portal mobile-friendly?",
//     answer:
//       "Absolutely. The Actify CRM Portal is accessible via mobile devices, allowing you and your team to manage customer interactions, update sales information, and track tasks on the go. Whether in the office or on the road, your CRM is always within reach.",
//   },
//   {
//     id: "5",
//     question: "How can the Actify CRM Portal improve my sales process?",
//     answer:
//       "Actify CRM provides a structured approach to managing your sales pipeline. From tracking leads and deals to automating follow-ups, the platform ensures that no opportunity slips through the cracks. Sales teams can track their progress, prioritize high-value leads, and close deals faster using data-driven insights.",
//   },
// ];

const FAQ = (data) => {
  const [ExpandedItem, setExpandedItem] = useState(1);
// console.log(data)
  const QNA = ({ item, index }) => {
    return (
      <>
        <div>
          <button
            onClick={() =>
              index !== ExpandedItem
                ? setExpandedItem(index)
                : setExpandedItem(0)
            }
            className="flex items-center focus:outline-none"
          >
            <svg
              className="flex-shrink-0 w-6 h-6 text-blue-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={`${index == ExpandedItem ? "M20 12H4" : "M12 4v16m8-8H4"}`}
              />
            </svg>
            <h1 className="mx-4 sm:text-2xl max-sm:text-left text-black ">{item.question}</h1>
          </button>
          {index == ExpandedItem && (
            <div className="flex mt-8 md:mx-10">
              <span className="border border-blue-500" />
              <p className="max-w-7xl px-4 text-lg text-gray-700 ">
                {item.answer}
              </p>
            </div>
          )}
        </div>
        {/* {index < QNA_DATA.length - 1 && ( */}
          <hr className="my-8 border-gray-200 " />
        {/* )} */}
      </>
    );
  };

  return (
    <div className="py-8 w-full sm:w-6/12 mx-auto">
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto ">
          <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl">
            FAQ's
          </h1>
          <hr className="my-6 border-gray-200 " />
          <div>
            {data?.data?.map((item, index) => {
              return <div  className="hover:bg-[#d3eaff89]" key={index}><QNA  item={item} index={index} /></div>;
              // return <div  className="hover:bg-{bgColor}" key={item.id}><QNA  item={item} index={index} /></div>;
            })}
            {/* <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 ">
                  What can I expect at my first consultation ?
                </h1>
                          </button>
                          <div className="flex mt-8 md:mx-10">
                <span className="border border-blue-500" />
                <p className="max-w-3xl px-4 text-gray-500 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magni, eum quae. Harum officiis reprehenderit ex quia ducimus
                  minima id provident molestias optio nam vel, quidem iure
                  voluptatem, repellat et ipsa.
                </p>
              </div>
            </div>
            <hr className="my-8 border-gray-200 " />
            <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 ">
                  What are your opening hours ?
                </h1>
              </button>
            </div>
            <hr className="my-8 border-gray-200 " />
            <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 ">
                  Do I need a referral ?
                </h1>
              </button>
            </div>
            <hr className="my-8 border-gray-200 " />
            <div>
              <button className="flex items-center focus:outline-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 w-6 h-6 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <h1 className="mx-4 text-xl text-gray-700 ">
                  Is the cost of the appointment covered by private health
                  insurance ?
                </h1>
              </button>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;