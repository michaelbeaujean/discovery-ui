// React
import React from 'react';

// Style
import './style.css';

const Instructions = props => {
  return <p styleName={props.confirmation ? 'instructions-confirmation' : 'instructions'}>{props.text}</p>
};

export default Instructions;
