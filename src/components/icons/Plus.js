import * as React from "react";

function SvgPlus(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 11v9h2v-9h9V9h-9V0H9v9H0v2h9z"
        fill="#e36414"
      />
    </svg>
  );
}
export default SvgPlus;
