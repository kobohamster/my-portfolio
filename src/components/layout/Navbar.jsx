import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material'
import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Me', path: '/about' },
  { label: 'Projects', path: '/projects' },
]

const Navbar = () => {
  const location = useLocation()

  return (
    <AppBar position='sticky'>
      <Container maxWidth='lg'>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 0 } }}>
          <Typography
            variant='h6'
            component={Link}
            to='/'
            sx={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }}
          >
            My Portfolio
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {navItems.map(item => (
              <Button
                key={item.path}
                component={Link}
                to={item.path}
                sx={{
                  color: '#FFFFFF',
                  borderRadius: 0,
                  borderBottom: location.pathname === item.path
                    ? '3px solid #C5BFEA'
                    : '3px solid transparent',
                  '&:hover': {
                    bgcolor: 'rgba(107, 92, 197, 0.15)',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
