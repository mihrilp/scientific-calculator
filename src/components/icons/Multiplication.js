import * as React from "react";

function SvgCancel(props) {
  return (
    <svg
      width="0.8em"
      height="0.8em"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.364 7.778L0 14.142l1.414 1.414 6.364-6.364 6.364 6.364 1.414-1.414-6.364-6.364 6.364-6.364L14.142 0 7.778 6.364 1.414 0 0 1.414l6.364 6.364z"
        fill="#e36414"
      />
    </svg>
  );
}

export default SvgCancel;
