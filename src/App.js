import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Page404 from "./Pages/Page404";
import Category from "./Pages/Category";

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
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    );
  }
}

export default App;
