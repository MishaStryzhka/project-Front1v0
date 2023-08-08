import * as React from 'react';

const IconBackButton = props => {
  console.log('props', props);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="transparent"
      // {...props}
    >
      <path
        stroke={props.fill || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M15 36.667h10c8.333 0 11.666-3.334 11.666-11.667V15c0-8.333-3.333-11.667-11.666-11.667H15C6.666 3.333 3.333 6.667 3.333 15v10c0 8.333 3.333 11.667 11.667 11.667Z"
      />
      <path
        stroke={props.fill || '#fff'}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M22.1 25.883 16.233 20l5.867-5.883"
      />
    </svg>
  );
};
export default IconBackButton;
