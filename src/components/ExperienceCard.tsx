import { FC } from "react";
import { companies } from "../data/companies";
import { x } from "@xstyled/styled-components";

export const ExperienceCard: FC<{
  company: (typeof companies)[0];
  isLeft?: boolean;
}> = ({ company, isLeft }) => {
  return (
    <x.div
      margin={"20 0"}
      display="flex"
      justifyContent={isLeft ? "start" : "end"}
    >
      <x.div
        maxWidth={"calc(50% - 40px)"}
        display="flex"
        flexDirection="column"
        alignItems={isLeft ? "end" : "start"}
        lineHeight={1.5}
      >
        <x.div>{company.company}</x.div>
        <x.div>{company.time}</x.div>
        <x.div>
          <x.ul>
            {company.points.map((point, i) => (
              <x.li key={i}>{point}</x.li>
            ))}
          </x.ul>
        </x.div>
      </x.div>
    </x.div>
  );
};
