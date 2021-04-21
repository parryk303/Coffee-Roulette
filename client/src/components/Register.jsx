import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submitForm() {
    this.props.registerUser(this.state);
  }

  render() {
    return (
      <Form id="registrationForm">
        <Form.Group controlId="name" onChange={this.handleChange}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="email" onChange={this.handleChange}>
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted" >
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="password" onChange={this.handleChange}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={this.submitForm}>
          Submit
        </Button>
      </Form>
    );
  }
}

export default Register;