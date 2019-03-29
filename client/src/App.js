import React from "react";
import Nav from "./components/Nav/Nav";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Form from "./components/Form/Form";
import "./App.css";

class App extends React.Component {

  
  state = {
    city: "",
    cityLat: 0,
    cityLng: 0
  };

  /**
 * function to handle the input change
 * @param {*} event
 */
  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  searchCity = event => {
    if (this.state.city !== "") {
      let geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: this.state.city }, function(results, status) {
        if (status === "OK") {
          this.setState({
            cityLat: parseFloat(results[0].geometry.location.lat()),
            cityLng: parseFloat(results[0].geometry.location.lng())
          });
          console.log(this.state.cityLat)
          this.initMapAfterMount();
        }
      }.bind(this));
    }

  };

  initMapAfterMount = () => {
    // Create A Map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: this.state.cityLat, lng: this.state.cityLng },
      zoom: 8
    });
    this.addMarker(map);
    
  };

  addMarker = (map) => {
    let myLatLng = { lat: this.state.cityLat, lng: this.state.cityLng };
    let marker = new window.google.maps.Marker({
      position: myLatLng,
      map: map,
      title: "Hello World!"
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchCity();
  };

  render() {

  
    return (
      <div>
        <div className="container-fluid navContainer">
          <Nav />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-4">
              <Form
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                city={this.state.city}
              />
            </div>
            <div className="col-8" id="mapContainer">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
