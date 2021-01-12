import React from "react";
import "./css/header.css";

const showDropdown = () => {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("topnavFull");
};
function Header() {
  const imageUrl =
    "http://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png";
  return (
    <div className="topnav" id="myTopnav">
      <div className="left">
        <a href="#/" id="bars">
          <img
            src={logo}
            width="100%"
            height="100%"
            onClick={(e) => {
              e.preventDefault();
              //history.push('/Home')
            }}
          />
        </a>
        <a href="#/" className="sm-btn">
          <button
            className="drop-btn"
            onClick={(e) => {
              e.preventDefault();
              //history.push('/Login')
            }}
          >
            Login
          </button>
        </a>

        <a className="sm-btn2" onClick={showDropdown}>
          <img src={imageUrl} />
        </a>
      </div>
      <div className="onRight">
        <a
          href="#/"
          className=""
          onClick={(e) => {
            e.preventDefault();
            //   history.push('/Home')
            showDropdown();
          }}
        >
          Home
        </a>
        <a
          href="#/"
          className=""
          onClick={(e) => {
            e.preventDefault();
            // history.push('/Twitch')
            showDropdown();
          }}
        >
          Twitch
        </a>
        <a
          href="#/"
          className=""
          onClick={(e) => {
            e.preventDefault();
            //history.push('/News')
            showDropdown();
          }}
        >
          News
        </a>

        <a
          href="#/"
          className=""
          onClick={(e) => {
            e.preventDefault();
            //history.push('/Faq')
            showDropdown();
          }}
        >
          FAQ
        </a>
        <a
          href="#/"
          className=""
          onClick={(e) => {
            e.preventDefault();
            //history.push('/Contact')
            showDropdown();
          }}
        >
          Contact
        </a>

        <a
          href="#/"
          id="hide"
          className="btns"
          style={{ backgroundColor: "blue" }}
          onClick={(e) => {
            e.preventDefault();
            //history.push('/Login')
            showDropdown();
          }}
        >
          Login
        </a>
        <a
          href="#/"
          id="hide"
          className="btns"
          style={{ backgroundColor: "blue" }}
          onClick={(e) => {
            e.preventDefault();
            //history.push('/Login')
            showDropdown();
          }}
        >
          Register
        </a>
      </div>
    </div>
  );
}

export default Header;
