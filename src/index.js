import React, { Component } from "react";
import { render } from "react-dom";
import WeatherReport from "./WeatherReport";
import AddCity from "./AddCity";
import { queryWeather } from "./api";

class App extends Component {
  state = {
    reports: [],
    city: ""
  };

  intialList = ["Tokyo", "New York", "Bangalore", "Chennai"];

  componentDidMount() {
    Promise.all(this.intialList.map(this.getCityReport)).then(reports => {
      this.setState({ reports });
    });
  }

  getCityReport = async city => {
    const report = await queryWeather(city);
    return report;
  };

  addCity = city => {
    this.setState({ city: "" });
    this.getCityReport(city).then(report => {
      this.setState({ reports: this.state.reports.concat(report) });
    });
  };

  removeCity = index => {
    const filteredReports = this.state.reports.filter(
      (report, reportIndex) => reportIndex !== index
    );
    this.setState({ reports: filteredReports });
  };

  handleFieldChange = e => {
    const { value: city } = e.target;
    this.setState({ city });
  };

  render() {
    const { reports, city } = this.state;
    const { removeCity, addCity, handleFieldChange } = this;
    return (
      <div>
        <WeatherReport removeCity={removeCity} reports={reports} />
        <AddCity
          handleFieldChange={handleFieldChange}
          addCity={addCity}
          city={city}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
