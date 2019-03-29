import React from "react";
import Nav from "./components/Nav/Nav";
import GoogleMap from "./components/GoogleMap/GoogleMap";
import Form from "./components/Form/Form";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid navContainer">
          <Nav />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Form />
            </div>
            <div className="col-6" id="mapContainer">
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
