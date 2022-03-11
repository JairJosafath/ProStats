import { FlexboxGrid } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import StandingCard from "../../components/StandingCard";

const Standings = () => {
  return (
    <>
      <FlexboxGrid justify={"space-around"} style={{ padding: 10 }}>
        <FlexboxGridItem colspan={16}>
          {/*  */}
          <StandingCard title={"Table"} data={"data"} />
        </FlexboxGridItem>
        <FlexboxGridItem colspan={6}>
          {/*  */}
          <StandingCard title={"Top Performers"} data={"data"} />
        </FlexboxGridItem>
      </FlexboxGrid>
    </>
  );
};

export default Standings;
