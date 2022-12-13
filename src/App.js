import React from "react";
import "./App.css";
import Form from "./Componets/Form";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Page404 from "./Pages/Page404";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

export default App;
