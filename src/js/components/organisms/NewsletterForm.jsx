import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormEmail from '../molecules/FormEmail';
import FormName from '../molecules/FormName';
import FormConfirmation from '../molecules/FormConfirmation';

class NewsletterForm extends Component {
  constructor() {
    super();

    this.state = {
      currentStep: 1,
      newRegistration: {
        email: '',
        firstName: '',
        lastName: ''
      }
    }

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

    const currentStep = this.state.currentStep,
      nextStep = currentStep + 1;

    this.setState({currentStep: nextStep});
  }

  handleCheckbox() {
    console.log('Checkbox changed');
  }

  render() {
    let form;

    if (this.state.currentStep === 1) {
      form = <FormEmail
              headline="Join the list"
              instructions="Sign up for the TLC Newsletter."
              handleSubmit={(e) => this.handleButton(e)} 
            />;
    } else if (this.state.currentStep === 2) {
      form = <FormName
              headline="Join the list"
              instructions="Almost Done! Please Enter Your First and Last Name"
              handleSubmit={(e) => this.handleButton(e)} 
            />;
    } else {
      form = <FormConfirmation
              headline="Congratulations!"
              instructions="Thank You For Signing Up!"
              submessage="Look out for the latest news on your favorite shows."
            />
    }

    return form;
  }
};

export default NewsletterForm;
