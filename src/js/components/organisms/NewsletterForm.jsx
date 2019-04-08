import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './../atoms/Button.jsx';
import Input from './../atoms/Input.jsx';

class NewsletterForm extends Component {
  constructor() {
    super();
  }

  handleInput() {
    console.log('Input changed');
  }

  handleButton(e) {
    e.stopPropagation();
    e.preventDefault();

    console.log('Button clicked');
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
        <Button type="submit" text="Next" onClick={this.handleButton} />
      </div>
    );
  }
};

export default NewsletterForm;
