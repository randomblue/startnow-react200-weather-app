import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
  return {
    cityName: store.search.cityName,
    searchHistory: store.search.searchHistory,
    weatherData: store.search.weatherData
  }
}

export default connect(mapStoreToProps)(SearchHistory);
