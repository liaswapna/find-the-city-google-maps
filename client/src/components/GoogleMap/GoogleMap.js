import React from "react";
import "./style.css";
class GoogleMap extends React.Component {

    componentDidMount(){
        this.renderMap()
    }
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBehgR7ZKenbrqFb9gmQ0yo827rjdEsyFA&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  initMap = () => {
    // Create A Map
    let map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });
    
    
  };

  render() {
    return (
      <div id="map"></div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default GoogleMap;
