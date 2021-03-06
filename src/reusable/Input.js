import React from "react";
import PropTypes from "prop-types";
import { errorMessage, inputError } from "../styles";

const Input = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.label}</label>
      <br />
      <input
        style={props.error ? inputError : null}
        id={props.id}
        name={props.name}
        type={props.type}
        ref={ref}
        onChange={props.onChange}
        value={props.value}
      ></input>
      <br />
      {props.error && (
        <p role="alert" style={errorMessage}>
          {props.error}
        </p>
      )}
    </div>
  );
});

//prop types run on browser
Input.propTypes = {
  /** HTML ID assigned to the input */
  id: PropTypes.string.isRequired,

  /** Label Value */
  label: PropTypes.string.isRequired,

  /** Input Type */
  type: PropTypes.oneOf(["text", "email", "phone", "number"]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,

  /** Value assigned to the input */
  value: PropTypes.string.isRequired,

  /**Error to display below the component */
  error: PropTypes.string
};

export default Input;
