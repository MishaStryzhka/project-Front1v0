import IconCheckbox from 'images/icons/IconCheckbox';
import { StyledField, StyledLabel } from './Checkbox.stuled';
import IconCheckboxChack from 'images/icons/IconCheckboxChack';

const Checkbox = e => {
  const {
    id,
    onChange,
    value,
    field: { name },
  } = e;

  return (
    <StyledLabel onChange={onChange}>
      <StyledField type={e.type} name={e.field.name} value={value} id={id} />

      {Array.isArray(e.form.values[name]) ? (
        <>
          {e.form.values[name].includes(e.value) ? (
            <IconCheckboxChack />
          ) : (
            <IconCheckbox />
          )}
        </>
      ) : typeof e.form.values[name] === 'object' ? (
        <>
          {Object.keys(e.form.values[name]).includes(e.value) ? (
            <IconCheckboxChack />
          ) : (
            <IconCheckbox />
          )}
        </>
      ) : (
        <>
          {!e.form.values[name] && <IconCheckbox />}
          {e.form.values[name] && <IconCheckboxChack />}
        </>
      )}
    </StyledLabel>
  );
};

export default Checkbox;
