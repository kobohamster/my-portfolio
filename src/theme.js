import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main:  '#6060B0',
      light: '#7070B0',
      dark:  '#5060A0',
    },
    secondary: {
      main:  '#302030',
      light: '#603040',
      dark:  '#202020',
    },
    background: {
      default: '#FFB0D0',
      paper:   '#F0A0C0',
    },
    text: {
      primary:   '#302030',
      secondary: '#5060A0',
      disabled:  '#9090C0',
    },
    divider: '#D080A0',
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontSize: '2.125rem', fontWeight: 500 },
    h2: { fontSize: '1.5rem', fontWeight: 500 },
    h3: { fontSize: '1.25rem', fontWeight: 500 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#6060B0',
          color: '#FFFFFF',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: '#5060A0',
          },
        },
        outlined: {
          borderColor: '#6060B0',
          color: '#6060B0',
          borderRadius: 0,
          '&:hover': {
            borderColor: '#5060A0',
            color: '#5060A0',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #D080A0',
          borderRadius: 0,
          backgroundColor: '#F0A0C0',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#F0A0C0',
          borderBottom: '1px solid #D080A0',
          boxShadow: '0 4px 24px rgba(208, 128, 160, 0.3)',
        },
      },
    },
  },
})

export default theme
