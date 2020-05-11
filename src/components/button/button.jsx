import React from "react";

import "./button.scss";

const Button = ({ children, invert, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${invert ? "inverted" : ""} ${
        isGoogle ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
