import { FormDescription, StyledForm } from './Form.styled';

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
  return (
    <>
      {isRequiredFields && (
        <FormDescription>
          <span>*</span>обов’язкові поля
        </FormDescription>
      )}
      <StyledForm id={id}>{children}</StyledForm>
    </>
  );
};

export default Form;
