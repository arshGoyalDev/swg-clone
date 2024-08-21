"use client";

import { useState } from "react";

import { teamData } from "~/utils";

import { TeamCard } from "../cards";

const Team = () => {
  const [team, setTeam] = useState("heads");

  return (
    <section className="grid place-content-center gap-10 px-4 pb-32 text-center lg:px-12 xl:px-32 xl:pb-48">
      <h2 className="text-5xl font-semibold">Our Team</h2>

      <div className="flex items-center justify-center gap-4 pb-10">
        <div className="items-centre relative flex justify-center rounded-xl bg-gray-100">
          <button
            className={`z-[15] w-32 py-4 text-lg font-semibold md:w-40 md:px-10 ${team === "heads" && "bg-primary text-white"} rounded-xl transition-all`}
            onClick={() => {
              setTeam("heads");
            }}
          >
            Heads
          </button>
          <button
            className={`z-[15] w-32 py-4 text-lg font-semibold md:w-40 md:px-10 ${team === "advisors" && "bg-primary text-white"} rounded-xl transition-all`}
            onClick={() => {
              setTeam("advisors");
            }}
          >
            Advisors
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
        {team === "heads" && (
          <>
            {teamData.heads.map((head) => {
              return (
                <TeamCard
                  key={head.name}
                  name={head.name}
                  role={head.role}
                  profilePic={head.profilePic}
                />
              );
            })}
          </>
        )}
        {team === "advisors" && (
          <>
            {teamData.advisors.map((advisor) => {
              return (
                <TeamCard
                  key={advisor.name}
                  name={advisor.name}
                  profilePic={advisor.profilePic}
                />
              );
            })}
          </>
        )}
      </div>
    </section>
  );
};
export default Team;
