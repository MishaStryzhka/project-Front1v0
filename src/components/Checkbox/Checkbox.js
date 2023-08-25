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
      {!e.form.values[name].includes(e.value) && <IconCheckbox />}
      {e.form.values[name].includes(e.value) && <IconCheckboxChack />}
    </StyledLabel>
  );
};

export default Checkbox;
