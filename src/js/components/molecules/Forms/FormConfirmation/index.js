// React
import React from 'react';

// Atom Components
import Headline from '../../../atoms/Headline';
import Instructions from '../../../atoms/Instructions';

// Styles
import '../style.css'; // Generic form styles

const FormConfirmation = props => {
  return (
    <div styleName="form-wrapper">
      <Headline text={props.headline} />
      <div styleName="form-inner-wrapper">
        <Instructions text={props.instructions} confirmation />
        <span className="nl-form__submessage">{props.submessage}</span>
      </div>
    </div>
  );
};

export default FormConfirmation;
