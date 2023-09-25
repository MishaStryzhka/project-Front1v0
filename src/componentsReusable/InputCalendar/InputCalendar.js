import Calendar from 'componentsReusable/Calendar/Calendar';
import { useCallback, useEffect, useState } from 'react';
import {
  InputCalendarBox,
  ScrollBox,
  StyledPlaceholder,
  ToggleBtn,
  WrapScroll,
} from './InputCalendar.styled';
import IconCalendar from 'images/icons/IconCalendar';
import Input from 'components/Input/Input';

import dateFormat from 'dateformat';

const InputCalendar = e => {
  const {
    width, // "800px", ...
    selectedValue,
    name,
    className,
    onChange,
    required,
  } = e;
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  selectedValue &&
    console.log(
      'selectedValue',
      dateFormat(new Date(selectedValue), 'yyyy-mm-dd')
    );

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
        e.target.id !== `InputCalendar-${name}`
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
          console.log('e', e.currentTarget.value);
        }}
        // required={required}
        // placeholder={placeholder}
      />
      {!selectedValue && (
        <StyledPlaceholder required={required}></StyledPlaceholder>
      )}
      <ToggleBtn
        id={`ToggleBtn-${name}`}
        // $isOpenMenu={isOpenMenu}
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
            value={selectedValue}
            onChange={date => {
              console.log('date', date);
              onChange(date);
            }}
          />
        </ScrollBox>
      </WrapScroll>
    </InputCalendarBox>
  );
};

// const InputCalendar = () => {
//   return;
// };

export default InputCalendar;
