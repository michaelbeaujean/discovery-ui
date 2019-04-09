// React
import React from 'react';

// Styles
import './style.css';

const Input = props => {
  return (
    <div>
      <input
        styleName={props.error ? 'error' : null}
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}
        minLength={props.minLength}
      />
      {props.message !== undefined ? <span className="message">{props.message}</span> : null}
    </div>
  )
};

export default Input;
