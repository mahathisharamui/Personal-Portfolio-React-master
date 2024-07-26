import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="tagline">"Innovating one project at a time"</span>
        <div className="footer-decoration">
          <span className="quote">"The best way to predict the future is to invent it." – Alan Kay</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
