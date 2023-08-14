import IconCheckbox from 'images/icons/IconCheckbox';
import { StyledField, StyledLabel } from './Checkbox.stuled';
import IconCheckboxChack from 'images/icons/IconCheckboxChack';

const Checkbox = e => {
  return (
    <StyledLabel
      onChange={() => e.form.setFieldValue(e.field.name, e.field.value)}
    >
      <StyledField type={e.type} name={e.field.name} />
      {e.type === 'radio'
        ? (e.field.value !== e.form.values[e.field.name] && <IconCheckbox />) ||
          (e.field.value === e.form.values[e.field.name] && (
            <IconCheckboxChack />
          ))
        : (!e.field.value && <IconCheckbox />) ||
          (e.field.value && <IconCheckboxChack />)}
    </StyledLabel>
  );
};

export default Checkbox;
