import React from "react";
import "./style.css";
class Form extends React.Component {
    
  render() {
      
    
      return (
      <div className="form-div">
        <div className="form-group">
          <label htmlFor="Search City">
            <strong>Enter City</strong>
          </label>
          <input
            className="form-control autocomplete"
            id="searchCity"
            type="text"
            value={this.props.city}
            placeholder="Enter Search term here"
            name="city"
            
            onChange={this.props.handleInputChange}
            required
          />
        </div>
        <div className="pull-right">
          <button
            onClick={this.props.handleFormSubmit}
            type="submit"
            className="btn btn-lg btn-warning float-right"
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Form;
