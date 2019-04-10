// React
import React from 'react';

// Atom Components
import Button from '../../../atoms/Button';
import Headline from '../../../atoms/Headline';
import Instructions from '../../../atoms/Instructions';
import Input from '../../../atoms/Input';

// Style
import '../style.css';

const FormEmail = props => {
  return (
    <div styleName="form-wrapper">
      <Headline text={props.headline} />
      <div styleName="form-inner-wrapper">
        <Instructions text={props.instructions} />
        <form styleName="clear">
          <fieldset styleName="fieldset clear">
            <Input name="email" type="email" placeholder="Enter email address" handleChange={props.handleChange} error={props.error} required minLength="1"/>
            <Input name="opt_in" type="checkbox" message="I agree to receive information from Discovery Communications in accordance with the following Privacy Policy" handleChange={props.handleChange} error={props.error} required />
          </fieldset>
          <Button type="submit" handleSubmit={props.handleSubmit} text="Next" />
        </form>
      </div>
    </div>
  );
};

export default FormEmail;
