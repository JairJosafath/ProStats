import { useEffect, useState } from "react";
import { Col, Grid, Pagination, Row } from "rsuite";
import Leagues from "../../containers/Leagues";
import LeagueCard from "../LeagueCard";

const LeagueGrid = ({ leagues }) => {
  const [multipleRows, setMultipleRows] = useState(false);

  const [activePage, setActivePage] = useState(1);
  useEffect(() => {
    if (leagues.length > 4) {
      // console.log("prepare rows");
      setMultipleRows(true);
    } else {
      // console.log("just one row is enough");
      setMultipleRows(false);
    }
  }, [leagues]);
  return (
    <>
      {leagues.length > 12 && (
        <div>
          <Pagination
            total={100}
            limit={12}
            activePage={activePage}
            onChangePage={setActivePage}
            style={{ margin: 10 }}
          />
        </div>
      )}
      <Grid>
        {multipleRows ? (
          <>
            <Row>
              {leagues
                ?.slice(activePage - 1 + 0, activePage - 1 + 4)
                .map((league) => (
                  <Col xs={6}>
                    <LeagueCard league={league} />
                  </Col>
                ))}
            </Row>
            <Row>
              {leagues
                ?.slice(activePage - 1 + 4, activePage - 1 + 8)
                .map((league) => (
                  <Col xs={6}>
                    <LeagueCard league={league} />
                  </Col>
                ))}
            </Row>
            <Row>
              {leagues
                ?.slice(activePage - 1 + 8, activePage - 1 + 12)
                .map((league) => (
                  <Col xs={6}>
                    <LeagueCard league={league} />
                  </Col>
                ))}
            </Row>
          </>
        ) : (
          <Row style={{ padding: "0 50px 0 50px" }}>
            {leagues?.slice(0, 5).map((league) => (
              <Col xs={8}>
                <LeagueCard league={league} />
              </Col>
            ))}
          </Row>
        )}
      </Grid>
      {leagues.length > 12 && (
        <div>
          <Pagination
            total={100}
            limit={12}
            activePage={activePage}
            onChangePage={setActivePage}
            style={{ margin: 10 }}
          />
        </div>
      )}
    </>
  );
};
export default LeagueGrid;
