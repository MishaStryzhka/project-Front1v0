import React from 'react';
import 'react-phone-number-input/style.css';
import { StyledPhoneInput } from './PhoneInput.styled';
import ua from 'react-phone-number-input/locale/ua';

const PhoneInputField = props => {
  const {
    field: { name, value },
    form: { setFieldValue },
    country = 'UA',
    onChange,
  } = props;

  const onValueChange = phoneNumber => {
    setFieldValue(name, phoneNumber);

    if (onChange !== null) {
      onChange(phoneNumber);
    }
  };

  return (
    <StyledPhoneInput
      labels={ua}
      // placeholder="+380 __ ___ ____ *"
      name={name}
      value={value}
      onChange={onValueChange}
      country={country}
    />
  );
};

PhoneInputField.defaultProps = {
  className: '',
  label: '',
  onChange: null,
  country: 'UA',
  disabled: false,
};

export default PhoneInputField;
