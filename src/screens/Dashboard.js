import React from "react";
import logo from "../logo.svg";
import { AmplifySignOut } from "@aws-amplify/ui-react";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        <p>Authentication with AWS Amplify</p>

        <AmplifySignOut />
      </header>
    </div>
  );
}

export default Dashboard;
