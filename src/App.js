import "bootstrap/dist/css/bootstrap.min.css";

import MyForm from "./MyForm";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { useState } from "react";
import { connect } from "react-redux";

import { setFirstName, setLastName, setEmail, setDate } from "./actions";

const mapStateToProps = (state) => {
  return {
    firstName: state.firstName,
    lastName: state.lastName,
    email: state.email,
    date: state.date,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleFirstNameChange: (event) =>
      dispatch(setFirstName(event.target.value)),
    handleLastNameChange: (event) => dispatch(setLastName(event.target.value)),
    handleEmailChange: (event) => dispatch(setEmail(event.target.value)),
    handleDateChange: (event) => dispatch(setDate(event.target.value)),
  };
};

function App(props) {
  const {
    firstName,
    lastName,
    email,
    date,
    handleFirstNameChange,
    handleLastNameChange,
    handleEmailChange,
    handleDateChange,
  } = props;

  const [validated, setValidated] = useState(false);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log("first name: ", firstName);
    console.log("last name: ", lastName);
    console.log("email: ", email);
    console.log("date: ", date);
    event.preventDefault();
    event.stopPropagation();
    fetch("http://localhost:3001/submit", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        date: date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        console.log(message);
        setSubmitted(true);
      })
      .catch((err) => {
        setMessage(err.message);
        setSubmitted(true);
        // console.log(message);
      });
  };
  return (
    <div className="App">
      <h1>Brainhub Event</h1>
      <section className="section">
        <MyForm
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
          handleEmailChange={handleEmailChange}
          handleDateChange={handleDateChange}
          firstName={firstName}
          lastName={lastName}
          email={email}
          date={date}
          handleSubmit={handleSubmit}
          validated={validated}
        />
      </section>
      {submitted && <h2>{message}</h2>}
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
