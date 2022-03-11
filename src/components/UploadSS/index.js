import { useParams } from "react-router-dom";
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
import ReviewPanel from "../ReviewPanel";
const UploadSS = () => {
  const [value, setValue] = useState([]);
  const [type, setType] = useState("choose type");

  useEffect(() => {
    console.log(type);
    if (value.length > 1) {
      value.shift();
    }
    if (value.length === 0) {
    }
  }, [value, type]);
  const handleUpload = () => {
    console.log("uploads");
    console.log(value);
    setValue([]);
  };
  return (
    <>
      <h4 style={{ margin: 30 }}>Upload your SS and review your stats</h4>
      <div style={{ display: "flex" }}>
        <div style={{ marginLeft: 30, width: 300, height: 70 }}>
          <Uploader
            value={value}
            onChange={setValue}
            fileList={value}
            listType="picture-text"
            action="#"
            autoUpload={false}
            accept={"image/*"}
            onSuccess={() => console.log("succesful upload ss player")}
          >
            <Button
              style={{ color: "white", background: "rgba(40,40,250,1)" }}
              appearance="primary"
            >
              choose SS
            </Button>
          </Uploader>
        </div>

        <div>
          <Dropdown disabled={!value.length} title={type}>
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
          <Button
            style={{ marginLeft: 20, background: "green" }}
            disabled={!value.length || type === "choose type"}
            onClick={() => handleUpload()}
            appearance="primary"
          >
            Submit
          </Button>
        </div>
      </div>
      {<ReviewPanel type={type} />}
    </>
  );
};

export default UploadSS;
