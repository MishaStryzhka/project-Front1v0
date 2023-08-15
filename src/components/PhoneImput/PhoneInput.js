import React from 'react';
import 'react-phone-number-input/style.css';
import { StyledPhoneInput } from './PhoneInput.styled';
import ua from 'react-phone-number-input/locale/ua';

const PhoneInputField = props => {
  const {
    field: { name, value },
    setFieldValue,
    country = 'UA',
  } = props;

  // console.log('name, value', name, value);

  const onValueChange = phoneNumber => {
    console.log('phoneNumber', phoneNumber);
    setFieldValue(phoneNumber);
  };

  return (
    <StyledPhoneInput
      labels={ua}
      name={name}
      value={value}
      onChange={e => onValueChange(e || '')}
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
