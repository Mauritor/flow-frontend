import React, { Fragment, useState, useEffect } from 'react';
import CardWeather from './Card_Weather';
import publicIp from 'public-ip';

const CardLocation = (props) => {
    //OBTENGO IP CLIENTE
    //OBTENGO DATA LOCATION DESDE MY API-WEATHER
    const [ipclient, setIpclient] = useState('');
    const [location, setLocation] = useState([]);
    const [city, setCity] = useState('');

    const getDataLocation = async () => {
        const ip = await publicIp.v4();
        setIpclient(ip);

        const res = await fetch('https://api-test-weather.herokuapp.com/location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ip: ipclient })

        })
        const data = await res.json();
        setLocation([...location, data]);
        setCity(data.city);
    }


    useEffect(() => {
        getDataLocation();
    }, [ipclient]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <Fragment>
            <div className="card">
                {location.map((item, index) => (
                    <div className="card-body text-secondary" key={index}>
                        <h6>Location</h6>
                        <h5 className="text-info">{item.city}</h5>
                        <h6>{item.regionName}</h6>
                        <h6>{item.country}</h6>
                        <p>{item.query}</p>
                    </div>
                ))}

            </div>
            <CardWeather city={city} />
        </Fragment>

    )
}
export default CardLocation;