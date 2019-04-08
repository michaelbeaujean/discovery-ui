import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Input from './../atoms/Input.jsx';

class NewsletterForm extends Component {
  constructor() {
    super();
  }

  handleInput() {

  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Input 
          instructions="Sign up for the TLC Newsletter"
          name="Email" 
          type="email"
          onChange={this.handleInput}
          placeholder="Enter email address"
        />
      </div>
    );
  }
};

export default NewsletterForm;
