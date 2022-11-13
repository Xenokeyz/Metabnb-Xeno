import "./Header.css";
import Metalogo from "../../assets/images/Metabnb.png";
import Wallet from "../../assets/images/Wallet.png";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Metalogo} alt="logo" className="Header-logo" />
      </div>
      <div className="header__center">
        <p>Home</p>
        <p>Place to stay</p>
        <p>NFT's</p>
        <p>Communtity</p>
      </div>
      <div className="header__right">
        <img src={Wallet} alt="connect" />
      </div>
    </div>
  );
}

export default Header;
