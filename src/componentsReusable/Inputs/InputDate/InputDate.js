import Calendar from 'componentsReusable/Calendar/Calendar';
import { useCallback, useEffect, useState } from 'react';
import {
  InputCalendarBox,
  ScrollBox,
  StyledInput,
  ToggleBtn,
  WrapScroll,
} from './InputDate.styled';
import IconCalendar from 'images/icons/IconCalendar';

import dateFormat from 'dateformat';
import { Placeholder, TextError } from '../Input/Input.styled';
import { ButtonRefresh } from 'components/AccountData/AccountData.styled';
import IconEdit from 'images/icons/IconEdit';

const InputDate = e => {
  const {
    width, // "800px", ...
    selectedValue,
    name,
    className,
    onChange,
    required,
    placeholder,
    error,
    submitted,
    disabled,
  } = e;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isRefresh, setIsRefresh] = useState(disabled || selectedValue === '');

  useEffect(() => {
    disabled && setIsRefresh(false);
  }, [disabled, submitted]);

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
    <InputCalendarBox width={width} className={className}>
      <StyledInput
        type="date"
        width={width}
        value={
          selectedValue ? dateFormat(new Date(selectedValue), 'yyyy-mm-dd') : ''
        }
        onChange={e => {
          onChange(e.currentTarget.value);
        }}
        placeholder={placeholder}
        disabled={disabled || !isRefresh}
      />
      {!isRefresh && (
        <ButtonRefresh type="button" onClick={() => setIsRefresh(true)}>
          <IconEdit />
        </ButtonRefresh>
      )}
      <Placeholder required={required}>{placeholder}</Placeholder>
      {error && <TextError>{error}</TextError>}
      {isRefresh && (
        <ToggleBtn
          id={`ToggleBtn-${name}`}
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
          type="button"
        >
          <IconCalendar />
        </ToggleBtn>
      )}
      <WrapScroll $isOpenMenu={isOpenMenu} id={`InputCalendar-${name}`}>
        <ScrollBox>
          <Calendar
            value={dateFormat(selectedValue, 'yyyy-mm-dd')}
            onChange={date => {
              onChange(dateFormat(date, 'yyyy-mm-dd'));
            }}
          />
        </ScrollBox>
      </WrapScroll>
    </InputCalendarBox>
  );
};

export default InputDate;
