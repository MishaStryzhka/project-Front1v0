import IconCheckboxSmall from 'images/icons/IconCheckboxSmall';
import { StyledField, StyledLabel } from './Checkbox.stuled';
import IconCheckboxSmallChack from 'images/icons/IconCheckboxSmallChack';

const CheckboxSmall = e => {
  return (
    <StyledLabel>
      <StyledField type={e.type} name={e.field.name} />
      {!e.field.value && <IconCheckboxSmall />}
      {e.field.value && <IconCheckboxSmallChack />}
    </StyledLabel>
  );
};

export default CheckboxSmall;
