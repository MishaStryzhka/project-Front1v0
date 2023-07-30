const darktheme = {
  bodyColor: '#FEF9F9',
  primary: '#FFC107', //yellow
  secondary: '#111111', //black
  btnDark: '#54ADFF', //blue-dark
  btnLight: '#CCE4FB', //blue-light
  error: '#F43F5E', //red
  background: '#FDF7F2', //white
  indicator: '#00C3AD', //green
  btnLogOut: '#888', //grey
  gradient: 'linear-gradient(to left, #419ef1 0%, #9bd0ff 100%)', //gradient
};

const lightTheme = {
  bodyColor: '#FEF9F9',
  primary: '#FFC107', //yellow
  secondary: '#111111', //black
  btnDark: '#54ADFF', //blue-dark
  btnLight: '#CCE4FB', //blue-light
  error: '#F43F5E', //red
  background: '#FDF7F2', //white
  indicator: '#00C3AD', //green
  btnLogOut: '#888', //grey
  gradient: 'linear-gradient(to left, #419ef1 0%, #9bd0ff 100%)', //gradient
};

const defaultTheme = {
  boxShadow: '3px 8px 14px 0px #88C6FD30',
  boxShadowHover: '7px 13px 14px 0px #74B1E83D',
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
