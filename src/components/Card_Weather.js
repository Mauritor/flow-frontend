import React, { Fragment, useState, useEffect} from 'react';
import moment from 'moment';
import '../../node_modules/moment/min/locales';
import CardForecast from './Card_Forecast';

const CardWeather = (props) => {
    moment.locale('es');
    const [weather, setWeather] = useState([]);
    
    const getWeather = async () => {
        weather.splice(0, weather.length);
        const strcity = await props.city.toLowerCase();
        //const city = await strcity.replace(' ', '%20');
        const url = `https://api-test-weather.herokuapp.com/current/${strcity}`;
        try {
            const res = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
            const data = await res.json()
            setWeather([...weather, data]);
        } catch (error) {
            console.log('OUCH! Error: ', error);
        }
    }

    useEffect(() => {
        getWeather();
    }, [props.city]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Fragment>
            <div className="card border-0">
                {weather.map(item => (
                    <div className="card-body text-secondary" key={item.id}>
                        <h6>Weather</h6>
                        <h5 className="text-info">{props.city} </h5>
                        <h5 className="text-info">{moment(Date.now()).format('ddd DD MMM YYYY')}</h5>
                        <h6 className="text-warning">{item.weather[0].description}</h6>
                        <h6>Temp: {item.main.temp.toFixed(1)} °C</h6>
                        <h6>Humedad: {item.main.humidity} %</h6>
                        <h6>Viento: {item.wind.speed} km/h </h6>
                    </div>
                ))}
            </div>
            <CardForecast city={props.city} />
        </Fragment>
    )
}
export default CardWeather;