import { Container, Box, Typography } from '@mui/material'

const AboutPage = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>
      <Box
        sx={{
          textAlign: 'center',
          py: 10,
          bgcolor: 'background.paper',
          border: '2px solid',
          borderColor: 'primary.dark',
        }}
      >
        <Box sx={{ bgcolor: 'primary.main', px: 2, py: 0.5, mb: 3, display: 'inline-block' }}>
          <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>
            ABOUT.exe
          </Typography>
        </Box>
        <Typography variant='h2' color='primary.main' sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          About Me 페이지가 개발될 공간입니다. 상세한 자기소개가 들어갈 예정입니다.
        </Typography>
      </Box>
    </Container>
  )
}

export default AboutPage
