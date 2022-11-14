import { Airbnb } from "../../components/place";
import heroImageOne from "../../images/hero-image1.png";
import heroImageTwo from "../../images/hero-image2.png";
import heroImageThree from "../../images/hero-image3.png";
import heroImageFour from "../../images/hero-image4.png";
import nftOne from "../../images/nft1.png";
import nftTwo from "../../images/nft2.png";
import nftThree from "../../images/nft3.png";
import partnerOne from "../../images/partner1.svg";
import partnerTwo from "../../images/partner2.svg";
import partnerThree from "../../images/partner3.svg";
import AirbnbOne from "../../images/place1.png";
import AirbnbTwo from "../../images/place2.png";
import AirbnbThree from "../../images/place3.png";
import AirbnbFour from "../../images/place4.png";
import AirbnbFive from "../../images/place5.png";
import AirbnbSix from "../../images/place6.png";
import AirbnbSeven from "../../images/place7.png";
import AirbnbEight from "../../images/place8.png";

import { DefaultLayout } from "../../layouts/default-layout";
import "./AirbnbPage.css";

function HomePage() {
  const airbnb = [
    AirbnbOne,
    AirbnbTwo,
    AirbnbThree,
    AirbnbFour,
    AirbnbFive,
    AirbnbSix,
    AirbnbSeven,
    AirbnbEight,
  ];

  return (
    <DefaultLayout>
      <div className="home-page">
        <div className="hero">
          <div className="container">
            <div className="d-flex justify-content-space-between align-items-center">
              <div className="d-grid hero-text" style={{ "--gap": "48px" }}>
                <h2 className="hero-title">
                  Rent a <span>Place</span> away from <span>Home</span> in the{" "}
                  <span>Metaverse</span>
                </h2>

                <p className="hero-subtitle">
                  we provide you access to luxury and affordable houses in the
                  metaverse, get a chance to turn your imagination to reality at
                  your comfort zone
                </p>

                <form action="#hero-form" className="hero-form">
                  <input type="text" placeholder="Search for location" />
                  <button type="submit" className="button">
                    Search
                  </button>
                </form>
              </div>

              <div
                className="d-none lg-d-flex align-items-flex-start"
                style={{ "--gap": "8px" }}
              >
                <div
                  className="d-grid"
                  style={{
                    "--gap": "8px",
                    marginTop: "100px",
                  }}
                >
                  <img src={heroImageOne} alt="" />
                  <img src={heroImageThree} alt="" />
                </div>
                <div className="d-grid" style={{ "--gap": "8px" }}>
                  <img src={heroImageTwo} alt="" />
                  <img src={heroImageFour} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="partners">
          <div className="container">
            <div className="d-flex justify-content-space-between flex-wrap">
              <img src={partnerOne} alt="" />
              <img src={partnerTwo} alt="" />
              <img src={partnerThree} alt="" />
            </div>
          </div>
        </div>

        <div className="inspiration">
          <div className="container">
            <div className="d-grid" style={{ "--gap": "43px" }}>
              <h3>Inspiration for your next adventure</h3>

              <div
                className="d-flex flex-wrap justify-content-center"
                style={{ "--gap": "24px" }}
              >
                {airbnb.map((_Airbnb, i) => {
                  return <Airbnb image={_Airbnb} key={i} />;
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="metabnb">
          <div className="container">
            <div className="d-flex justify-content-space-between align-items-center">
              <div className="d-grid text" style={{ "--gap": "57.5px" }}>
                <div className="d-grid" style={{ "--gap": "35px" }}>
                  <h3>Metabnb NFTs</h3>

                  <p>
                    Discover our NFT gift cards collection. Loyal customers gets
                    amazing gift cards which are traded as NFTs. These NFTs
                    gives our cutomer access to loads of our exclusive services.
                  </p>
                </div>

                <div>
                  <button className="button button--light">Learn more</button>
                </div>
              </div>

              <div className="d-none xl-d-block images">
                <img src={nftOne} alt="" />
                <img src={nftTwo} alt="" />
                <img src={nftThree} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default HomePage;
