import React from 'react';

// ZipForm component
class ZipForm extends React.Component{
  constructor(props) {
    super(props);

      this.state= {
        zipcode: ''
      };

      this.inputUpdated = this.inputUpdated.bind(this);
      this.submitZipCode = this.submitZipCode.bind(this);

  }

  submitZipCode(e) {
    e.preventDefault();

    const {zipcode} = this.state;
    const {onSubmit} = this.props;

    onSubmit(zipcode);
    this.setState({zipcode: ''});
  }

  inputUpdated(e) {
    const {value} = e.target;

    this.setState({zipcode: value});
  }
  render() {
    return (
      <div className="zip-form">
        <form onSubmit={this.submitZipCode}>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            className="form-control"
            type="input"
            name="zipcode"
            value={this.state.zipcode}
            onInput={this.inputUpdated} />
          <button type="submit" className="btn btn-success">Get the Forecast!</button>
        </form>
      </div>
    );

  }
}

export default ZipForm;
