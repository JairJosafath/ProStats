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
import playerStats from "../../backend/db/playerStats";

import { useParams } from "react-router-dom";

import UploadSS from "../../components/UploadSS";
import ReviewPanel from "../../components/ReviewPanel";

const ManualUpload = () => {
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
          <Dropdown.Item onSelect={() => setType("goalkeeping")}>
            goalkeeping
          </Dropdown.Item>
        </Dropdown>
      </div>
      {<ReviewPanel type={type} />}
    </>
  );
};

const UploadPlayerStats = () => {
  const { type } = useParams();
  return (
    <>
      {type === "ss" && <UploadSS />}
      {type === "ma" && <ManualUpload />}
    </>
  );
};

export default UploadPlayerStats;
