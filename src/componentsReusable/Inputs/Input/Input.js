import { ButtonRefresh } from 'components/AccountData/AccountData.styled';
import { Placeholder, StyledField, TextError } from './Input.styled';
import IconEdit from 'images/icons/IconEdit';
import { useEffect, useState } from 'react';

const Input = ({
  as,
  field,
  setFieldValue,
  error,
  type = 'text',
  value,
  name = '',
  onChange = () => {},
  onBlur = () => {},
  required = false,
  disabled = false,
  width = '800px',
  height = '50px',
  showPlaceholder = false,
  placeholder,
  min,
  max,
  $style,
  submitted,
}) => {
  const [isRefresh, setIsRefresh] = useState(disabled || value === '');

  useEffect(() => {
    disabled && setIsRefresh(false);
  }, [disabled, submitted]);

  return (
    <div style={{ position: 'relative' }}>
      <StyledField
        as={as}
        field={field}
        setFieldValue={setFieldValue}
        error={error}
        type={type}
        min={min}
        max={max}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled || !isRefresh}
        width={width}
        height={height}
        $style={$style}
      />
      {!isRefresh && (
        <ButtonRefresh type="button" onClick={() => setIsRefresh(true)}>
          <IconEdit />
        </ButtonRefresh>
      )}
      <Placeholder required={required}>{placeholder}</Placeholder>
      {error && <TextError>{error}</TextError>}
    </div>
  );
};

export default Input;
