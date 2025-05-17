import { useState } from "react";

function Tabs({tabs, selectedTab, setSelectedTab}) {
  
    const handleTabChange = (tab) => {
      setSelectedTab(tab);
    //   console.log(tab);
    };
  
    return (
      <div  className="grid grid-cols-1 sm:grid-cols-4 mt-10 px-4 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabChange(tab)}
            style={{
              padding: "10px 20px",
              borderRadius: "20px",
              backgroundColor: selectedTab === tab ? "black" : "transparent",
              color: selectedTab === tab ? "white" : "gray",
              border: "none",
              cursor: "pointer",
              outline:"none"
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }

  export default Tabs