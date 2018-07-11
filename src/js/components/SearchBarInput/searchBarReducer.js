import moment from 'moment';

const defaultState = {
  cityName: '',
  searchHistory: [],
  weatherData: {
    main: {
      temp: null,
      humidity: null,
      pressure: null,
      temp_max: null,
      temp_min: null
    },
    wind: {
      speed: null
    },
    coord: {
      lon: null,
      lat: null
    }
  }
};

export default function searchCity(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_CITY': {
      return {
        ...state,
        cityName: payload
      };
    }

    case 'OPEN_WEATHER_MAP_FULFILLED': {
      return {
        ...state,
        weatherData: payload.data,
        searchHistory: [...state.searchHistory, {name: payload.data.name, time: moment().format('MMMM Do YYYY, h:mm:ss a' )}]
      }
    }


  default: {return state;}
  }
} 