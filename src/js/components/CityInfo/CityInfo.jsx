//grab data from index and then render
import React from 'react';

export default class CityInfo extends React.Component {
  render() {
    const { weatherData } = this.props;
    console.log(weatherData)
    return (
      <div>
        <div className="card">
          <div className="card-header alert-primary">
            City Information
              </div>

          <div className="card-body">
            <h5 className="card-title text-center">
              {weatherData.name && <img
                src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                alt='weather-icon'
                className='weather-icon'
              />
              }
              {weatherData.name}
              <br />
              {weatherData.coord.lon} {weatherData.coord.lat}
            </h5>
            <hr />


            {/* TEMP PRESSURE HUMIDITY */}
            <div className='row'>

              <a className='col text-center'>Temperature(F)
                  <br />
                {weatherData.main.temp}</a>
              <a className='col text-center'>Pressure
                  <br />
                {weatherData.main.pressure}
              </a>
              <a className='col text-center'>Humidity
                  <br />
                {weatherData.main.humidity}</a>
            </div>

            {/* LOWEST TEMP HIGHEST TEMP WIND SPEED */}
            <div className='row'>
              <a className='col text-center'>Lowest Temp
                    <br />
                {weatherData.main.temp_min}
              </a>
              <a className='col text-center'>Highest Temp
                    <br />
                {weatherData.main.temp_max}
              </a>
              <a className='col text-center'>Wind Speed
                    <br />
                {weatherData.wind.speed}
              </a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}  