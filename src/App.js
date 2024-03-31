import "./App.css";
import Search from "./compnents/search/search";
import CurrentWeather from "./compnents/current-weather/current-weather";
function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather /> 
    </div>
  );
}

export default App;
