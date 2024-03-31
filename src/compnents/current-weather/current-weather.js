import "./current-weather.css";

const currentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="wather-description">{data.weather[0].description}</p>
        </div>
        <img src="icons/01d.png" className="weather-icon" alt="" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>{" "}
          <div className="parameter-row">
            <span className="parameter-label">humidity</span>
            <span className="parameter-value">15%</span>
          </div>{" "}
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">22 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default currentWeather;
