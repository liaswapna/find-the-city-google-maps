import React from "react";
import "./style.css";

/**
 * Class GoogleMap
 */
class GoogleMap extends React.Component {
  /**
   * lifecycle method
   */
  componentDidMount() {
    this.renderMap();
  }

  /**
   * function call to the google api
   */
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBehgR7ZKenbrqFb9gmQ0yo827rjdEsyFA&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  /**
   * function to intialize map
   */
  initMap = () => {
    // Create A Map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
  };

  render() {
    return <div id="map" />;
  }
}

/**
 * function to load the scripts
 */
function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default GoogleMap;
