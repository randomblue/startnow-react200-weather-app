import React from 'react';
import SearchBarInput from './components/SearchBarInput';
import CityInfo from './components/CityInfo';
import SearchHistory from './components/SearchHistory';


export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        {/* title */}
        <div className='jumbotron'>
          <h1>Origin Weather Application</h1>
          <h5>Always know if you'll need an umbrella!</h5>
        </div>

        <div>
          <SearchBarInput />
        </div>

        {/* City Info and Search History */}
        <div className="row">
          <div className="col-sm-6">
          <CityInfo />
          </div>
          
          <div className='col-sm-6'>
          <SearchHistory />
          </div>

        </div>
      </div>
    );
  }
}
