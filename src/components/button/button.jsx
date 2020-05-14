import React from "react";

import "./button.scss";

const Button = ({ children, invert, isGoogle, top, ...otherProps }) => {
  return (
    <button
      className={`${invert ? "inverted" : ""} ${
        isGoogle ? "google-sign-in" : ""
      } ${top ? "top" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
