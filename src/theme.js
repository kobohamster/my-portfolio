import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#2C5AA0',
      light: '#4A7CB8',
      dark: '#1A3F7A',
    },
    secondary: {
      main: '#4A7C3F',
      light: '#6AA85A',
      dark: '#2A5A28',
    },
    error: {
      main: '#E8352A',
    },
    background: {
      default: '#E8E4DC',
      paper: '#D4EAF5',
    },
    text: {
      primary: '#1C1C1C',
      secondary: '#2C5AA0',
      disabled: '#8C8C8C',
    },
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
          backgroundColor: '#4A7C3F',
          color: '#FFFFFF',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: '#6AA85A',
          },
        },
        outlined: {
          borderColor: '#2C5AA0',
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #1A3F7A',
          borderRadius: 0,
          backgroundColor: '#D4EAF5',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#2C5AA0',
        },
      },
    },
  },
})

export default theme
