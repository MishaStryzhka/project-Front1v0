import Calendar from 'componentsReusable/Calendar/Calendar';
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
import { Placeholder } from 'components/FormPatientPage/FormPatientPage.styled';

const InputRadio = e => {
  const {
    width, // "800px", ...
    selectedValue,
    values,
    name,
    styledType = 'normal', // "normal", "min"
    className,
    defaultValue,
    onChange,
    required,
    type, // "calendar"
    showPlaceholder = false,
    placeholder,
  } = e;
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleKeyDown = useCallback(evt => {
    document.body.style.overflow = 'auto';
    if (evt.code === 'Escape') {
      // setIsOpenMenu(false);
    }
  }, []);

  const handleClose = useCallback(
    e => {
      if (
        e.target.id !== `ToggleBtn-${name}` &&
        e.target.id !== `InputRadioListBox-${name}`
      ) {
        // setIsOpenMenu(false);
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

  const selectedEl = values?.find(option => option.id === selectedValue);

  return (
    <InputRadioBox width={width} className={className}>
      <StyledInputRadio
        $styledType={styledType}
        width={width}
        required={required}
      >
        {selectedEl?.name || defaultValue}
      </StyledInputRadio>
      {(!selectedValue || showPlaceholder) && (
        <Placeholder required={required}>{placeholder}</Placeholder>
      )}
      <ToggleBtn
        id={`ToggleBtn-${name}`}
        $isOpenMenu={isOpenMenu}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
        type="button"
        $styledtype={styledType}
      >
        <IconPolygon />
      </ToggleBtn>
      <WrapScroll
        $isOpenMenu={isOpenMenu}
        id={`InputRadioListBox-${name}`}
        $styledType={styledType}
      >
        {values && (
          <ListBox $styledType={styledType}>
            {values?.map(value => {
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
        )}
        {type === 'date' && (
          <Calendar
            value={selectedValue}
            onChange={date => {
              console.log('date', date);
              onChange(date);
            }}
          />
        )}
      </WrapScroll>
    </InputRadioBox>
  );
};

export default InputRadio;
