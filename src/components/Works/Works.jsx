import React, { useContext } from "react";
import "./Works.css";

import Reliance from "../../img/reliance.png";
import WorldBank from "../../img/wb.png";
import Jackson from "../../img/Jackson.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <span>
            I have had the pleasure of collaborating with numerous esteemed brands and clients across various industries.
            <br />
            My experience spans from innovative startups to well-established corporations, allowing me to deliver tailored solutions that drive success.
            <br />
            Over the years, I have developed and executed projects that leverage cutting-edge technologies and creative strategies.
            <br />
            My approach ensures that each client receives a unique and effective solution, crafted to meet their specific needs and objectives.
          </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainTriangle"
        >
          <div className="w-secTriangle" id="node1">
            <img src={Reliance} alt="Reliance" />
          </div>
          <div className="w-secTriangle" id="node2">
            <img src={WorldBank} alt="WorldBank" />
          </div>
          <div className="w-secTriangle" id="node3">
            <img src={Jackson} alt="Jackson" />
          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Works;
