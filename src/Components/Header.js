import React from "react";
import "./css/header.css";
import header from "./assets/header.jpg";
const showDropdown = () => {
  var x = document.getElementById("myTopnav");
  x.classList.toggle("topnavFull");
};
function Header() {
  const imageUrl =
    "http://demos.telerik.com/kendo-ui/content/shared/icons/16/star.png";
  return (
    <div>
      <img
        src={header}
        width="100%"
        height="300px"
        onClick={(e) => {
          e.preventDefault();
          //history.push('/Home')
        }}
      />
    </div>
  );
}

export default Header;
