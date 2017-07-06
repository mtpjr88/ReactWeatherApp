import React from 'react';
import {get} from 'axios';
import ZipForm from './ZipForm';
import WeatherList from './WeatherList';
import CurrentDay from './CurrentDay';

// App component
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: '',
      city: {},
      dates: [],
      selectedDate: null
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onDayClicked = this.onDayClicked.bind(this);
  }

  onFormSubmit(zipcode) {
    get(`http://api.openweathermap.org/data/2.5/forecast/daily?zip=${zipcode},us&appid=c029c3c7808f71b70f2ff8af634b7e7a`)
    .then(({data}) => {
      const {city, list: dates } = data;
      this.setState({ zipcode, city, dates, selectedDate: null });
    });

  }

  onDayClicked(dayIndex) {
    this.setState({ selectedDate: dayIndex});
  }

  getCurrentDayComponent(){
    const {dates, city, selectedDate} = this.state;
    if (selectedDate === null) {
      return null;
    }
    return <CurrentDay city={this.state.city} day={this.state.dates[this.state.selectedDate]}/>;
  }

  render() {
    return <div className="app">
      <ZipForm onSubmit={this.onFormSubmit}/>
      <WeatherList days={this.state.dates} onDayClicked={this.onDayClicked} />

      {this.getCurrentDayComponent()}
    </div>
      }
}

export default App;
