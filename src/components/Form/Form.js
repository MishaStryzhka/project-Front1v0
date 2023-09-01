import SecondaryButton from 'components/SecondaryButton/SecondaryButton';
import { BtnBox, FormDescription, StyledForm } from './Form.styled';
import PrimaryButton from 'components/PrimaryButton/PrimaryButton';

const Form = ({
  onSubmit,
  isRequiredFields,
  handlePublish,
  next,
  children,
  save,
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
        <SecondaryButton disabled type="button">
          Переглянути картку як користувач
        </SecondaryButton>
        <SecondaryButton type="submit">Зберегти чернетку</SecondaryButton>
        {(handlePublish || next) && (
          <PrimaryButton type="button" onClick={handlePublish || next}>
            {(handlePublish && 'Опубликувати') ||
              (next && 'Далі') ||
              (save && 'Зберегти')}
          </PrimaryButton>
        )}
        {save && (
          <PrimaryButton type="submit" onClick={save}>
            Зберегти
          </PrimaryButton>
        )}
      </BtnBox>
    </StyledForm>
  );
};

export default Form;
