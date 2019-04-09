// React
import React from 'react';

// Atom Components
import Button from '../../atoms/Button';
import Headline from '../../atoms/Headline';
import Instructions from '../../atoms/Instructions';
import Input from '../../atoms/Input';

const FormName = props => {
  return (
    <div>
      <Headline text={props.headline} />
      <Instructions text={props.instructions} />
      <form className="nl-form__form-name">
        <fieldset>
          <Input name="first_name" type="text" placeholder="First Name" handleChange={props.handleChange} minLength="1" required />
          <Input name="last_name" type="text" placeholder="Last Name" handleChange={props.handleChange} minLength="1" required />
        </fieldset>
        <Button type="submit" handleSubmit={props.handleSubmit} text="Sign Up" />
      </form>
    </div>
  );
};

export default FormName;
