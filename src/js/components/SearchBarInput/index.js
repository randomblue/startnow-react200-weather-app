import { connect } from 'react-redux';
import SearchBarInput from './SearchBarInput';

function mapStoreToProps(store) {
    return {
      cityName: store.search.cityName,
      searchHistory: store.search.searchHistory,
      weatherData: store.search.weatherData,
      
    };
  }

export default connect(mapStoreToProps)(SearchBarInput)