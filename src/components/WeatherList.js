import React from 'react';
import WeatherListItem from './WeatherListItem';

//WeatherList Compoen
class WeatherList extends React.Component {
  render () {
    const {days, onDayClicked} = this.props;
    return <div className="weather-list flex-parent">
      {days.map((day, index) =>
        <WeatherListItem key={day.dt} day={day} onDayClicked={onDayClicked}
          index={index}/>
      )}
    </div>;
  }
}



export default WeatherList;
