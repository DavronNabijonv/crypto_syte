import React, { useEffect, useState } from "react";
import { MdOutlineSegment } from "react-icons/md";
import "../styles/navbar.scss";

export default function Navbar() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {innerWidth>750?<Desktop_navbar/>:<Mobile_nav/>}
    </div>
  );
}

function Desktop_navbar() {
  return (
    <div className="global_nav">
      <div className="desk_grp">
        <div className="ancors">
          <p className="logo">Crypto</p>
          <p className="ancor">View</p>
          <p className="ancor">Products</p>
          <p className="ancor">Download app</p>
          <p className="ancor">Trade part</p>
        </div>
        <div className="sign_btn">
          <button className="log">Log in</button>
          <button className="sign">Sign up</button>
        </div>
      </div>
    </div>
  );
}

function Mobile_nav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="global_nav">
      <div className="mobile_grp">
        <p className="logo">Crypto</p>
        <div className="sign_btn">
          <button className="log">Log in</button>
          <button className="sign">Sign up</button>
          <span
            className="togle"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <MdOutlineSegment />
          </span>
        </div>
      </div>
      <div className={open?"for_togle":"none"}>
        <div className="ancors">
          <p className="ancor" onClick={()=>{setOpen(false)}}>View</p>
          <p className="ancor" onClick={()=>{setOpen(false)}}>Products</p>
          <p className="ancor" onClick={()=>{setOpen(false)}}>Download app</p>
          <p className="ancor" onClick={()=>{setOpen(false)}}>Trade part</p>
        </div>
      </div>
      <div className={open?"overlay" :""} onClick={()=>{setOpen(!open)}}></div>
    </div>
  );
}
