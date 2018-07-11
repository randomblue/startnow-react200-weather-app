import React from 'react';

const moment = require('moment');

export default class SearchHistory extends React.Component {
  render() {
    const { searchHistory } = this.props;
    console.log(searchHistory);
    return (
        <div className='card'>

          <div className='card-header alert-primary'>
            <a>Search History</a>
          </div>

          <div className='card-body'>
            <table className='table table-striped border-0'>

              <thead>
                <tr>
                  <th >City</th>
                  <th >Date</th>
                </tr>
              </thead>
              
              <tbody >
                {searchHistory.map((item, i) => {
                  return (

                    <tr key={i}>
                        <td>
                            {item.name}
                        </td>
                        <td>
                            {item.time}
                        </td>
                    </tr>
                  )
                }
                )}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
}
