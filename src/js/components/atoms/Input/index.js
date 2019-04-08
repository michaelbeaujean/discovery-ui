// React
import React from 'react';

const Input = props => {
  return (
    <div>
      <input
        name={props.name}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {props.message !== undefined ? <span className="nl-form__message">{props.message}</span> : null}
    </div>
  )
};

export default Input;
