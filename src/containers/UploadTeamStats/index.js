import {
  Uploader,
  Panel,
  Button,
  Dropdown,
  Grid,
  Row,
  Col,
  Input,
} from "rsuite";
import { useState, useRef, useEffect } from "react";
import teamStats from "../../backend/db/teamStats";

import { useParams } from "react-router-dom";

import UploadSSTeam from "../../components/UploadSSTeam";
import ReviewPanelTeam from "../../components/ReviewPanelTeam";

const ManualUploadTeam = () => {
  const [type, setType] = useState("choose type");

  return (
    <>
      <h4 style={{ margin: 30 }}>Review and Upload your stats</h4>

      <div style={{ marginLeft: 30 }}>
        <Dropdown title={type}>
          <Dropdown.Item onSelect={() => setType("summary")}>
            summary
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => setType("possession")}>
            possession
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => setType("passing")}>
            passing
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => setType("shooting")}>
            shooting
          </Dropdown.Item>
          <Dropdown.Item onSelect={() => setType("defending")}>
            defending
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div>
        {<ReviewPanelTeam type={type} team={"home"} />}
        {<ReviewPanelTeam type={type} team={"away"} />}
      </div>
    </>
  );
};

const UploadTeamStats = () => {
  const { type } = useParams();
  return (
    <>
      {type === "ss" && <UploadSSTeam />}
      {type === "ma" && <ManualUploadTeam />}
    </>
  );
};

export default UploadTeamStats;
