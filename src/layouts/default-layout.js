import logo from "../images/logo.svg";
import logoLight from "../images/logo-light.svg";
import instagram from "../images/icon-instagram.svg";
import twitter from "../images/icon-twitter.svg";
import facebook from "../images/icon-facebook.svg";
import "./default-layout.css";
import NiceModal from "@ebay/nice-modal-react";
import { ConnectWalletModal } from "../modals/connect-wallet";
import { Link, NavLink } from "react-router-dom";

export function DefaultLayout(props) {
  return (
    <div className="default-layout">
      <div className="top-bar">
        <div className="container">
          <div className="md-d-flex md-justify-content-space-between md-align-items-center">
            <Link to="/metabnb">
              <img src={logo} alt="" />
            </Link>

            <div
              className="top-nav d-none lg-d-flex"
              style={{ "--gap": "48px" }}
            >
              <NavLink to="/metabnb">Home</NavLink>
              <NavLink to="/metabnb/places">Place to stay</NavLink>
              <a href="#NFTs">NFTs</a>
              <a href="#Community">Community</a>
            </div>

            <button
              className="button d-none md-d-block"
              onClick={() => NiceModal.show(ConnectWalletModal)}
            >
              Connect wallet
            </button>
          </div>
        </div>
      </div>

      <div>{props.children}</div>

      <div className="footer">
        <div className="container">
          <div
            className="d-grid md-d-flex md-justify-content-space-between"
            style={{ "--gap": "50px" }}
          >
            <div className="d-grid" style={{ "--gap": "23px" }}>
              <img src={logoLight} alt="" />

              <div
                className="footer-social-links d-flex"
                style={{ "--gap": "41px" }}
              >
                <a href="#facebook">
                  <img src={facebook} alt="" />
                </a>
                <a href="#instagram">
                  <img src={instagram} alt="" />
                </a>
                <a href="#twitter">
                  <img src={twitter} alt="" />
                </a>
              </div>

              <p
                className="footer-copyright-message d-flex"
                style={{ "--gap": "10px" }}
              >
                <span>&copy;</span> <span>2022 Metabnb</span>
              </p>
            </div>

            <div className="d-grid" style={{ "--gap": "23px" }}>
              <p className="footer-links-header">Community</p>

              <ul className="d-grid" style={{ "--gap": "16px" }}>
                <li>
                  <a href="#nft">NFT</a>
                </li>
                <li>
                  <a href="#tokens">Tokens</a>
                </li>
                <li>
                  <a href="#landlords">Landlords</a>
                </li>
                <li>
                  <a href="#discord">Discord</a>
                </li>
              </ul>
            </div>

            <div className="d-grid" style={{ "--gap": "23px" }}>
              <p className="footer-links-header">Community</p>

              <ul className="d-grid" style={{ "--gap": "16px" }}>
                <li>
                  <a href="#nft">NFT</a>
                </li>
                <li>
                  <a href="#tokens">Tokens</a>
                </li>
                <li>
                  <a href="#landlords">Landlords</a>
                </li>
                <li>
                  <a href="#discord">Discord</a>
                </li>
              </ul>
            </div>

            <div className="d-grid" style={{ "--gap": "23px" }}>
              <p className="footer-links-header">Community</p>

              <ul className="d-grid" style={{ "--gap": "16px" }}>
                <li>
                  <a href="#nft">NFT</a>
                </li>
                <li>
                  <a href="#tokens">Tokens</a>
                </li>
                <li>
                  <a href="#landlords">Landlords</a>
                </li>
                <li>
                  <a href="#discord">Discord</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
