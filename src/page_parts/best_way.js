import React from "react";
import "../styles/best_way.scss";
import { RiAppleLine } from "react-icons/ri";
import { SlSocialGoogle } from "react-icons/sl";
import { RiExchangeDollarFill } from "react-icons/ri";

export default function Best_way() {
  return (
    <div className="best_way">
      <div className="best_ttl">
        <p className="ttl">Best way to buy <img src="https://cdn3d.iconscout.com/3d/premium/thumb/crypto-exchange-10276531-8306618.png?f=webp" /> </p>
        <p>trade <img src="https://cdn-icons-png.flaticon.com/512/11242/11242211.png" /> crypto</p>
      </div>
      <div className="best_way_body">
        <div className="img_part">
          <img src="https://img.freepik.com/premium-vector/3d-cartoon-smartphone-with-credit-card-money-online-payment-concept-mobile-wallet-application-banking-app-transfer-money-via-smartphone-vector-3d-illustration_221648-783.jpg"/>
        </div>
        <div className="another_part">
          <p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <p className="txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          <div className="download_btns">
            <div className="btns">
              <RiAppleLine/>
              <div className="txts">
                <p>App store down</p>
                <p>App Strore</p>
              </div>
            </div>
            <div className="btns">
              <SlSocialGoogle/>
              <div className="txts">
                <p>Google download</p>
                <p>Play market</p>
              </div>
            </div>
          </div>
          <div className="coins_cards">
            <div className="bitcoin">
              <div className="coin_head">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png" />
                <div className="kichik">
                  <p><RiExchangeDollarFill/>3/81</p>
                  <p>Ipk reset</p>
                </div>
              </div>
              <h3>Bitcoin BTC</h3>
              <p>513.2004.40 <span>+2.72%</span></p>
            </div>
            <div className="bitcoin">
              <div className="coin_head">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/01/Ethereum_logo_translucent.svg" />
                <div className="kichik">
                  <p><RiExchangeDollarFill/>3/81</p>
                  <p>Ipk reset</p>
                </div>
              </div>
              <h3>Bitcoin BTC</h3>
              <p>513.2004.40 <span>+2.72%</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
