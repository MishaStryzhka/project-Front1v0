import Calendar from 'componentsReusable/Calendar/Calendar';
import { useCallback, useEffect, useState } from 'react';
import {
  InputCalendarBox,
  ScrollBox,
  ToggleBtn,
  WrapScroll,
} from './InputDate.styled';
import IconCalendar from 'images/icons/IconCalendar';
import Input from 'componentsReusable/Inputs/Input/Input';

import dateFormat from 'dateformat';
import { Placeholder, TextError } from '../Input/Input.styled';

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
      <Input
        type="date"
        width={width}
        value={
          selectedValue ? dateFormat(new Date(selectedValue), 'yyyy-mm-dd') : ''
        }
        onChange={e => {
          onChange(e.currentTarget.value);
        }}
      />
      <Placeholder required={required}>{placeholder}</Placeholder>
      {error && <TextError>{error}</TextError>}
      <ToggleBtn
        id={`ToggleBtn-${name}`}
        onClick={() => {
          setIsOpenMenu(!isOpenMenu);
        }}
        type="button"
      >
        <IconCalendar />
      </ToggleBtn>
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
