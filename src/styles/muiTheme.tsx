import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles';


/**
 * All these values are copied from the colors defined at styles/_variables.scss and the index.scss in general
 * - primary: $color-primary
 * - secondary: $color-secondary (shaded dark 20%)
 * - fontFamily: at index.scss
 */
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3C6E71'
    },
    secondary: {
      main: '#BD9B35'
    }
  },
  typography: {
    fontFamily: 'Quattrocento'
  }
});


export default muiTheme;
