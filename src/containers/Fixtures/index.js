import { FlexboxGrid, Panel } from "rsuite";
import FixturesPane from "../../components/Fixtures";
import StandingCard from "../../components/StandingCard";

const Fixtures = () => (
  <>
    <FlexboxGrid>
      <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={16}>
        <div style={{ margin: 30 }}>
          <Panel header={"Fixtures"}>
            <FixturesPane />
          </Panel>
        </div>
      </FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={3}></FlexboxGrid.Item>
    </FlexboxGrid>
  </>
);

export default Fixtures;
