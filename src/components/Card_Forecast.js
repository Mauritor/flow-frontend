import React, { Fragment, useState, useEffect } from 'react';
import moment from 'moment';
import '../../node_modules/moment/min/locales';

const CardForecast = (props) => {
    const init = [];
    const [forecast, setForecast] = useState(init);

    const getForecast = async () => {
        forecast.splice(0, forecast.length);
        moment.locale('es');
        const city = await props.city.toLowerCase();
        const url = `https://api-test-weather.herokuapp.com/forecast/${city}`;
        try {
            const res = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
            })
            const data = await res.json();
            const list = await data.list;
            setForecast([...forecast, list]);
        } catch (error) {
            console.log('OUCH! Error: ', error);
        }
    }
    useEffect(() => {
        getForecast();
    }, [props.city]) // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Fragment>
            {forecast.map((item) => (
                item.map((dia, index) => (
                    <div className="card bg-primary mt-4" key={index}>
                        <div className="card-body text-light" >
                            <h6>Forecast</h6>
                            <h5 className="text-info">{props.city} </h5>
                            <h5 className="text-info">{dia.dt_txt}</h5>
                            <h6 className="text-warning">{dia.weather[0].description}</h6>
                            <h6>Temp: {dia.main.temp.toFixed(1)} °C</h6>
                            <h6>Humedad: {dia.main.humidity} %</h6>
                            <h6>Viento: {dia.wind.speed} km/h </h6>
                        </div>
                    </div>
                ))
            ))}
        </Fragment>
    )
}

export default CardForecast;