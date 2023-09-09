import SecondaryButton from 'components/SecondaryButton/SecondaryButton';
import {
  BtnBox,
  FormDescription,
  StyledForm,
  StyledPrimaryButton,
} from './Form.styled';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';

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
}) => {
  return (
    <StyledForm>
      <div>
        {isRequiredFields && (
          <FormDescription>
            <span>*</span> - обов’язкові поля
          </FormDescription>
        )}
        {children}
      </div>

      <BtnBox>
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
      </BtnBox>
    </StyledForm>
  );
};

export default Form;
