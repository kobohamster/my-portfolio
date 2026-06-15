import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main:  '#4A46AA',
      light: '#6B5CC5',
      dark:  '#1E1B6B',
    },
    secondary: {
      main:  '#EDE8F8',
      light: '#FFFFFF',
      dark:  '#C5BFEA',
    },
    error: {
      main: '#CF6679',
    },
    background: {
      default: '#13114A',
      paper:   '#1E1B6B',
    },
    text: {
      primary:  '#FFFFFF',
      secondary: '#9B93D9',
      disabled:  '#5A529A',
    },
    divider: '#3D38A0',
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
          backgroundColor: '#6B5CC5',
          color: '#FFFFFF',
          borderRadius: 0,
          '&:hover': {
            backgroundColor: '#4A46AA',
          },
        },
        outlined: {
          borderColor: '#6B5CC5',
          color: '#6B5CC5',
          borderRadius: 0,
          '&:hover': {
            borderColor: '#9B93D9',
            color: '#9B93D9',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: '2px solid #3D38A0',
          borderRadius: 0,
          backgroundColor: '#1E1B6B',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1E1B6B',
          borderBottom: '1px solid #3D38A0',
          boxShadow: '0 4px 24px rgba(30, 27, 107, 0.5)',
        },
      },
    },
  },
})

export default theme
