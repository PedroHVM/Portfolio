import {Grid2, styled } from '@mui/material'
import Avatar from '../../../../assets/images/perfil_quadrado.jpg'

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",

  }))

  const StyledImg = styled("img")(() => ({
    width: "500px",
    borderRadius: "50%",
  }))


  return (
    <>
      <StyledHero>

        <Grid2 container spacing={2}>
          <Grid2 size={4}>
          <StyledImg src={Avatar}/>
          </Grid2>
          <Grid2 size={8}>
          a
          </Grid2>
          <Grid2 size={12}>
            b
          </Grid2>
        </Grid2>
      </StyledHero>
    </>
  )
}

export default Hero
