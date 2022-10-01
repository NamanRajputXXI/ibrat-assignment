import React from "react";
import { MdLiveTv } from "react-icons/md";
import { MdOutlineCardMembership } from "react-icons/md";
import { GrRun } from "react-icons/gr";
import { CgMoreR } from "react-icons/cg";
import { BsFillPersonFill } from "react-icons/bs";
import "../App.css";
const Nav = () => {
  return (
    <div className="header">
      <div className="black__container" />
      <div className="nav">
        <div className="nav__items">
          <div className="logo__hf">HF</div>
          <div className="icons">
            <div className="nav__elements">
              <MdLiveTv
                style={{
                  fontSize: "20px",
                }}
              />
              <p>LIVE</p>
            </div>
            <div className="nav__elements">
              <MdOutlineCardMembership
                style={{
                  fontSize: "20px",
                }}
              />
              <p>MEMBERSHIP</p>
            </div>
            <div className="nav__elements">
              <GrRun
                style={{
                  fontSize: "20px",
                }}
              />
              <p>PLANS</p>
            </div>
            <div className="nav__elements">
              <CgMoreR
                style={{
                  fontSize: "20px",
                }}
              />
              <p>MORE</p>
            </div>
          </div>
          <div className="login">
            <BsFillPersonFill
              style={{
                fontSize: "20px",
              }}
            />
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
