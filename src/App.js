// Application's Entry point; wraps protected component with AmplifyAutheticator
import React, { useState, useEffect } from "react";
import Dashboard from "./screens/Dashboard";

import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignUp,
  AmplifyForgotPassword,
  AmplifyConfirmSignUp,
} from "@aws-amplify/ui-react";
import { onAuthUIStateChange, AuthState } from "@aws-amplify/ui-components";

function App() {
  // Status to check user authentication flag
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    // Listen to auth state change and store authentication status flag
    return onAuthUIStateChange((authState) => {
      if (authState === AuthState.SignedIn) {
        setSignedIn(true);
      } else if (authState === AuthState.SignedOut) {
        setSignedIn(false);
      }
    });
  }, []);

  return (
    // initialAuthState accepts AuthState.SignIn or AuthState.SignUp and defaults to AuthState.SignIn
    <AmplifyAuthenticator
      usernameAlias="email"
      initialAuthState={AuthState.SignIn}
      style={
        signedIn
          ? {}
          : { display: "flex", justifyContent: "center", marginTop: 60 }
      }
    >
      <AmplifySignIn
        headerText="Sign in to awesome app"
        usernameAlias="email"
        slot="sign-in"
      >
        <div slot="amplify-form-section-header"></div>
        {/* Remove Create Acount  option */}
        {/* <div slot="secondary-footer-content"></div> */}
      </AmplifySignIn>

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
      {signedIn && <Dashboard />}
    </AmplifyAuthenticator>
  );
}

export default App;
