import * as React from 'react';

const IconUser = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    // {...props}
  >
    <path
      stroke={props.fill || '#fff'}
      d="M10 10a4.167 4.167 0 1 0 0-8.333A4.167 4.167 0 0 0 10 10ZM10 12.083c-4.175 0-7.575 2.8-7.575 6.25 0 .234.183.417.416.417h14.317a.413.413 0 0 0 .417-.417c0-3.45-3.4-6.25-7.575-6.25Z"
    />
  </svg>
);
export default IconUser;
