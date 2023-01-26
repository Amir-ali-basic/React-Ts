import React from "react";
import LandingImage from "../../assets/img/IphoneMockup.png";
import MailIcon from "../../assets/icons/mail.png";

function Landing() {
  return (
    <>
      <div className="container-fluid gradinet-bg">
        <div className="container landing">
          <div className="d-flex flex-row h-100 align-center">
            <div className="landing-left">
              <h1>Tracking Web3 Matters</h1>
              <div className="landing-input">
                <div className="input d-flex align-center">
                  <img src={MailIcon} alt="Icon" className="ms-3" />
                  <input type="text" placeholder="Apply for beta testing" />
                  <button className="button-apply me-3">Apply</button>
                </div>
                <div className="input-text mt-5">
                  <p>
                    Welcome to the best web3 tracker on the internet, we help
                    our user track wallets, DAOs, DEFI, NFTs & much more
                  </p>
                </div>
              </div>
            </div>
            <div className="landing-right">
              <img src={LandingImage} alt="LandingImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
