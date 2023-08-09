const lightTheme = {
  bodyColor: '',

  main: '#04827A',

  primary: '#FFFFFF', //
  // secondary: , //

  btnDark: '#C3E2E7', //
  btnLight: '#E5E8EF', //
  btnLogOut: '', //

  error: 'red', //

  background: '#EEF1F7', //
  cardBG: '', //

  indicator: '', //
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

  fontFamily: 'K2D',
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
