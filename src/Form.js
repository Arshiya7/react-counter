import React, { Component } from "react";
import axios from "axios";
import "./Form.css";
import {
  Container,
  Col,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { AvForm, AvField } from "availity-reactstrap-validation";
import "bootstrap/dist/css/bootstrap.min.css";

class Forms extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      items: [],

      email: "",
      dob: "",
      gender: "select",
      phoneNumber: "",
      city: "select",
      formErrors: {},
    };
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    let items = [...this.state.items];

    items.push({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      dob: this.state.dob,
      gender: this.state.gender,
      phone: this.state.phone,
    });

    this.setState({
      items,
      username: "",
      password: "",
      email: "",
      dob: "",
      gender: "",
      phone: "",
    });
  };

  handleInputChange = (e) => {
    let input = e.target;
    let name = e.target.name;
    let value = input.value;

    this.setState({
      [name]: value,
    });
  };

  rowDelete() {
    var index = this.state.items;
    this.state.items.splice(index, 1);
    this.setState(this.state.items);
    alert("You deleted the row: ");
  }

  render() {
    return (
      <div className="App">
        <Form
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          newUsername={this.state.username}
          newPassword={this.state.password}
          newEmail={this.state.email}
          newDob={this.state.dob}
          newPhone={this.state.phone}
          newGender={this.state.gender}
        />
        <Table items={this.state.items} />
      </div>
    );
  }
}

class Table extends React.Component {
  render() {
    const items = this.props.items;
    return (
      <div id="Table">
        <table style={{ width: "", border: "19px", borderColor: "red" }}>
          <tbody>
            <thead style={{ border: "1px", borderColor: "#eee" }}>
              <tr>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  {" "}
                  Name
                </th>

                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Email
                </th>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Date-of-birth
                </th>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Phone
                </th>
                <th
                  style={{
                    backgroundColor: "#3498db",
                    color: "#000",
                    fontWeight: "bold",
                  }}
                >
                  Gender
                </th>
              </tr>
              {items.map((item) => (
                <tr>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.dob}</td>
                  <td>{item.phone}</td>
                  <td>{item.gender}</td>
                  <button
                    style={{ backgroundColor: "#3498db" }}
                    onClick={() => this.rowDelete()}
                  >
                    Delete
                  </button>
                </tr>
              ))}
            </thead>
          </tbody>
        </table>
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    //const { studNameErr, emailIdErr, dobErr, genderErr, phoneNumberErr, } = this.state.formErrors;
    return (
      <div id="Form">
        <form onSubmit={this.props.handleFormSubmit}>
          <FormGroup row>
            <Label sm={2} htmlFor="studName">
              Name
            </Label>
            <Col sm={3}>
              <input
                type="text"
                name="username"
                value={this.props.newUsername}
                onChange={this.props.handleInputChange}
                placeholder="Your name.."
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="emailId" sm={2}>
              Email
            </Label>
            <Col sm={3}>
              <input
                type="text"
                name="email"
                value={this.props.newEmail}
                onChange={this.props.handleInputChange}
                placeholder="Your email id.."
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="phoneNumber" sm={2}>
              Phone no
            </Label>
            <Col sm={3}>
              <input
                type="text"
                name="phone"
                value={this.props.newPhone}
                onChange={this.props.handleInputChange}
                placeholder="Your phoneNumber .."
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label sm={2}>Gender</Label>
            <Col sm={3}>
              <select
                name="gender"
                onChange={this.props.handleInputChange}
                value={this.props.newGender}
              >
                <option value="select">--Select--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="female">Other</option>
              </select>
            </Col>
          </FormGroup>

          <FormGroup row>
            <Label htmlFor="text" sm={2}>
              Date
            </Label>
            <Col sm={3}>
              <Input
                type="date"
                name="dob"
                id="exampleDate"
                value={this.props.newDob}
                placeholder="date placeholder"
                onChange={this.props.handleInputChange}
              />
            </Col>
          </FormGroup>

          <FormGroup row>
            <Col sm={5}>
              <button type="submit" value="Submit">
                Submit
              </button>
            </Col>
          </FormGroup>
        </form>
      </div>
    );
  }
}

export default Forms;
