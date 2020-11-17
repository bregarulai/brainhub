import "bootstrap/dist/css/bootstrap.min.css";

import MyForm from "./MyForm";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [validated, setValidated] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

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
    </div>
  );
}

export default App;
