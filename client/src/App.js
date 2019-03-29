import React from "react";
import Nav from "./components/Nav/Nav"
import GoogleMap from "./components/GoogleMap/GoogleMap"

class App extends React.Component{
  render(){
    return(
      <div>
        <p>Hello!</p>
        <Nav/>
        <GoogleMap/>
      </div>
    )
  }
}

export default App;