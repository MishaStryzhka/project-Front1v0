import { Placeholder, StyledField, TextError } from './Input.styled';

const Input = ({
  as,
  field,
  setFieldValue,
  error = null,
  type = 'text',
  value = '',
  name = '',
  onChange = () => {},
  onBlur = () => {},
  required = false,
  disabled = false,
  width = '800px',
  height = '50px',
  showPlaceholder = false,
  placeholder = '',
  min,
  max,
  $style,
}) => {
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
        disabled={disabled}
        width={width}
        height={height}
        $style={$style}
      />
      {!value && (
        <Placeholder type={field} required={required}>
          {placeholder}
        </Placeholder>
      )}
      {error && <TextError>{error}</TextError>}
    </div>
  );
};

export default Input;
