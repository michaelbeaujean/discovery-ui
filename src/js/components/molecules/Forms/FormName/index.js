// React
import React from 'react';

// Atom Components
import Button from '../../../atoms/Button';
import Headline from '../../../atoms/Headline';
import Instructions from '../../../atoms/Instructions';
import Input from '../../../atoms/Input';

// Style
import '../style.css';

const FormName = props => {
  return (
    <div styleName="form-wrapper">
      <Headline text={props.headline} />
      <div styleName="form-inner-wrapper">
        <Instructions text={props.instructions} />
        <form styleName="clear">
          <fieldset styleName="fieldset clear">
            <Input name="first_name" type="text" placeholder="First Name" handleChange={props.handleChange} minLength="1" required />
            <Input name="last_name" type="text" placeholder="Last Name" handleChange={props.handleChange} minLength="1" required />
          </fieldset>
          <Button type="submit" handleSubmit={props.handleSubmit} text="Sign Up" />
        </form>
      </div>
    </div>
  );
};

export default FormName;
