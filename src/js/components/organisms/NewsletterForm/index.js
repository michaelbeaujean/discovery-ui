// React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Molecule components
import FormEmail from '../../molecules/FormEmail';
import FormName from '../../molecules/FormName';
import FormConfirmation from '../../molecules/FormConfirmation';

// Style
import './style.css';

class NewsletterForm extends Component {
  constructor() {
    super();

    this.state = {
      currentStep: 1,
      showErrors: false,
      email: '',
      optIn: false,
      firstName: '',
      lastName: ''
    }

    this.isFormValid = this.isFormValid.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  isFormValid() {
    const { currentStep, email, optIn, firstName, lastName } = this.state,
          emailRegex = /\S+@\S+\.\S+/,
          validEmail = emailRegex.test(email);

    if (currentStep === 1) {
      return validEmail && (email.length > 0) && optIn;
    } else {
      return firstName.length > 0 && lastName.length > 0;
    }
  }

  handleChange(e) {
    const target = e.target,
          {name, value, checked} = target;

    if (name === 'email') {
      this.setState({ email: value });
    } else if (name === 'opt_in') {
      this.setState({ optIn: checked });
    } else if (name === 'first_name') {
      this.setState({ firstName: value });
    } else {
      this.setState({ lastName: value });
    }
  }

  handleButton(e) {
    e.stopPropagation();
    e.preventDefault();
    
    const checkForm = this.isFormValid();

    if (checkForm) {
      const { currentStep } = this.state,
            nextStep = currentStep + 1;

      this.setState({
        currentStep: nextStep,
        showErrors: false
      });
    } else {
      this.setState({ showErrors: true })
    } 

    console.log("Email: " + this.state.email);
    console.log("Opt-In: " + this.state.optIn);
    console.log("First Name: " + this.state.firstName);
    console.log("Last Name: " + this.state.lastName);
  }

  render() {
    let { showErrors } = this.state,
        form;

    if (this.state.currentStep === 1) {
      form = <FormEmail
              headline="Join the list"
              instructions="Sign up for the TLC Newsletter."
              handleSubmit={(e) => this.handleButton(e)}
              handleChange={(e) => this.handleChange(e)}
              error={showErrors}
            />;
    } else if (this.state.currentStep === 2) {
      form = <FormName
              headline="Join the list"
              instructions="Almost Done! Please Enter Your First and Last Name"
              handleSubmit={(e) => this.handleButton(e)}
              handleChange={(e) => this.handleChange(e)}
              error={showErrors}
            />;
    } else {
      form = <FormConfirmation
              headline="Congratulations!"
              instructions="Thank You For Signing Up!"
              submessage="Look out for the latest news on your favorite shows."
            />
    }

    return (
      <div styleName='formContainer'>
        {form}
        <span className="nl-form__error-message">Please enter all required fields.</span>
      </div>
    );
  }
};

export default NewsletterForm;
