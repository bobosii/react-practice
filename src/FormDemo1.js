import React, { Component } from "react";
import { Form } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { Username: " " ,city:" "};
  onChangeHandler = (event) => {
    // this.setState({ Username: event.target.value });
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.Username);
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <h3>Username</h3>
          <input name="Username" onChange={this.onChangeHandler} type="text"></input>
          <h3>Username is {this.state.Username}</h3>
          <h3>City</h3>
          <input name="city" onChange={this.onChangeHandler} type="text"></input>
          <h3>City is {this.state.city}</h3>
          <input value="save" type="submit"></input>
        </Form>
      </div>
    );
  }
}
