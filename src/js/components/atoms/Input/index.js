// React
import React from 'react';

// Styles
import './style.css';

const Input = props => {
  return (
    <div styleName={`input-wrapper--${props.type}`}>
      <input
        styleName={props.error ? `input--${props.type} error` : `input--${props.type}`}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}
        minLength={props.minLength}
      />
      {props.message !== undefined ? <span styleName="message">{props.message}</span> : null}
    </div>
  )
};

export default Input;
