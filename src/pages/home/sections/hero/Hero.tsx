import { Container, Grid2, styled, Typography } from '@mui/material'
import Avatar from '../../../../assets/images/perfil_quadrado.jpg'
import DownloadIcon from '@mui/icons-material/Download';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",
  }))


  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 4 }}>
              <StyledImg src={Avatar} />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <Typography color='primary' variant='h1' textAlign="center">Pedro Malheiros</Typography>
              <Typography color='primary' variant='h2' textAlign="center">I'm a Web Developer</Typography>
              <Grid2 container display="center" justifyContent="center">
                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <button >
                    <DownloadIcon />
                    Download CV
                  </button>
                </Grid2>
                <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <button>
                    <EmailOutlinedIcon />
                    Contact me
                  </button>
                </Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero
