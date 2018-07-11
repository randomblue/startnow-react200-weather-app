//store passes through
import { connect } from 'react-redux';
import CityInfo from './CityInfo';

function mapStoreToProps(store) {
    return {
      cityName: store.search.cityName,
      searchHistory: store.search.searchHistory,
      weatherData: store.search.weatherData
    };
  }

export default connect(mapStoreToProps)(CityInfo)