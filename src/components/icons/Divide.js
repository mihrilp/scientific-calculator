import * as React from "react";

function SvgDivide(props) {
  return (
    <svg
      width="1.1em"
      height="1.1em"
      viewBox="0 0 20 14"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.429 1.5c0 .828-.64 1.5-1.429 1.5s-1.429-.672-1.429-1.5S9.211 0 10 0s1.429.672 1.429 1.5zM20 6v2H0V6h20zm-10 8c.789 0 1.429-.672 1.429-1.5S10.789 11 10 11s-1.429.672-1.429 1.5S9.211 14 10 14z"
        fill="#e36414"
      />
    </svg>
  );
}

export default SvgDivide;
