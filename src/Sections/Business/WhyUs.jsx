import React from "react";
import { infoArray } from "../../data";

const WhyUs = ({ data }) => {
  const InfoDiv = ({ item }) => (
    <div
      className={`flex flex-col h-52 items-center justify-center p-4 bg-orange-300 rounded-xl`}
    >
    {/* <div
      className={`flex flex-col h-52 items-center justify-center p-4 ${item?.bgColor} rounded-xl`}
    > */}
      <span>{item?.svg}</span>
      <h3 className="my-3 sm:text-3xl text-lg font-semibold text-center">
        {item?.title}
      </h3>
      <div className="space-y-1 text-center sm:text-lg leading-tight">
        <p>{item?.description}</p>
      </div>
    </div>
  );

  return (
    <div>
      <section className="p-4 py-10 bg-gradient-to-b from-white via-gray-100 to-white">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="sm:text-5xl text-3xl font-bold">
            Why {data}?
          </h2>
          <p className="text-gray-600 text-lg">What do you get?</p>
        </div>
        <div className="container mx-auto grid justify-center items-start gap-4 grid-cols-2 lg:grid-cols-4 py-10">
          {infoArray.map((item) => {
            return <InfoDiv item={item} key={item?.id} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
