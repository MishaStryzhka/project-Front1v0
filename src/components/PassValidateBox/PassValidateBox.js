import { string } from 'yup';
import IconCheckboxSmall from 'images/icons/IconCheckboxSmall';
import { useEffect, useState } from 'react';
import IconCheckboxSmallChack from 'images/icons/IconCheckboxSmallChack';
import { ValidateBox, ValidateBoxItem } from './PassValidateBox.styled';

const passwordMin8Valid = string().min(8, '');
const passwordLatinLettersValid = string().matches(
  /^(?=.*[a-zA-Z])[a-zA-Z0-9]+$/,
  ''
);
const passwordLettersUpperCaseValid = string().matches(/^(?=.*[A-Z])/, '');
const passwordOneNumberValid = string().matches(/^(?=.*[0-9])/, '');

const PassValidateBox = ({ value }) => {
  const [passwordMin8, setPasswordMin8] = useState(false);
  const [passwordLatinLetters, setPasswordLatinLetters] = useState(false);
  const [passwordLettersUpperCase, setPasswordLettersUpperCase] =
    useState(false);
  const [passwordOneNumber, setPasswordOneNumber] = useState(false);

  useEffect(() => {
    passwordMin8Valid.isValid(value).then(res => setPasswordMin8(res));
    passwordLatinLettersValid
      .isValid(value)
      .then(res => setPasswordLatinLetters(res));
    passwordLettersUpperCaseValid
      .isValid(value)
      .then(res => setPasswordLettersUpperCase(res));
    passwordOneNumberValid
      .isValid(value)
      .then(res => setPasswordOneNumber(res));
  }, [value]);

  return (
    <ValidateBox>
      <ValidateBoxItem>
        {passwordMin8 ? <IconCheckboxSmallChack /> : <IconCheckboxSmall />}
        <p>мінімум 8 символів</p>
      </ValidateBoxItem>
      <ValidateBoxItem>
        {passwordLatinLetters ? (
          <IconCheckboxSmallChack />
        ) : (
          <IconCheckboxSmall />
        )}
        <p>латинські літери</p>
      </ValidateBoxItem>
      <ValidateBoxItem>
        {passwordLettersUpperCase ? (
          <IconCheckboxSmallChack />
        ) : (
          <IconCheckboxSmall />
        )}
        <p>1 велика літера</p>
      </ValidateBoxItem>
      <ValidateBoxItem>
        {passwordOneNumber ? <IconCheckboxSmallChack /> : <IconCheckboxSmall />}
        <p>1 цифра</p>
      </ValidateBoxItem>
    </ValidateBox>
  );
};

export default PassValidateBox;
