import React from "react";

function ButtonWithIcon({ icon, href, text }) {
  return (
    <a className="ui__button-icon" href={href}>
      {icon}
      <p>{text}</p>
    </a>
  );
}

export default ButtonWithIcon;
