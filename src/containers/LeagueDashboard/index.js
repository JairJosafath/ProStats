import { Outlet, useParams } from "react-router-dom";
import SideNavCustom from "../../components/SideNavCustom";

const LeagueDashboard = () => {
  const { id } = useParams();
  return (
    <>
      <div style={{ display: "flex" }}>
        <SideNavCustom style={{ flex: "1" }} />
        <div style={{ flex: "4" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LeagueDashboard;
