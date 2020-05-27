// Dashboard with user info and app's protected resources; Accessible is user authenticated
import React, { useState, useEffect } from "react";
import logo from "../logo.svg";
import { AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    /**
     * Fetch user session from storage and store in state
     *
     * @returns {void}
     * @memberof ConfigureDrugReport
     */
    async function getUserSession() {
      try {
        const userSesion = await Auth.currentAuthenticatedUser();

        console.log("User session data", userSesion);
        console.log(
          "Cognito id token for authorizations",
          userSesion.signInUserSession.idToken.jwtToken
        );
        setUser(userSesion);
      } catch (error) {
        // Handle error, mostly fails in user authentication
        console.log(error);
      }
    }
    getUserSession();
  }, []);

  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        {user && <h4>Hello {user.username}</h4>}

        <p>This project demonstrates the usage of AWS Amplify in React</p>
        <a
          className="Dashboard-link"
          href="https://github.com/kcsuraj/aws-cognito-amplify.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repo
        </a>

        <AmplifySignOut />
      </header>
    </div>
  );
}

export default Dashboard;
