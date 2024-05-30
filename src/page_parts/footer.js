import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="foot_grp1">
        <p className="logo">Crypto</p>
        <div className="same_nav_ancor">
          <p className="f_ancor">Porter</p>
          <p className="f_ancor">Porter</p>
          <p className="f_ancor">Porter</p>
        </div>
        <div className="foot_doc">
          <p className="lorem">
            Lorem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
          <p>@2024 Build by Crypto</p>
        </div>
      </div>
      <div className="foot_grp2">
        <div className="grp">
          <h3>Power</h3>
          <p>Wiev</p>
          <p>RolsRoys</p>
          <p>Equalizer</p>
          <p>Hard Skills</p>
        </div>
        <div className="grp">
          <h3>Power</h3>
          <p>Wiev</p>
          <p>RolsRoys</p>
          <p>Equalizer</p>
          <p>Hard Skills</p>
        </div>
        <div className="grp">
          <h3>Power</h3>
          <p>Wiev</p>
          <p>RolsRoys</p>
          <p>Equalizer</p>
          <p>Hard Skills</p>
        </div>
      </div>
    </div>
  );
}
