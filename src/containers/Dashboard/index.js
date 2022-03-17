import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "rsuite";

const Dashboard = () => {
  const { user, signOut } = useAuthenticator();
  console.log("userrrrr", user);
  return (
    <div>
      <h3>Dashboard</h3>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default Dashboard;
