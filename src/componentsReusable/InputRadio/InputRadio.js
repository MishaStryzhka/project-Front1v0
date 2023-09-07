import {
  InputRadioBox,
  Item,
  ListBox,
  StyledBtn,
  StyledInputRadio,
  ToggleBtn,
} from './InputRadio.styled';
import IconPolygon from 'images/icons/IconPolygon';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const InputRadio = e => {
  const { width, selectedValue, values, name, type = 'normal', className } = e;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  false && console.log('searchParams', searchParams);

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

  const keys = Object.keys(values);

  const newSetSearchParams = (key, value) => {
    setSearchParams(pref => {
      const Query = {};
      for (const [key, value] of pref.entries()) {
        Query[key] = value;
      }

      return {
        ...Query,
        [key]: value,
      };
    });
  };

  return (
    <InputRadioBox width={width} className={className}>
      <ListBox
        $isOpenMenu={isOpenMenu}
        id={`InputRadioListBox-${name}`}
        type={type}
      >
        {keys.map(value => {
          return (
            <Item key={value}>
              <StyledBtn
                onClick={() => newSetSearchParams(name, value)}
                $active={selectedValue === value}
              >
                {values[value]}
              </StyledBtn>
            </Item>
          );
        })}
      </ListBox>
      <StyledInputRadio type={type} width={width}>
        {values[selectedValue]}
      </StyledInputRadio>
      <ToggleBtn
        id={`ToggleBtn-${name}`}
        $isOpenMenu={isOpenMenu}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
        type={type}
      >
        <IconPolygon />
      </ToggleBtn>
    </InputRadioBox>
  );
};

export default InputRadio;
