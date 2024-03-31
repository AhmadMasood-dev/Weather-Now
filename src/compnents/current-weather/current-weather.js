import "./current-weather.css";

const currentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Lahore</p>
          <p className="wather-description">sunny</p>
        </div>
        <img src="icons/01d.png" className="weather-icon" alt="" />
      </div>
    </div>
  );
};
export default currentWeather;
