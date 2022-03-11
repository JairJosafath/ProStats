import { FlexboxGrid, List, Pagination, Panel } from "rsuite";
import FlexboxGridItem from "rsuite/esm/FlexboxGrid/FlexboxGridItem";
import FreeAgents from "../../components/FreeAgents";
import SearchPlayer from "../../components/SearchPlayers";
import StandingCard from "../../components/StandingCard";
import TransferPane from "../../components/TransferPane/TransferPane";

const Transfers = () => (
  <>
    <FlexboxGrid justify="space-around" style={{ padding: 10 }}>
      <FlexboxGridItem colspan={12}>
        <Panel header="Transfers" bordered>
          <TransferPane />
        </Panel>
      </FlexboxGridItem>
      <FlexboxGridItem colspan={6}>
        <FreeAgents />
      </FlexboxGridItem>
    </FlexboxGrid>
  </>
);

export default Transfers;
