import React from "react";
import "./App.css";
import Form from "./Componets/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Acesta este un mesaj",
      obiectul: {},
    };
  }

  functia(respons) {
    console.log(respons);
  }

  render() {
    return (
      <Form
        message={this.state.message}
        functiDeclarataInParinte={(e) => this.functia(e)}
      ></Form>
    );
  }
}

export default App;
