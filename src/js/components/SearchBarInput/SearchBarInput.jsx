import React from 'react';
import{
    searchCity, openWeatherMap
} from './searchBarActions'

export default class SearchBarInput extends React.Component {
    constructor(props) {
        super(props);
    
        // Here we're binding these methods to the context
        // of the components. This only has to be done,
        // because these methods are called back by
        // event emitters (which lose context).
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
        this.handleButtonPreSet = this.handleButtonPreSet.bind(this)
      }

      handleInputChange(event){
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(searchCity(value));
      }

      handleButtonPreSet(cityName){
        const { dispatch } = this.props;
        dispatch(openWeatherMap(cityName))
      }

      handleOnClick(event){
          const { cityName, weatherData, dispatch } = this.props;
          dispatch(openWeatherMap(cityName, weatherData))
      }

    render() {
        const {cityName} = this.props;
        return (
            <div>
                {/* buttons */}
                <div className='btn-group'>
                    <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleButtonPreSet('San Diego')}>San Diego</button>
                    <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleButtonPreSet('New York')}>New York</button>
                    <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleButtonPreSet('Washington')}>Washington D.C.</button>
                    <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleButtonPreSet('London')}>London</button>
                    <button className="btn btn-primary btn-sm" type="button" onClick={() => this.handleButtonPreSet('Tokyo')}>Tokyo</button>
                </div>

                {/* search */}
                <div className="input-group mb-3">
                    <input type="text submit" value={cityName} onChange={this.handleInputChange} onSubmit={this.handleOnClick} className="form-control" placeholder="Search Cities" aria-label="Search Cities" aria-describedby="basic-addon2">
                    </input>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button submit" onClick={this.handleOnClick}>GO</button>
                    </div>
                </div>
            </div>
        )
    }
}