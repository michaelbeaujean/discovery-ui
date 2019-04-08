import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Button from './../atoms/Button';
import Input from './../atoms/Input';

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

  handleCheckbox() {
    console.log('Checkbox changed');
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Input 
          instructions="Sign up for the TLC Newsletter"
          name="Email" 
          type="email"
          className="nl-form__input-text"
          onChange={this.handleInput}
          placeholder="Enter email address"
        />
        <Button type="submit" text="Next" onClick={this.handleButton} />
        <Input
          instructions="I agree to receive information from Discovery Communications in accordance with the following Privacy Policy"
          name="Privacy_Policy"
          type="checkbox"
          className="nl-form__input-checkbox"
          onChange={this.handleCheckbox}
        />
      </div>
    );
  }
};

export default NewsletterForm;
