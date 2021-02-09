import { createMuiTheme } from '@material-ui/core/styles';


/**
 * These values are copied from the colors defined at styles/_variables.scss
 * - primary: $color-primary
 * - secondary: $color-secondary (shaded dark 20%)
 */
const muiTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3C6E71'
    },
    secondary: {
      main: '#BD9B35'
    }
  }
});


export default muiTheme;
