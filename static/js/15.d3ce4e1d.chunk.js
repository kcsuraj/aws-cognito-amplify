(this["webpackJsonpaws-cognito-amplify"]=this["webpackJsonpaws-cognito-amplify"]||[]).push([[15],{157:function(t,e,a){"use strict";a.r(e),a.d(e,"amplify_federated_sign_in",(function(){return r}));var i=a(32),n=a(25),d=a(11),o=a(7),s=a(75),f=new n.a("amplify-federated-sign-in"),r=function(){function t(t){Object(i.g)(this,t),this.authState=d.a.SignIn,this.federated={}}return t.prototype.componentWillLoad=function(){if(!s.a||"function"!==typeof s.a.configure)throw new Error(o.d);var t=s.a.configure({}).oauth,e=void 0===t?{}:t;e.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e):e.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),e.awsCognito)),e.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),e.auth0))},t.prototype.render=function(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(i.f)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(i.f)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(i.f)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)},t}()}}]);
//# sourceMappingURL=15.d3ce4e1d.chunk.js.map