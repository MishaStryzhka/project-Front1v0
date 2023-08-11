import * as React from 'react';
const IconCross = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke={props.fill || '#04827A'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16 8-8 8m0-8 8 8"
    />
  </svg>
);
export default IconCross;
