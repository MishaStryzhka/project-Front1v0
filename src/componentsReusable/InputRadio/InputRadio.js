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
import { useCallback, useEffect, useState } from 'react';

const InputRadio = ({ width, selectedValue, values, handleChange, name }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const handleKeyDown = useCallback(evt => {
    document.body.style.overflow = 'auto';
    if (evt.code === 'Escape') {
      setIsOpenMenu(false);
    }
  }, []);

  const handleClose = useCallback(e => {
    if (e.target.id !== 'ToggleBtn' && e.target.id !== 'InputRadioListBox') {
      setIsOpenMenu(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClose);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClose);
    };
  }, [handleKeyDown, handleClose]);

  const keys = Object.keys(values);

  return (
    <InputRadioBox>
      <ListBox $isOpenMenu={isOpenMenu} id="InputRadioListBox">
        {keys.map(value => {
          return (
            <Item key={value}>
              <ItemField
                type="radio"
                id={value}
                name={name}
                value={value}
                onChange={handleChange}
              />
              <ItemLabel $active={selectedValue === value} htmlFor={value}>
                {values[value]}
              </ItemLabel>
            </Item>
          );
        })}
      </ListBox>
      <Input width={width} value={values[selectedValue]} />
      <ToggleBtn
        id="ToggleBtn"
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
