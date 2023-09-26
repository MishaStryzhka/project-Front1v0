import * as React from 'react';
const IconClock = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={27}
    height={27}
    fill="none"
    {...props}
  >
    <g
      stroke={props.stroke || '#396DFF'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M26 13.5C26 20.4 20.4 26 13.5 26S1 20.4 1 13.5 6.6 1 13.5 1 26 6.6 26 13.5Z" />
      <path d="m18.137 17.475-3.875-2.312c-.675-.4-1.225-1.363-1.225-2.15V7.888" />
    </g>
  </svg>
);
export default IconClock;
