const lightTheme = {
  bodyColor: '',

  main: '#04827A',
  secondaryMain: '#F5BC20',

  primary: '#FFFFFF', //
  secondary: '#000', //

  btn: '#9D9D9D', //
  btnDark: '#C3E2E7', //
  btnLight: '#E5E8EF', //

  error: 'red', //

  background: '#EEF1F7', //
  card: '#DDD', //
  placeholder: '#adadad',

  indicator: '#C3E2E7CC', //
  gradient: 'linear-gradient(to left, #419ef1 0%, #9bd0ff 100%)', //gradient
};

const darktheme = {
  bodyColor: '',
  primary: '', //

  secondary: '', //

  btnDark: '', //
  btnLight: '', //
  btnLogOut: '', //

  error: '', //

  background: '', //
  cardBG: '', //

  indicator: '', //
  gradient: 'linear-gradient(to left, #419ef1 0%, #9bd0ff 100%)', //gradient
};

const defaultTheme = {
  boxShadow: '3px 8px 14px 0px #88C6FD30',
  boxShadowHover: '7px 13px 14px 0px #74B1E83D',

  fontFamily: 'Rubik',
};

const theme = {
  dark: {
    color: darktheme,
    ...defaultTheme,
  },
  light: {
    color: lightTheme,
    ...defaultTheme,
  },
};

export default theme;
