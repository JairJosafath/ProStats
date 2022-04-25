import { useEffect, useState } from "react";
import { Input } from "rsuite";
import { TeamStats } from "../../backend/db/teamStatsClass";

const ts = new TeamStats();
//use of controlled inputs so we can handle changes mapped to the teamstats object
const ControlledInput = ({
  teamstatsTracker,
  stadium,
  type,
  attr,
  val,
  setTeamstatsTracker,
  currentFixture,
  ...props
}) => {
  const [value, setValue] = useState(
    (teamstatsTracker[`${stadium}_${type}_${attr}`] &&
      teamstatsTracker[`${stadium}_${type}_${attr}`]) ||
      (currentFixture?.teamStats?.items[0]
        ? currentFixture?.teamStats?.items[0][
            `${stadium}_${type}_${attr.replaceAll(" ", "_")}`
          ]
        : "")
  );
  useEffect(() => {
    // teamstatsTracker.stats[stadium][type].filter(
    //   (stat) => stat.attr === attr
    // )[0].val = value;

    if (value && teamstatsTracker) {
      const key = `${stadium}_${type}_${attr}`;
      teamstatsTracker[key] = parseInt(value);
      setTeamstatsTracker(teamstatsTracker);
      console.log("with empty ini obj", teamstatsTracker);
    }
  }, [value, stadium, type, attr, val]);

  useEffect(() => {
    setValue(
      currentFixture?.teamStats?.items[0]
        ? currentFixture?.teamStats?.items[0][
            `${stadium}_${type}_${attr.replaceAll(" ", "_")}`
          ]
        : ""
    );
  }, [teamstatsTracker]);
  return (
    <Input
      value={value}
      {...props}
      onChange={(inpVal, e) => {
        setValue(e.currentTarget.value);
      }}
      placeholder="0"
    ></Input>
  );
};

export default ControlledInput;
