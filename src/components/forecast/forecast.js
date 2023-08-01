import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import './forecast.css';
const week_days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const Forecast = ({ data }) => {
    const dayInWeeek = new Date().getDay();
    const forecastDays = week_days.slice(dayInWeeek, week_days.length).concat(week_days.slice(0, dayInWeeek));


    return (
        <>
            <label className="title">Daily Weather Forecast</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className="daily_forecast">
                                    <img alt="weather-info" className="images" src={`icons/${item.weather[0].icon}.png`} />
                                    <label className="days">{forecastDays[idx]}</label>
                                    <label className="description">{item.weather[0].description}</label>
                                    <label className="min_temp-max_temp">{Math.round(item.main.temp_min)}°C / {Math.round(item.main.temp_max)}°C</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="details">
                                <div className="details_daily">
                                    <label>Pressure</label>
                                    <label>{item.main.pressure} hPA</label>
                                </div>
                                <div className="details_daily">
                                    <label>Clouds</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className="details_daily">
                                    <label>Humidity</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className="details_daily">
                                    <label>Wind</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className="details_daily">
                                    <label>Feels like</label>
                                    <label>{item.main.feels_like} °C</label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}



            </Accordion>
        </>
    );

}

export default Forecast;