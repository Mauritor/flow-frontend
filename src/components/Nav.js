import { Fragment, useState } from "react";
import CardWeather from './Card_Weather';
import CardLocation from './Card_location';

const Nav = () => {
    const [datoCity, setDatoCity] = useState('');

    const handleInputChange = (event) => {
        //console.log(event.target.value)
        setDatoCity(event.target.value)
    }

    return (
        <Fragment>
            <nav className="navbar  navbar-dark bg-dark">
                <div className="navbar-collapse" >
                    <div className="row">
                        <div className="col col-sm-12 col-md-6 offset-md-3 ">
                            <form >
                                <div className="form-group">
                                    <label htmlFor="exampleSelect1">Patagonia select</label>
                                    <select className="form-control" onChange={handleInputChange} name="patagoniaCity">
                                        
                                        <option>Bariloche</option>
                                        <option>Calafate</option>
                                        <option>Esquel</option>
                                        <option>Trelew</option>
                                        <option>Ushuaia</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container-fluid">
                <div className="row">
                    <div className="col col-sm-6 col-md-4 offset-md-2 text-center mt-5">
                        <CardLocation city={datoCity} />
                    </div>
                    <div className="col col-sm-6 col-md-4  text-center mt-5">
                        <CardWeather city={datoCity} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Nav;