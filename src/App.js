import React from "react";
import Dashboard from "./screens/Dashboard";

import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
  AmplifyForgotPassword,
} from "@aws-amplify/ui-react";

function App() {
  return (
    <AmplifyAuthenticator usernameAlias="email">
      <div className="amplify-slot" slot="sign-in">
        <AmplifySignIn
          headerText="Sign in to app"
          usernameAlias="email"
          slot="sign-in"
        >
          <div slot="amplify-form-section-header"></div>
          {/* Remove Create Acount  option */}
          {/* <div slot="secondary-footer-content"></div> */}
        </AmplifySignIn>
      </div>

      <div className="amplify-slot" slot="forgot-password">
        <AmplifyForgotPassword slot="forgot-password" />
      </div>

      <div className="amplify-slot" slot="sign-up">
        <AmplifySignUp
          slot="sign-up"
          usernameAlias="email"
          formFields={[
            {
              label: "Email",
              placeholder: "Email",
              required: true,
              type: "email",
            },
            {
              label: "Password",
              placeholder: "Password",
              required: true,
              type: "password",
            },
          ]}
        />
      </div>
      <Dashboard />
    </AmplifyAuthenticator>
  );
}

export default App;
