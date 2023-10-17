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
import { StyledField, StyledInput } from './InputYearsFromTo.styled';

const InputYearsFromTo = e => {
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
        e.target.id !== `InputYearsFromTo-${name}`
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

  //   console.log('error', error);

  return (
    <InputCalendarBox width={width} className={className}>
      <StyledInput
        type="date"
        width={width}
        value={value}
        placeholder={placeholder}
        disabled={disabled || !isRefresh}
      >
        <StyledField
          type="number"
          min="1900"
          max={currentYear}
          step="1"
          name="begin"
          parse={0}
          value={value.begin || ''}
          placeholder="PPPP"
          onChange={e => {
            if (e.currentTarget.value.length > 4) return;

            let years = {
              ...value,
              begin: e.currentTarget.value,
            };

            onChange(years);
          }}
          onBlur={() => {
            setFieldTouched('begin');
          }}
        />
        -
        <StyledField
          type="number"
          min="1900"
          max={currentYear}
          step="1"
          name="end"
          value={value.end || ''}
          placeholder="PPPP"
          onChange={e => {
            if (e.currentTarget.value.length > 4) return;

            let years = {
              ...value,
              end: e.currentTarget.value,
            };

            onChange(years);
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
          <p>YearsPicker</p>
        </ScrollBox>
      </WrapScroll>
    </InputCalendarBox>
  );
};

export default InputYearsFromTo;
