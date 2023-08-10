import IconCheckbox from 'images/icons/IconCheckbox';
import { StyledField, StyledLabel } from './Checkbox.stuled';
import IconCheckboxChack from 'images/icons/IconCheckboxChack';

const Checkbox = e => {
  return (
    <StyledLabel>
      <StyledField type={e.type} name={e.field.name} />
      {!e.field.value && <IconCheckbox />}
      {e.field.value && <IconCheckboxChack />}
    </StyledLabel>
  );
};

export default Checkbox;
