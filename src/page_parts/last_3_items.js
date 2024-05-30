import React from "react";
import "../styles/last_3_items.scss";
import { RiFileListLine } from "react-icons/ri";
import { MdOutlineMonitor } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";
import { CiBitcoin } from "react-icons/ci";
import { FaRegMoneyBill1 } from "react-icons/fa6";

export default function Last_3_items() {
  return (
    <div className="last_items">
      <First_item />
      <Second_item />
      <Third_item />
    </div>
  );
}

function First_item() {
  return (
    <div className="last_one">
      <div className="grp1">
        <p className="back_green">
          <RiFileListLine /> IrwTiltwood
        </p>
        <h3>Borrowing, Trading And Custodial Operations To Individual Needs</h3>
        <p className="txt">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          scrambled it to make a type specimen book.
        </p>
        <p className="airplane">
          <span>
            <GiCommercialAirplane />
          </span>
          Contrary to popular belief
        </p>
      </div>
      <img
        src="https://media.istockphoto.com/id/1366654349/vector/digital-wallet-application-on-mobile-banner-vector-phone-and-internet-banking-online-payment.jpg?s=612x612&w=0&k=20&c=gmyrvHRnmW1OYnoEPk1BZfS_Akj0Q9JG2qp1TnLQLBY="
        className="rasm_grp2"
      />
    </div>
  );
}

function Second_item() {
  return (
    <div className="shablon_items">
      <div className="cards">
        <div className="card_2">
          <p className="foiz">
            100<span>%</span>
          </p>
          <p className="text">Original materials</p>
        </div>
        <div className="card_1">
          <p className="foiz">
            10<span>%</span>
          </p>
          <p className="text">Discount for our clients</p>
        </div>
      </div>
      <div className="black_card">
        <button>
          <MdOutlineMonitor /> While
        </button>
        <h1>Blockchain Data Is In Our DNA</h1>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
        <p>
          <span>
            <GiCommercialAirplane />
          </span>
          Access Labrirary
        </p>
      </div>
    </div>
  );
}

function Third_item() {
  return (
    <div className="third">
      <h1>
        From Zero <FaRegMoneyBill1 /> to
      </h1>
      <h1>
        Crypto <CiBitcoin /> in Minutes
      </h1>
      <div className="foot">
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <button>Get started</button>
      </div>
    </div>
  );
}
