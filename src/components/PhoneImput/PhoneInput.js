import React from 'react';
import 'react-phone-number-input/style.css';
import { StyledPhoneInput } from './PhoneInput.styled';
import ua from 'react-phone-number-input/locale/ua';

const PhoneInputField = props => {
  const {
    field: { name, value },
    setFieldValue,
    country = 'UA',
    width,
  } = props;

  const onValueChange = phoneNumber => {
    setFieldValue(phoneNumber);
  };

  return (
    <StyledPhoneInput
      labels={ua}
      name={name}
      value={value}
      onChange={e => onValueChange(e || '')}
      country={country}
      width={width}
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
