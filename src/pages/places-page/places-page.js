import { Place } from "../../components/place";
import placeOne from "../../images/place1.png";
import settingIcon from "../../images/setting-icon.svg";
import { DefaultLayout } from "../../layouts/default-layout";
import "./places-page.css";

function PlacesPage() {
  const places = Array(16).fill(placeOne);
  return (
    <DefaultLayout>
      <div className="places-page">
        <div className="container">
          <div className="d-grid" style={{ "--gap": "64px" }}>
            <div
              className="filter-buttons align-items-center d-flex"
              style={{ "--gap": "65px" }}
            >
              <div
                className="d-flex align-items-center"
                style={{ "--gap": "48px" }}
              >
                <button className="filter-button">Resturant</button>
                <button className="filter-button">Cottage</button>
                <button className="filter-button">Castle</button>
                <button className="filter-button">fantast city</button>
                <button className="filter-button">beach</button>
                <button className="filter-button">Carbins</button>
                <button className="filter-button">Off-grid</button>
                <button className="filter-button">Farm</button>
              </div>

              <button
                className="d-flex align-items-center settings-button"
                style={{ "--gap": "40px" }}
              >
                <span>Location</span>

                <img src={settingIcon} alt="" />
              </button>
            </div>

            <div
              className="d-flex flex-wrap justify-content-center"
              style={{ "--gap": "24px" }}
            >
              {places.map((place, i) => {
                return <Place image={place} key={i} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default PlacesPage;
