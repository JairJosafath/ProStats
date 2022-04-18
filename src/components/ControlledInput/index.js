import { useEffect, useState } from "react";
import { Input } from "rsuite";

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
    currentFixture?.teamStats?.items[0]
      ? currentFixture?.teamStats?.items[0][
          `${stadium}_${type}_${attr.replaceAll(" ", "_")}`
        ]
      : ""
  );
  useEffect(() => {
    teamstatsTracker[stadium][type].filter(
      (stat) => stat.attr === attr
    )[0].val = value;
    setTeamstatsTracker(teamstatsTracker);
  }, [value, teamstatsTracker, stadium, type, attr, val, currentFixture]);
  return (
    <Input value={value} {...props} onChange={setValue} placeholder="0"></Input>
  );
};

export default ControlledInput;
