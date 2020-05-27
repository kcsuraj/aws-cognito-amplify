import React from "react";
import logo from "../logo.svg";

function Dashboard() {
  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        <p>
          Edit <code>src/Dashboard.js</code> and save to reload.
        </p>
        <a
          className="Dashboard-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Dashboard;
