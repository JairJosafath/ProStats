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

const ReviewPanel = ({ type }) => {
  const [data, setData] = useState(playerStats);
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

  const row1 = data[type].slice(0, 0.25 * data[type].length + 1);
  const row2 = data[type].slice(
    0.25 * data[type].length + 1,
    0.5 * data[type].length + 1
  );
  const row3 = data[type].slice(
    0.5 * data[type].length + 1,
    0.75 * data[type].length + 1
  );
  const row4 = data[type].slice(
    0.75 * data[type].length + 1,
    1 * data[type].length + 1
  );
  const rows = [row1, row2, row3, row4];
  let statidcounter = 0;

  return (
    <>
      <div style={{ margin: 30, display: "block" }}>
        <h4 style={{ margin: 30 }}>Review and Submit : {type}</h4>
        <Grid fluid style={{ width: "80%" }}>
          {rows.map((row, index) => (
            <Row key={index}>
              {row.map((stat, index) => {
                const id = statidcounter;
                statidcounter++;

                return (
                  <Col key={index} md={type === "summary" ? 4 : 6}>
                    <div>
                      <label>{stat.attr}</label>
                      <Input
                        id={`${type}_${id}`}
                        ref={inputRef}
                        style={{ width: 60 }}
                        placeholder={stat.value}
                        onChange={() => {
                          data[type][id].val = document.querySelector(
                            `#${type}_${id}`
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
          console.log(data[type]);
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
        }}
        style={{ marginLeft: "40vw", width: 120 }}
        appearance="primary"
      >
        Submit Stats
      </Button>
    </>
  );
};

export default ReviewPanel;
