import React from "react";
import Dashboard from "./screens/Dashboard";

import { AmplifyAuthenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <AmplifyAuthenticator>
      <Dashboard />
    </AmplifyAuthenticator>
  );
}

export default App;
