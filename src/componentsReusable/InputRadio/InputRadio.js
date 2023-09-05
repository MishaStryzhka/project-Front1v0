import Input from 'components/Input/Input';
import {
  InputRadioBox,
  Item,
  ItemField,
  ItemLabel,
  ListBox,
  ToggleBtn,
} from './InputRadio.styled';
import IconPolygon from 'images/icons/IconPolygon';
import { useState } from 'react';

const InputRadio = ({ width, selectedValue, values, handleChange, name }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const keys = Object.keys(values);

  return (
    <InputRadioBox>
      <ListBox $isOpenMenu={isOpenMenu}>
        {keys.map(value => {
          return (
            <Item $active={selectedValue === value} key={value}>
              <ItemField
                type="radio"
                id={value}
                name={name}
                value={value}
                // component={Checkbox}
                onChange={handleChange}
              />
              <ItemLabel htmlFor={value}>{values[value]}</ItemLabel>
            </Item>
          );
        })}
      </ListBox>
      <Input width={width} value={values[selectedValue]} />
      <ToggleBtn
        $isOpenMenu={isOpenMenu}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
      >
        <IconPolygon />
      </ToggleBtn>
    </InputRadioBox>
  );
};

export default InputRadio;
