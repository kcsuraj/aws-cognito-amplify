## Aws Cognito Amplify

The Amplify Framework uses Amazon Cognito as the main authentication provider. Amazon Cognito is a robust user directory service that handles user registration, authentication, account recovery & other operations.

We are using aws amplify package provided by Amazon for developing authentication workflow in the frontend. It is a JavaScript library for frontend and mobile developers building cloud-enabled applications.

## Development

**Enivronment variables**

Create `.env` file from the `.env.sample` present and add configurations from aws cognito dashboard. Current `.env.sample` looks like this:

```
REACT_APP_AWS_COGNITO_REGION=
REACT_APP_AWS_USER_POOLS_ID=
REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID=
```

**Available Scripts**

| Npm Script | Description                                             |
| ---------- | ------------------------------------------------------- |
| `dev`      | Runs app in development mode                            |
| `build`    | Builds the app for production to the `build` folder.    |
| `test`     | Launches the test runner in the interactive watch mode. |
