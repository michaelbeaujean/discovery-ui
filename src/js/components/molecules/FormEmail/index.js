// React
import React from 'react';

// Atom Components
import Button from '../../atoms/Button';
import Headline from '../../atoms/Headline';
import Instructions from '../../atoms/Instructions';
import Input from '../../atoms/Input';

const FormEmail = props => {
  return (
    <div>
      <Headline text={props.headline} />
      <Instructions text={props.instructions} />
      <form className="nl-form__form-email">
        <fieldset>
          <Input name="email" type="email" placeholder="Enter email address" handleChange={props.handleChange} error={props.error} required minLength="1"/>
          <Input name="opt_in" type="checkbox" message="I agree to receive information from Discovery Communications in accordance with the following Privacy Policy" handleChange={props.handleChange} error={props.error} required />
        </fieldset>
        <Button type="submit" handleSubmit={props.handleSubmit} text="Next" />
      </form>
    </div>
  );
};

export default FormEmail;
