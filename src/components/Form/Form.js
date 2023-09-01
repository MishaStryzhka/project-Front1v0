import SecondaryButton from 'components/SecondaryButton/SecondaryButton';
import { BtnBox, FormDescription, StyledForm } from './Form.styled';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';

const Form = ({ onSubmit, isRequiredFields, handlePublish, children }) => {
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
        <SecondaryButton disabled type="button">
          Переглянути картку як користувач
        </SecondaryButton>
        <SecondaryButton type="submit">Зберегти чернетку</SecondaryButton>
        <PrimaryButton type="button" onClick={handlePublish}>
          Опубликувати
        </PrimaryButton>
      </BtnBox>
    </StyledForm>
  );
};

export default Form;
