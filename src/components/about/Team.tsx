"use client";

import { useEffect, useState } from "react";

import { teamData } from "~/utils";
import { TeamAdvisorCard, TeamHeadCard } from "../cards";

const Team = () => {
  const [team, setTeam] = useState("advisors");

  useEffect(() => {
    console.log(team);
  }, [team]);

  return (
    <section className="grid place-content-center gap-10 px-4 pb-32 text-center lg:px-12 xl:px-32 xl:pb-48">
      <h2 className="text-5xl font-semibold">Our Team</h2>

      <div className="flex items-center justify-center gap-4 pb-10">
        <div className="items-centre flex justify-center rounded-xl bg-gray-100 relative">
          <button
            className={`md:px-10 w-32 md:w-40 py-4 text-lg font-semibold z-[15] ${team === "heads" && "text-white bg-primary"} transition-all rounded-xl`}
            onClick={() => {
              setTeam("heads");
            }}
          >
            Heads
          </button>
          <button
            className={`md:px-10 w-32 md:w-40 py-4 text-lg font-semibold z-[15] ${team === "advisors" && "text-white bg-primary"} transition-all rounded-xl`}
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
                <TeamHeadCard
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
                <TeamAdvisorCard
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
