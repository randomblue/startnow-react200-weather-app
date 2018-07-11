import axios from 'axios';

export function searchCity(cityName) {
    return {
      type: 'UPDATE_SEARCH_CITY',
      payload: cityName
    };
  }

export function openWeatherMap(cityName){
  return{
    type: 'OPEN_WEATHER_MAP',
    payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=266aea8eccb3c60f90fd32bab8b45c22&units=imperial`)
  }
  

  
}

  //react redux weather api axios function