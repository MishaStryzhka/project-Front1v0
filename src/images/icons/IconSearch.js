import * as React from 'react';

const IconSearch = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    // {...props}
  >
    <path
      stroke={props.fill || '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.584 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833ZM18.333 18.333l-2.5-2.5"
    />
  </svg>
);
export default IconSearch;
