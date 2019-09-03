import React from "react";
import "../styles/login.css";
import GoogleLogin from "react-google-login";
import logo from "../assets/book.png";

const Login = () => {
  return (
    <div className="contenedorLogin">
      <div id="logoC">
        <img src={logo} id="logoL" />
        <h1 id="easyf">EasyFood</h1>
        {<GoogleLogin />}
      </div>
    </div>
  );
};

export default Login;
