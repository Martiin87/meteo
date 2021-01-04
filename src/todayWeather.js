import React, { Component } from 'react'
import './todayWeather.css';

export default class todayWeather extends Component {
    render() {
        return (
            <div className="container">              
                <div className="box-today">
                    <img src="http://openweathermap.org/img/wn/04d@2x.png" alt=""/>
                    <h1>Ville</h1>
                    <h2>Température</h2>
                    <h2>Condition météo</h2>
            </div>
            </div>
        )
    }
}
