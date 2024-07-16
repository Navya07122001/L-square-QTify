// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Lato',
  },
  palette: {
    primary: {
      main: '#34c94b',
      contrastText: '#121212',
    },
    // Add more colors or customize as needed
  },
  // Add other theme options like typography variants, spacing, etc.
});

export default theme;
