### Aws Cognito Amplify

The Amplify Framework uses Amazon Cognito as the main authentication provider. Amazon Cognito is a robust user directory service that handles user registration, authentication, account recovery & other operations.

We are using aws amplify package provided by Amazon for developing authentication workflow in the frontend. It is a JavaScript library for frontend and mobile developers building cloud-enabled applications.

**Note**: We are using [@aws-amplify/ui-react](https://www.npmjs.com/package/@aws-amplify/ui-react). This library leverages shared Web Components (browser feature that provides a standard component model for the Web), enabling consistent UI styling and interactions.

There is a a different library [aws-amplify-react](https://www.npmjs.com/package/aws-amplify-react) which is considered legacy by AWS.

### Demo

[https://kcsuraj.github.io/aws-cognito-amplify](https://kcsuraj.github.io/aws-cognito-amplify)

### Development

**Enivronment variables**

Create `.env` file from the `.env.sample` present and add configurations from aws cognito dashboard. Current `.env.sample` looks like this:

```bash
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

**Amplify UI Theme Customization**

We can update the amplify css variables to change color and size of amplify UI components in `index.css`. Find the full list of customization options [here](https://docs.amplify.aws/ui/customization/theming/q/framework/react).

```css
/* Customize Amplify UI theme */
:root {
  --amplify-primary-color: #47a899;
  --amplify-primary-tint: #65a89e;
  --amplify-primary-shade: #2c7469;
}
```

### Important Links

- [AWS Amplify Getting Started](https://docs.amplify.aws/lib/auth/getting-started/q/platform/js)
- [AWS Amplify UI Components Library](https://docs.amplify.aws/ui/auth/authenticator/q/framework/react)
- [Starter project for ReactJS + Amazon Cognito + Amazon Amplify Framework with AWS CDK support](https://github.com/vbudilov/reactjs-cognito-starter)
