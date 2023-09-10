import {
  InputRadioBox,
  Item,
  ListBox,
  StyledBtn,
  StyledInputRadio,
  ToggleBtn,
  WrapScroll,
} from './InputRadio.styled';
import IconPolygon from 'images/icons/IconPolygon';
import { useCallback, useEffect, useState } from 'react';

const InputRadio = e => {
  const {
    width,
    selectedValue,
    values,
    name,
    type = 'normal',
    className,
    defaultValue,
    onChange,
    required,
  } = e;
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleKeyDown = useCallback(evt => {
    document.body.style.overflow = 'auto';
    if (evt.code === 'Escape') {
      setIsOpenMenu(false);
    }
  }, []);

  const handleClose = useCallback(
    e => {
      if (
        e.target.id !== `ToggleBtn-${name}` &&
        e.target.id !== `InputRadioListBox-${name}`
      ) {
        setIsOpenMenu(false);
      }
    },
    [name]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleClose);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.addEventListener('click', handleClose);
    };
  }, [handleKeyDown, handleClose]);

  const selectedEl = values.find(option => option.id === selectedValue);

  return (
    <InputRadioBox width={width} className={className}>
      <StyledInputRadio type={type} width={width} required={required}>
        {selectedEl?.name || defaultValue}
      </StyledInputRadio>
      <ToggleBtn
        id={`ToggleBtn-${name}`}
        $isOpenMenu={isOpenMenu}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
        type="button"
        $styledtype={type}
      >
        <IconPolygon />
      </ToggleBtn>
      <WrapScroll
        $isOpenMenu={isOpenMenu}
        id={`InputRadioListBox-${name}`}
        type={type}
      >
        <ListBox type={type}>
          {values.map(value => {
            return (
              <Item key={value.id}>
                <StyledBtn
                  type="button"
                  onClick={() => onChange(value.id)}
                  $active={selectedValue === value.id}
                >
                  {value.name}
                </StyledBtn>
              </Item>
            );
          })}
        </ListBox>
      </WrapScroll>
    </InputRadioBox>
  );
};

export default InputRadio;
