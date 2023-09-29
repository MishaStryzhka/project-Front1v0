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
    <StyledForm id={id}>
      {isRequiredFields && (
        <FormDescription>
          <span>*</span> - обов’язкові поля
        </FormDescription>
      )}
      {children}

      {/* <BtnBox>
        {viewCard && (
          <SecondaryButton disabled type="button">
            Переглянути картку як користувач
          </SecondaryButton>
        )}
        {saveDraft && (
          <SecondaryButton type="submit">Зберегти чернетку</SecondaryButton>
        )}
        {(handlePublish || next) && (
          <PrimaryButton type="button" onClick={handlePublish || next}>
            {(handlePublish && 'Опублікувати') ||
              (next && 'Далі') ||
              (save && 'Зберегти')}
          </PrimaryButton>
        )}
        {save && (
          <PrimaryButton type="submit" onClick={save}>
            Зберегти
          </PrimaryButton>
        )}
        {sendRequest && (
          <StyledPrimaryButton type="submit" onClick={sendRequest}>
            Відправити заявку
          </StyledPrimaryButton>
        )}
      </BtnBox> */}
    </StyledForm>
  );
};

export default Form;
