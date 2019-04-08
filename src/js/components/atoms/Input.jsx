// React
import React from 'react';

const Input = props => {
  return (
    <div className={props.className}>
      <label htmlFor={props.name}>
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
