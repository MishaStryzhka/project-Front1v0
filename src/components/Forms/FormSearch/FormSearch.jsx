import { IconWrap, StuledInput, Wrap } from './FormSearch.styled';
import { useAuth } from 'hooks';
import { useSearchParams } from 'react-router-dom';
// import IconCross from 'images/icons/IconCross';
import IconSearch from 'images/icons/IconSearch';
import theme from 'theme';

const FormSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const { currentTheme } = useAuth();

  const newSetSearchParams = (key, value) => {
    setSearchParams(pref => {
      const Query = {};
      for (const [key, value] of pref.entries()) {
        Query[key] = value;
      }

      return {
        ...Query,
        [key]: value,
      };
    });
  };
  const handleChange = e => {
    newSetSearchParams('query', e.target.value);
  };

  return (
    <Wrap>
      <StuledInput
        placeholder="Пошук"
        value={query || ''}
        onChange={e => handleChange(e)}
      />
      {query ? (
        <IconWrap onClick={() => newSetSearchParams('query', '')}>
          {/* <IconCross fill={theme[currentTheme].color.btnDark} /> */}
        </IconWrap>
      ) : (
        <IconWrap onClick={() => newSetSearchParams('query', '')}>
          <IconSearch fill={theme[currentTheme].color.btnDark} />
        </IconWrap>
      )}
    </Wrap>
  );
};

export default FormSearch;
