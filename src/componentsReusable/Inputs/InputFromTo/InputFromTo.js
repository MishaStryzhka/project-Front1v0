import { useCallback, useEffect, useState } from 'react';
import IconCalendar from 'images/icons/IconCalendar';

import { Placeholder, TextError } from '../Input/Input.styled';
import { ButtonRefresh } from 'components/AccountData/AccountData.styled';
import IconEdit from 'images/icons/IconEdit';
import {
  InputCalendarBox,
  ScrollBox,
  ToggleBtn,
  WrapScroll,
} from '../InputDate/InputDate.styled';
import { StyledField, StyledInput } from './InputFromTo.styled';
import YearsPicker from './YearsPicker/YearsPicker';
import TimePicker from './TimePicker/TimePicker';

const InputFromTo = e => {
  const {
    width, // "800px", ...
    value,
    name,
    className,
    onChange,
    required,
    placeholder,
    error,
    isSubmitting,
    disabled,
    setFieldTouched,
    type,
  } = e;
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isRefresh, setIsRefresh] = useState(disabled || value === '');

  useEffect(() => {
    if (value.begin === '') {
      setIsRefresh(true);
    } else if (isSubmitting) {
      setIsRefresh(false);
    }
  }, [value, isSubmitting]);

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
        e.target.id !== `InputFromTo-${name}`
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

  const currentYear = new Date().getFullYear();

  return (
    <InputCalendarBox width={width} className={className}>
      <StyledInput
        // type="date"
        width={width}
        value={value}
        placeholder={placeholder}
        disabled={disabled || !isRefresh}
      >
        <StyledField
          type={(type === 'date' && 'number') || type}
          min={type === 'date' ? '1900' : null}
          max={type === 'date' ? currentYear : null}
          step={type === 'date' ? '1' : null}
          name="begin"
          parse={0}
          value={value.begin || ''}
          placeholder="PPPP"
          onChange={e => {
            if (type === 'date' && e.currentTarget.value.length > 4) return;

            let newValues = {
              ...value,
              begin: e.currentTarget.value,
            };

            onChange(newValues);
          }}
          onBlur={() => {
            setFieldTouched('begin');
          }}
        />
        -
        <StyledField
          type={(type === 'date' && 'number') || type}
          min={type === 'date' ? '1900' : null}
          max={type === 'date' ? currentYear : null}
          step={type === 'date' ? '1' : null}
          name="end"
          value={value.end || ''}
          placeholder="PPPP"
          onChange={e => {
            if (type === 'date' && e.currentTarget.value.length > 4) return;

            let newValues = {
              ...value,
              end: e.currentTarget.value,
            };

            onChange(newValues);
          }}
        />
      </StyledInput>

      {!isRefresh && (
        <ButtonRefresh type="button" onClick={() => setIsRefresh(true)}>
          <IconEdit />
        </ButtonRefresh>
      )}
      <Placeholder required={required}>{placeholder}</Placeholder>
      {error && <TextError>{error?.begin || error?.end}</TextError>}
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
          {(type === 'date' && <YearsPicker />) || <TimePicker />}
        </ScrollBox>
      </WrapScroll>
    </InputCalendarBox>
  );
};

export default InputFromTo;
