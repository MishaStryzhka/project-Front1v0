import { Placeholder, StyledField, TextError } from './Input.styled';

const Input = ({
  error = null,
  type = 'text',
  value = '',
  name = '',
  onChange = () => {},
  onBlur = () => {},
  required = false,
  disabled = false,
  width = '800px',
  placeholder = 'placeholder',
}) => {
  return (
    <div style={{ position: 'relative' }}>
      <StyledField
        error={error}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        width={width}
      />
      {!value && (
        <Placeholder>
          {placeholder}
          {required && <span> *</span>}
        </Placeholder>
      )}
      {error && <TextError>{error}</TextError>}
    </div>
  );
};

export default Input;
