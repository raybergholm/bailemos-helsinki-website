import React from "react";
import PropTypes from "prop-types";

import { generateClassName } from "../utils/classNames";

const buildClassName = ({ bootstrapStyle, dismissable, extras }) => {
  const tokens = [];

  tokens.push("alert");

  if (bootstrapStyle) {
    tokens.push(`alert-${bootstrapStyle}`);
  }

  if (dismissable) {
    tokens.push("alert-dismissable");
    tokens.push("fade");
    tokens.push("show");
  }

  if (extras) {
    for (const extra of extras) {
      tokens.push(extra);
    }
  }

  return generateClassName(tokens);
};

const Alert = ({ id, style, children, dismissable, ...props }) => (
  <div id={id || null} style={style || null} className={buildClassName({ dismissable, ...props })} role="alert">
    {children}
    {dismissable && (
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    )}
  </div>
);

export default Alert;

Alert.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string
  ]),
  dismissable: PropTypes.bool,
  id: PropTypes.string,
  style: PropTypes.object
};
