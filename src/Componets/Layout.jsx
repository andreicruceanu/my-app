import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout(props) {
  console.log(props);
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
