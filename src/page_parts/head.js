import React from "react";
import "../styles/head.scss";
import f1 from "../images/dapp.png";
import { GiCommercialAirplane } from "react-icons/gi";
import f2 from "../images/coin2.png"

export default function Head() {
  return (
    <div className="head">
      <div className="head_title">
        <h1>
          The best lightning
          <span>
            crypto <img src={f1} className="h1_img" />
            trading
          </span>
        </h1>
        <div className="head_grp">
          <p className="head_p">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="head_btn">
            <button className="btn_black">Get something</button>
            <button className="btn_jc">Jc</button>
            <p className="coplex">Coplexx</p>
          </div>
        </div>
      </div>
      <div className="head_img">
        <div className="bir"></div>
        <div className="ikki"></div>
        <div className="uch">
          <div className="grp1">
            <p className="grp1_ttl">The Most Trusted <span>Crypto Platform</span></p>
            <p className="grp1_p">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button><span><GiCommercialAirplane/></span>Get Reality Now</button>
          </div>
          <div className="grp2">
            <img src={f2} />
          </div>
        </div>
      </div>
    </div>
  );
}
