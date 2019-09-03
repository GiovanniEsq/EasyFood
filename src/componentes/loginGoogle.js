//import React, { Component } from "react";
//import GoogleLogin from "react-google-login";
//import { PostData } from "./loginPromise";
/*en el documento original no traía la parte que decía if responseJson.user..., sí falla prueba quitando eso*/
/*
class Welcome extends Component {
  constructor(props) {
    super(props);
    this.stats = {
      redirectToReferrer: false
    };
    this.signup = this.signup.bind(this);
  }
  signup(res, type) {
    let postData;
    if (res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    PostData("signup", postData).then(result => {
      let responseJson = result;
      if (responseJson.userData) {
        sessionStorage.setItem("userData", JSON.stringify(responseJson));
        this.setState({ redirectToReferrer: true });
      }
    });
  }

  render() {
    const responseGoogle = response => {
      console.log(response);
      this.signup(response, "Google");
    };
    return (
      <GoogleLogin
        clientId="992538793934-3e9un1iq35bv9mf9ovrq3f7f6bt5a3dv.apps.googleusercontent.com"
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    );
  }
}
export default Welcome;
*/
