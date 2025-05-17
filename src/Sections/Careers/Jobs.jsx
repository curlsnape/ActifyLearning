import React, { useEffect, useState } from "react";
import JobCards from "../../components/JobCards";
import Tabs from "../../components/Tabs";

const jobCard = [
    {
      designation: "Developer",
      title: "Web Developer",
      description: "Work here as a Web Developer",
      location: "Thane, Mumbai",
      type: "Full Time",
      long_description: ['Design and develop high-volume, low-latency applications for mission-critical systems, ensuring top-tier availability and performance.', 'Contribute to all phases of the product development lifecycle.', 'Write well-designed, testable, and efficient code.', 'Ensure designs comply with specifications.', 'Prepare and produce releases of software components.', 'Support continuous improvement by investigating alternate technologies and presenting these for architectural review.']
    },
    {
      designation: "App Developer",
      title: "App Developer",
      description: "Work here as a App Developer",
      location: "Thane, Mumbai",
      type: "Intern",
      long_description:  ['Design and develop high-volume, low-latency applications for mission-critical systems, ensuring top-tier availability and performance.', 'Contribute to all phases of the product development lifecycle.', 'Write well-designed, testable, and efficient code.', 'Ensure designs comply with specifications.', 'Prepare and produce releases of software components.', 'Support continuous improvement by investigating alternate technologies and presenting these for architectural review.']
    },
    {
      designation: "Python-Django",
      title: "Python-Django",
      description: "Work here as a Python-Django Developer",
      location: "Thane, Mumbai",
      type: "Remote",
      long_description:  ['Design and develop high-volume, low-latency applications for mission-critical systems, ensuring top-tier availability and performance.', 'Contribute to all phases of the product development lifecycle.', 'Write well-designed, testable, and efficient code.', 'Ensure designs comply with specifications.', 'Prepare and produce releases of software components.', 'Support continuous improvement by investigating alternate technologies and presenting these for architectural review.']
    },
    {
      designation: "Java Developer",
      title: "Java Developer",
      description: "Work here as a Java Developer",
      location: "Thane, Mumbai",
      type: "Part Time",
      long_description:  ['Design and develop high-volume, low-latency applications for mission-critical systems, ensuring top-tier availability and performance.', 'Contribute to all phases of the product development lifecycle.', 'Write well-designed, testable, and efficient code.', 'Ensure designs comply with specifications.', 'Prepare and produce releases of software components.', 'Support continuous improvement by investigating alternate technologies and presenting these for architectural review.']
    },
  ];

const Jobs = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const tabs = ["All", "Developer", "App Developer", "Python-Django"];

    const [CardsState, setCardsState] = useState(jobCard)

  const filterArray = () => {
    const result = jobCard.filter((val, id) => {
      if (val.designation === selectedTab) {
        return val.designation === selectedTab;
      }
      //   val.designation === "All" ? jobCard : val.designation === selectedTab
    });
    setCardsState(result)
    // console.log(result);
  };



  useEffect(() => {
    if (selectedTab !== "All") {
      filterArray();
    }else{
        setCardsState(jobCard)
    }
  }, [selectedTab]);


  return (
    <div>
      <div className="w-6/12 mx-auto">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </div>
      <div className="mt-20 flex flex-col items-center">
        <div className="text-black text-3xl sm:text-5xl font-bold text-center w-10/12 sm:w-6/12">
          Some opportunities for you to explore
        </div>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 w-11/12 sm:w-8/12 mx-auto">
        {CardsState?.map((val, id) => {
          return <div><JobCards val={val} key={id} /></div>;
        })}
      </div>
    </div>
  );
};

export default Jobs;
