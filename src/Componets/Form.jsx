import React, { useState } from "react";
import "./form.css";

const Form = (props) => {
  const [inputValue, setValue] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    console.log(props);
    props.functiDeclarataInParinte(inputValue);
  };

  const handleEmail = (e) => {
    setValue((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
      };
    });
  };

  const handlePassword = (e) => {
    setValue((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
      };
    });
  };

  return (
    <form className="containerForm" onSubmit={handleForm}>
      <div className="emailContainer">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" onChange={handleEmail} />
      </div>
      <div className="passwordContainer">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePassword}
        />
      </div>
      <button type="submit" id="btn-Login">
        Log In
      </button>
    </form>
  );
};

export default Form;
