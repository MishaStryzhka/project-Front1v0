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
  className,
}) => {
  return (
    <>
      <StyledForm id={id} className={className}>
        {isRequiredFields && (
          <FormDescription>
            <span>*</span>обов’язкові поля
          </FormDescription>
        )}
        {children}
      </StyledForm>
    </>
  );
};

export default Form;
