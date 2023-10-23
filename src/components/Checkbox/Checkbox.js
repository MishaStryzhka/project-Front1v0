import IconCheckbox from 'images/icons/IconCheckbox';
import { StyledField, StyledLabel } from './Checkbox.stuled';
import IconCheckboxChack from 'images/icons/IconCheckboxChack';

const Checkbox = e => {
  const {
    onChange,
    value,
    field: { name },
  } = e;

  return (
    <StyledLabel onChange={onChange}>
      <StyledField type={e.type} name={e.field.name} value={value} />

      {Array.isArray(e.form.values[name]) ? (
        <>
          {e.form.values[name].includes(e.value) ? (
            <IconCheckboxChack />
          ) : (
            <IconCheckbox />
          )}
        </>
      ) : (
        <>
          {Object.keys(e.form.values[name]).includes(e.value) ? (
            <IconCheckboxChack />
          ) : (
            <IconCheckbox />
          )}
        </>
      )}
    </StyledLabel>
  );
};

export default Checkbox;
