import React from "react";
import { string } from "prop-types";

const Input = ({
  type,
  value,
  className,
  onChange,
  required,
  placeHolder,
  disabled,
}) => (
  <input
    type={type}
    value={value}
    placeholder={placeHolder}
    onChange={onChange}
    required={required}
    className={className}
    disabled={disabled}
  />
);

Input.defaultProps = {
  name: "Click",
};

export default Input;
