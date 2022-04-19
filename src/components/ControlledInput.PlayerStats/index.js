import { useEffect, useState } from "react";
import { Input } from "rsuite";

//use of controlled inputs so we can handle changes mapped to the playerstats object
const ControlledInput = ({
  playerstatsTracker,
  stadium,
  type,
  attr,
  val,
  setPlayerstatsTracker,
  currentFixture,
  tempObject,
  setTempObject,
  currentPlayer,
  ...props
}) => {
  // const [playerTemp, setPlayerTemp] = useState({});
  const [value, setValue] = useState(
    currentFixture?.playerStats?.items?.filter(
      (stats) => stats.player.id === currentPlayer?.id
    )[0]
      ? currentFixture?.playerStats?.items?.filter(
          (stats) => stats.player.id === currentPlayer?.id
        )[0][`${type}_${attr.replaceAll(" ", "_")}`]
      : ""
  );

  useEffect(() => {
    playerstatsTracker[type].filter((stat) => stat.attr === attr)[0].val =
      value;

    setPlayerstatsTracker(playerstatsTracker);
  }, [currentPlayer, value]);

  return (
    <Input value={value} {...props} onChange={setValue} placeholder="0"></Input>
  );
};

export default ControlledInput;
