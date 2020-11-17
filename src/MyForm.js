import React, { useState } from "react";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

const MyForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Form
      className="form-wrapper"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group
        className="my-form-control"
        as={Col}
        md="12"
        controlId="firstName"
      >
        <Form.Label>First name</Form.Label>
        <Form.Control required type="text" placeholder="First name" />
        <Form.Control.Feedback type="invalid">
          Please provide a First Name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="my-form-control"
        as={Col}
        md="12"
        controlId="lastName"
      >
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" placeholder="Last name" />
        <Form.Control.Feedback type="invalid">
          Please provide a valid Last Name.
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group
        className="my-form-control"
        as={Col}
        md="12"
        controlId="email"
      >
        <Form.Label>Email</Form.Label>
        <InputGroup>
          <Form.Control type="text" placeholder="Email" required />
          <Form.Control.Feedback type="invalid">
            Please choose an Email.
          </Form.Control.Feedback>
        </InputGroup>
      </Form.Group>

      <Form.Group
        className="my-form-control"
        as={Col}
        md="12"
        controlId="validationCustom03"
      >
        <Form.Label>Date</Form.Label>
        <Form.Control type="date" placeholder="City" required />
        <Form.Control.Feedback type="invalid">
          Please provide a valid Date.
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit">Submit form</Button>
    </Form>
  );
};

export default MyForm;
