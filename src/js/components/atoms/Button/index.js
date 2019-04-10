// React
import React from 'react';

// Style
import './style.css';

const Button = props => {
  return <button styleName="button" type={props.type} onClick={props.handleSubmit}>{props.text}</button>
};

export default Button;
