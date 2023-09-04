import Input from 'components/Input/Input';
// import { useState } from 'react';

const InputRadio = ({ width, value }) => {
  // const [isOpenMenu, setIsOpenMenu] = useState(false);

  return <div>{<Input width={width} value={value} />}</div>;
};

export default InputRadio;
