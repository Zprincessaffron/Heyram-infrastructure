import React, { useContext } from "react";
import "../../styles/Navbar.css";
import MenuButton from "./MenuButton";
import heyramlogo1 from "../../images/heyramlogo1.png";
import heyramlogo from "../../images/heyramlogo.png";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { navColor, setNavColor } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className={`navbar_main ${navColor}`}>
      <div
        className={`navbar_div1 cursor-pointer ${navColor}`}
        onClick={() => navigate("/")}
      >
        HEYRAM INFRASTRUCTURE
      </div>
      <div className="navbar_div2 cursor-pointer">
        <img
          src={navColor ? heyramlogo : heyramlogo1}
          alt=""
          onClick={() => navigate("/")}
        />
      </div>
      <div className="navbar_div3"></div>
    </div>
  );
}

export default Navbar;
