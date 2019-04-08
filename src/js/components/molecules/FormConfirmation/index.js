// React
import React from 'react';

// Atom Components
import Headline from '../../atoms/Headline';
import Instructions from '../../atoms/Instructions';

const FormConfirmation = props => {
  return (
    <div>
      <Headline text={props.headline} />
      <Instructions text={props.instructions} />
      <span className="nl-form__submessage">{props.submessage}</span>
    </div>
  );
};

export default FormConfirmation;
