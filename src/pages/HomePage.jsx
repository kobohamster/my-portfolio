import { Box, Container, Typography, Button, Card, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'

const WindowCard = ({ title, children }) => (
  <Card sx={{ mb: 4 }}>
    <Box sx={{ bgcolor: 'primary.main', px: 2, py: 0.5 }}>
      <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>
        {title}
      </Typography>
    </Box>
    <CardContent sx={{ p: 3 }}>
      {children}
    </CardContent>
  </Card>
)

const HomePage = () => {
  return (
    <Container maxWidth='lg' sx={{ py: 4 }}>

      {/* Hero Section */}
      <Box
        sx={{
          textAlign: 'center',
          py: 10,
          mb: 4,
          bgcolor: 'background.paper',
          border: '2px solid',
          borderColor: 'primary.dark',
        }}
      >
        <Box sx={{ bgcolor: 'primary.main', px: 2, py: 0.5, mb: 3, display: 'inline-block' }}>
          <Typography sx={{ color: '#FFFFFF', fontWeight: 700, fontSize: '0.875rem' }}>
            HERO.exe
          </Typography>
        </Box>
        <Typography variant='h1' sx={{ color: 'primary.main', mb: 2, fontWeight: 700 }}>
          Hero Section
        </Typography>
        <Typography variant='body1' color='text.secondary'>
          여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다.
        </Typography>
      </Box>

      {/* About Me Section */}
      <WindowCard title='About Me'>
        <Typography variant='body1' color='text.primary' sx={{ mb: 2 }}>
          여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다.
        </Typography>
        <Button variant='contained' component={Link} to='/about'>
          더 알아보기
        </Button>
      </WindowCard>

      {/* Skill Tree Section */}
      <WindowCard title='Skill Tree'>
        <Typography variant='body1' color='text.primary'>
          여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다.
        </Typography>
      </WindowCard>

      {/* Projects Section */}
      <WindowCard title='Projects'>
        <Typography variant='body1' color='text.primary' sx={{ mb: 2 }}>
          여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다.
        </Typography>
        <Button variant='contained' component={Link} to='/projects'>
          더 보기
        </Button>
      </WindowCard>

      {/* Contact Section */}
      <WindowCard title='Contact'>
        <Typography variant='body1' color='text.primary'>
          여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다.
        </Typography>
      </WindowCard>

    </Container>
  )
}

export default HomePage
