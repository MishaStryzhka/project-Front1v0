const lightTheme = {
  main: '#396DFF', // dark green
  secondaryMain: '#F9E0F3', // CTA

  primary: '#FFFFFF', // White
  secondary: '#000', // Black

  btn: '#9D9D9D', // Dark gray
  btnDark: '#C3E2E7', // Light blue
  btnLight: '#E5E8EF', // Light grayish blue

  error: '#AF0101', //

  background: '#EEF1F7', //
  card: '#DDD', //
  placeholder: '#adadad',

  indicator: '#C3E2E7CC', //
  gradient: 'linear-gradient(to left, #419ef1 0%, #9bd0ff 100%)', //gradient

  // ++++++++
  text: '#00185C',
  background1: '#f1f5ff',
  secondaryColor: '#DEFFD9',
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
