// React
import React from 'react';

const Input = props => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name} className="nl-form__label">
        {props.instructions}
        <input
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
        />
      </label>
    </div>
  )
};

export default Input;
