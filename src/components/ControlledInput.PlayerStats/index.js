import { useEffect, useState } from "react";
import { Input } from "rsuite";
import playerStats from "../../backend/db/playerStats";

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
    (playerstatsTracker[`${type}_${attr}`] &&
      playerstatsTracker[`${type}_${attr}`]) ||
      (currentFixture?.playerStats?.items?.filter(
        (stats) => stats.player.id === currentPlayer?.id
      )[0]
        ? currentFixture?.playerStats?.items?.filter(
            (stats) => stats.player.id === currentPlayer?.id
          )[0][`${type}_${attr.replaceAll(" ", "_")}`]
        : "")
  );

  useEffect(() => {
    if (value) {
      playerstatsTracker[`${type}_${attr}`] = parseInt(value);
      setPlayerstatsTracker(playerstatsTracker);
      console.log(playerstatsTracker);
    }
  }, [currentPlayer, value]);

  return (
    <Input
      type="number"
      value={value}
      {...props}
      onChange={setValue}
      placeholder={0}
    ></Input>
  );
};

export default ControlledInput;
