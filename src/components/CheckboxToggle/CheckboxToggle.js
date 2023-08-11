import { StyledField, StyledLabel } from '../Checkbox/Checkbox.stuled';
import { Toggle, ToggleWrap } from './CheckboxToggle.styled';

const CheckboxToggle = e => {
  return (
    <StyledLabel>
      <StyledField type={e.type} name={e.field.name} />
      <ToggleWrap value={e.field.value}>
        <Toggle value={e.field.value} />
      </ToggleWrap>
    </StyledLabel>
  );
};

export default CheckboxToggle;
