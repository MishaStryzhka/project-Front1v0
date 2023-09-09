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
import { useSearchParams } from 'react-router-dom';

const InputRadio = e => {
  const {
    width,
    selectedValue,
    values,
    name,
    type = 'normal',
    className,
    defaultValue,
  } = e;
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

  const selectedEl = values.find(option => option.id === selectedValue);

  return (
    <InputRadioBox width={width} className={className}>
      <StyledInputRadio type={type} width={width}>
        {selectedEl?.name || defaultValue}
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
                  onClick={() => newSetSearchParams(name, value.id)}
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
