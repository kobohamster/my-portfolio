import { Container, Box, Typography } from '@mui/material'

const ProjectsPage = () => {
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
            PROJECTS.exe
          </Typography>
        </Box>
        <Typography variant='h2' color='primary.main' sx={{ mb: 2 }}>
          Projects
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          Projects 페이지가 개발될 공간입니다. 포트폴리오 작품들이 들어갈 예정입니다.
        </Typography>
      </Box>
    </Container>
  )
}

export default ProjectsPage
