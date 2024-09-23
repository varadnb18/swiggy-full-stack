import React from "react";
import Header from "../Header/Header";
import LoginPage from "../Login_Page/LoginPage";
import "./Pages.css";

function ThirdPage() {
  return (
    <>
      <Header />
      <div className="third-page">
        <LoginPage />
      </div>
    </>
  );
}

export default ThirdPage;
