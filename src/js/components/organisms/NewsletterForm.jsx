import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormEmail from '../molecules/FormEmail';
import FormName from '../molecules/FormName';
import FormConfirmation from '../molecules/FormConfirmation';

class NewsletterForm extends Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  handleInput() {
    console.log('Input changed');
  }

  handleButton(e) {
    e.stopPropagation();
    e.preventDefault();

    console.log('Button clicked');
  }

  handleCheckbox() {
    console.log('Checkbox changed');
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <FormEmail
          headline="Join the list"
          instructions="Sign up for the TLC Newsletter."
          handleSubmit={(e) => this.handleButton(e)} 
        />
        <FormName
          headline="Join the list"
          instructions="Almost Done! Please Enter Your First and Last Name"
          handleSubmit={(e) => this.handleButton(e)} 
        />
        <FormConfirmation
          headline="Congratulations!"
          instructions="Thank You For Signing Up!"
          submessage="Look out for the latest news on your favorite shows."
        />
      </div>
    );
  }
};

export default NewsletterForm;
