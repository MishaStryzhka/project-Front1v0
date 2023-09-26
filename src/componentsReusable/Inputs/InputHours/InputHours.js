import { useState } from 'react';
import {
  InputDateBox,
  InputWrap,
  StyledInputTime,
  WrapInputHiden,
} from './InputHours.styled';
import { useCallback } from 'react';
import { useEffect } from 'react';
import Input from 'components/Input/Input';
import dateFormat from 'dateformat';
import {
  ScrollBox,
  StyledPlaceholder,
  ToggleBtn,
  WrapScroll,
} from '../InputDate/InputDate.styled';
import IconClock from 'images/icons/IconClock';
import Calendar from 'react-calendar';
import { date } from 'yup';
import { useAuth } from 'hooks';
import theme from 'theme';
import TimePicker from 'componentsReusable/TimePicker/TimePicker';

const InputHours = e => {
  const {
    width, // "800px", ...
    selectedValue,
    name,
    className,
    onChange,
    required,
    disabled,
  } = e;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { currentTheme } = useAuth();

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
        e.target.id !== `InputDate-${name}`
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

  return (
    <InputDateBox width={width} className={className} disabled={disabled}>
      <InputWrap disabled={disabled}>
        <WrapInputHiden>
          <StyledInputTime
            disabled={disabled}
            value={
              selectedValue.from
                ? dateFormat(
                    new Date(`${selectedValue.day}, ${selectedValue.from}`),
                    'HH:MM'
                  )
                : ''
            }
            type="time"
            name={name}
            onChange={e => {
              onChange({ ...selectedValue, from: e.currentTarget.value });
            }}
          />
        </WrapInputHiden>
        <p>-</p>
        <WrapInputHiden>
          <StyledInputTime
            disabled={disabled}
            value={
              selectedValue.to
                ? dateFormat(
                    new Date(`${selectedValue.day}, ${selectedValue.to}`),
                    'HH:MM'
                  )
                : ''
            }
            type="time"
            name={name}
            onChange={e => {
              onChange({ ...selectedValue, to: e.currentTarget.value });
            }}
          />
        </WrapInputHiden>
      </InputWrap>
      {!selectedValue && (
        <StyledPlaceholder required={required}></StyledPlaceholder>
      )}
      <ToggleBtn
        id={`ToggleBtn-${name}`}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
        type="button"
      >
        <IconClock
          stroke={
            disabled
              ? theme[currentTheme].color.card
              : theme[currentTheme].color.main
          }
        />
      </ToggleBtn>
      <WrapScroll $isOpenMenu={isOpenMenu} id={`InputDate-${name}`}>
        <ScrollBox>
          <TimePicker
            value={selectedValue}
            onChange={date => {
              onChange(date);
            }}
          />
        </ScrollBox>
      </WrapScroll>
    </InputDateBox>
  );
};

export default InputHours;
