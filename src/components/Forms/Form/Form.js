import { StyledForm } from './Form.styled';

const Form = ({
  onSubmit,
  isRequiredFields,
  handlePublish,
  next,
  children,
  save,
  saveDraft,
  viewCard,
  sendRequest,
  id,
}) => {
  return <StyledForm id={id}>{children}</StyledForm>;
};

export default Form;
