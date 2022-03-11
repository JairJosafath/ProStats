import { List, Panel } from "rsuite";

const ManagePlayer = () => {
  return (
    <>
      <div style={{ padding: 10, display: "flex" }}>
        <Panel
          header={"Performance"}
          style={{
            background: "#f25c54",
            margin: 10,
            flex: "1",
            height: 300,
          }}
          bordered
        ></Panel>
        <Panel
          style={{ margin: 10, flex: "1" }}
          header={"Manage stats"}
          bordered
        >
          <List>
            <List.Item>fixture</List.Item>
            <List.Item>fixture</List.Item>
            <List.Item>fixture</List.Item>
          </List>
        </Panel>

        <Panel
          header={"Requests"}
          style={{ margin: 10, flex: "1", height: 300 }}
          bordered
        >
          {" "}
          <List>
            <List.Item>request</List.Item>
            <List.Item>request</List.Item>
            <List.Item>request</List.Item>
          </List>
        </Panel>
      </div>
      <div style={{ padding: 10, display: "flex" }}>
        <Panel
          header={"Ranking"}
          style={{ flex: "1", margin: 10, height: 300 }}
          bordered
        ></Panel>
        <Panel
          header={"Trophy Room"}
          style={{ flex: "1", margin: 10, height: 300 }}
          bordered
        ></Panel>
      </div>
    </>
  );
};

export default ManagePlayer;
