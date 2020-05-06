import React from "react";

import "./button.scss";

const Button = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : ""} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
