import { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { FlexboxGrid, Input, Panel } from "rsuite";
import LUploadPhotoCustom from "../../../components/LUploadPhotoCustom";
import useLeagueDashboard from "../../../hooks/useLeaugueDashboard";

const LDashboard = () => {
  const [leaguename, setLeaguename] = useState("");
  const [leaguedescription, setLeaguedescription] = useState("");
  const { league, setLeague, createTournament, setCreateTournament } =
    useOutletContext();
  useEffect(() => {
    // console.log(league);
    setLeaguename(league?.name);
    setLeaguedescription(league?.description);
  }, [league]);
  return (
    <>
      <Panel shaded header="League Info">
        <FlexboxGrid justify="space-around">
          <FlexboxGrid.Item colspan={6}>
            {/* <LUploadPhotoCustom/> */}
          </FlexboxGrid.Item>
          <FlexboxGrid.Item colspan={6}>
            <div>
              <label>League Name</label>
              <Input
                value={leaguename}
                placeholder={"league name ..."}
                onChange={setLeaguename}
              />
            </div>

            <div>
              <label>Description</label>
              <Input
                placeholder={"Slogan or anything really ..."}
                onChange={setLeaguedescription}
                value={leaguedescription}
              />
            </div>
          </FlexboxGrid.Item>
        </FlexboxGrid>
      </Panel>
      <h5>Work in Progress</h5>
    </>
  );
};

export default LDashboard;
