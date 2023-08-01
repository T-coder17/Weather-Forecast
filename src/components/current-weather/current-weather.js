import "./current-weather.css"

const CurrentWeather = ({data}) => {
    return (
        <div className="weatherDiscription">
            <div className="top">
                <div>
                    <p className="cityName">{data.city}</p>
                    <p className="weather_info">{data.weather[0].description}</p>
                </div>
                <img alt="weatherDiscription" className="weather-icon" src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className="bottom">
                <p className="temp">{Math.round(data.main.temp)}°C</p>
                <div className="Details">
                    <div className="parameter-row">
                        <span className="parameter-label">Details</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parmeter-label">Feels like</span>
                        <span className="parameter-value">{Math.round(data.main.temp)}°C</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parmeter-label">Wind</span>
                        <span className="parameter-value">{data.wind.speed} m/s</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parmeter-label">Humidity</span>
                        <span className="parameter-value">{data.main.humidity}%</span>
                    </div>
                    <div className="parameter-row">
                        <span className="parmeter-label">Pressure</span>
                        <span className="parameter-value">{data.main.pressure} hPA</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;
