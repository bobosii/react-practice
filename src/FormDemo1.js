import React, { Component } from "react";
import { Form } from "reactstrap";

export default class FormDemo1 extends Component {
  state = { Username: "" };
  onChangeHandler = (event) => {
    this.setState({ Username: event.target.value });
  };
  onSubmitHandler = (event)=>
  {
    event.preventDefault();
    alert(this.state.Username);
  }
  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmitHandler}>
          <h3>Username</h3>
          <input onChange={this.onChangeHandler} type="text"></input>
          <h3>Username is {this.state.Username}</h3>
          <input value="save" type="submit"></input>
        </Form>
      </div>
    );
  }
}
