import * as React from 'react';
const IconAdd = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    // {...props}
  >
    <g
      stroke={props.fill || '#00185C'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M11 21c5.5 0 10-4.5 10-10S16.5 1 11 1 1 5.5 1 11s4.5 10 10 10ZM7 11h8M11 15V7" />
    </g>
  </svg>
);
export default IconAdd;
