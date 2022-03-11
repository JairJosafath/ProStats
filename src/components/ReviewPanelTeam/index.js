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
import teamStats from "../../backend/db/teamStats";

const ReviewPanelTeam = ({ type, team }) => {
  const [data, setData] = useState(teamStats);
  const inputRef = useRef();

  useEffect(() => {
    console.log(data);
    try {
      let id = 0;
      rows.map((row) => {
        return row.map((statrow) => {
          return (document.querySelector(`#${type}_${id++}`).value = "");
        });
      });
    } catch (e) {
      console.log("no data yet", e);
    }
  }, [type]);

  if (type === "choose type") return <>waiting</>;

  const row1 = data[team][type].slice(0, 0.5 * data[team][type].length + 1);
  const row2 = data[team][type].slice(
    0.5 * data[team][type].length + 1,
    1 * data[team][type].length + 1
  );

  const rows = [row1, row2];
  let statidcounter = 0;

  return (
    <>
      <div style={{ margin: 30, display: "block" }}>
        <div style={{ display: "flex" }}>
          <h4 style={{ margin: 30 }}>Review and Submit : {type}</h4>
          <h5 style={{ margin: 30 }}>{team}:</h5>
          <Dropdown style={{ margin: 30 }} title={"choose team"}>
            <Dropdown.Item>FCB</Dropdown.Item>
            <Dropdown.Item>RMD</Dropdown.Item>
          </Dropdown>
        </div>

        <Grid fluid style={{ width: "80%" }}>
          {rows.map((row, index) => (
            <Row key={index}>
              {row.map((stat, index) => {
                const id = statidcounter;
                statidcounter++;

                return (
                  <Col key={index} md={type === "summary" ? 4 : 4}>
                    <div style={{ margin: 3 }}>
                      <label>{stat.attr}</label>
                      <Input
                        id={`${team}_${type}_${id}`}
                        ref={inputRef}
                        style={{ width: 60 }}
                        placeholder={stat.value}
                        onChange={() => {
                          data[team][type][id].val = document.querySelector(
                            `#${team}_${type}_${id}`
                          ).value;
                        }}
                      />
                    </div>
                  </Col>
                );
              })}
            </Row>
          ))}
        </Grid>
      </div>

      <Button
        onClick={() => {
          console.log(data[team][type]);
          try {
            let id = 0;
            rows.map((row) => {
              return row.map((statrow) => {
                return (document.querySelector(
                  `#${team}_${type}_${id++}`
                ).value = "");
              });
            });
          } catch (e) {
            console.log("no data yet", e);
          }
        }}
        style={{ marginLeft: "40vw", width: 120 }}
        appearance="primary"
      >
        Submit Stats
      </Button>
    </>
  );
};

export default ReviewPanelTeam;
