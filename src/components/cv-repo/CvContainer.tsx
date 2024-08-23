"use client";

import { useEffect, useState } from "react";

import { cvData } from "~/utils";

import { CvCard } from "../cards";
import LightBox from "./LightBox";

const CvContainer = () => {
  const [cvLightBox, setCvLightBox] = useState({
    cvLink: "",
    name: "",
  });
  const [cvType, setCvType] = useState("internships");

  useEffect(() => {
    if (cvLightBox.cvLink === "") {
      document.body.classList.remove("overflow--hidden");
    } else {
      document.body.classList.add("overflow--hidden");
    }
  }, [cvLightBox]);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center gap-10">
        <button
          className={`px-6 py-4 text-lg font-semibold ${cvType === "internships" && "bg-primary text-white"} rounded-xl transition-all`}
          onClick={() => {
            setCvType("internships");
          }}
        >
          Internships
        </button>

        <button
          className={`px-6 py-4 text-lg font-semibold ${cvType === "placements" && "bg-primary text-white"} rounded-xl transition-all`}
          onClick={() => {
            setCvType("placements");
          }}
        >
          Placements
        </button>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-16">
        {cvType === "placements" && (
          <>
            {cvData.software.placements.map((data) => {
              return (
                <CvCard
                  key={data.id}
                  id={data.id}
                  cvLink={data.cvLink}
                  name={data.name}
                  companyName={data.companyName}
                  setCvLightBox={setCvLightBox}
                />
              );
            })}
          </>
        )}
        {cvType === "internships" && (
          <>
            {cvData.software.internships.map((data) => {
              return (
                <CvCard
                  key={data.id}
                  id={data.id}
                  cvLink={data.cvLink}
                  name={data.name}
                  companyName={data.companyName}
                  setCvLightBox={setCvLightBox}
                />
              );
            })}
          </>
        )}
      </div>

      {cvLightBox.cvLink !== "" && (
        <LightBox cvLightBox={cvLightBox} setCvLightBox={setCvLightBox} />
      )}
    </div>
  );
};
export default CvContainer;
