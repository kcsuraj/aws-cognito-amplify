const awsExports = {
  aws_cognito_region: process.env.REACT_APP_AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.REACT_APP_AWS_USER_POOLS_ID,
  aws_user_pools_web_client_id:
    process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,
  // Enable below to add sign in with AWS Federation
  // federationTarget: 'COGNITO_USER_POOLS',
  // oauth: {
  //   domain: '',
  //   redirectSignIn: 'http://localhost:3000',
  //   redirectSignOut: 'http://localhost:3000/logout',
  //   responseType: 'code',
  //   scope: ['phone', 'email', 'openid', 'profile']
  // }
};

export default awsExports;
