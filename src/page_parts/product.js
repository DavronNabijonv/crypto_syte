import React from "react";
import "../styles/products.scss";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Product_slider from "../sliders/product_slider";
import { MdOutlineMonitor } from "react-icons/md";
import { GiCommercialAirplane } from "react-icons/gi";

export default function Product() {
  return (
    <div className="products">
      <div className="nav_products">
        <p>Our products</p>
        <div className="btn_slider">
          <span>
            <FaChevronLeft />
          </span>
          <span>
            <FaChevronRight />
          </span>
        </div>
      </div>
      {/* <Product_slider /> */}
      <div className="shablon">
        <div className="black_card">
          <button>
            <MdOutlineMonitor /> While
          </button>
          <h1>The Easiest and Most Powerful Crypto Wallet</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p>
            <span>
              <GiCommercialAirplane />
            </span>
            Meet
          </p>
        </div>
        <div className="cards">
          <div className="card_1">
            <p className="foiz">10<span>%</span></p>
            <p className="text">Earn with us in rawerds</p>
          </div>
          <div className="card_2">
            <p className="foiz">100<span>%</span></p>
            <p className="text">your crypto in onw place</p>
          </div>
        </div>
      </div>
    </div>
  );
}
