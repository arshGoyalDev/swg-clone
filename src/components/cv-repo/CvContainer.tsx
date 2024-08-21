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
      document.body.style = "overflow: auto;";
    } else {
      document.body.style = "overflow: hidden;";
    }
  }, [cvLightBox]);

  return (
    <div className="mt-10">
      <div className="flex items-center justify-center gap-10">
        <label
          htmlFor="internships"
          className="flex cursor-pointer items-center gap-2"
        >
          <input
            type="radio"
            name="cv-type"
            id="internships"
            onChange={(e) => {
              if (e.target.checked) {
                setCvType("internships");
              }
            }}
          />
          <p className="text-xl font-semibold">Internships</p>
        </label>
        <label
          htmlFor="placement"
          className="flex cursor-pointer items-center gap-2"
        >
          <input
            type="radio"
            name="cv-type"
            id="placement"
            onChange={(e) => {
              if (e.target.checked) {
                setCvType("placements");
              }
            }}
          />
          <p className="text-xl font-semibold">Placement</p>
        </label>
      </div>

      <div className="mt-16 flex flex-wrap items-center justify-center gap-16">
        {cvType === "placements"
          ? cvData.software.placements.map((data) => {
              return (
                <CvCard
                  key={data.id}
                  cvLink={data.cvLink}
                  name={data.name}
                  companyName={data.companyName}
                  setCvLightBox={setCvLightBox}
                />
              );
            })
          : cvData.software.internships.map((data) => {
              return (
                <CvCard
                  key={data.id}
                  cvLink={data.cvLink}
                  name={data.name}
                  companyName={data.companyName}
                  setCvLightBox={setCvLightBox}
                />
              );
            })}
      </div>

      {cvLightBox.cvLink !== "" && (
        <LightBox cvLightBox={cvLightBox} setCvLightBox={setCvLightBox} />
      )}
    </div>
  );
};
export default CvContainer;
