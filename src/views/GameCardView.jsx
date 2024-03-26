import { Box, Card, CardContent, CardMedia, Grid, Divider, Rating, Typography, Container } from "@mui/material"
import "../styles/gameCard.css"
import { transformDate } from "../helpers/transformDate";
import { renamePlatformSlugs } from "../helpers/renamePlatformSlugs"
import 'animate.css'
// import { useParams } from "react-router-dom"


export const GameCardView = ( { gameInfo } ) => {

  // const { gameId } = useParams();
  const { name, background_image, rating, genres, released, developers, publishers, platforms, tags } = gameInfo;

  return (
    <Card sx={{ display: 'flex', justifyContent:"space-s", alignItems:"center", width:"80vw", minHeight:"90vh", backgroundColor:"error.main", border: "2px solid black" }}>
      <CardMedia
        component="img"
        sx={{ width: "50%"}}
        image={ background_image }
        alt={` Image of ${name} `}
        className="animate__animated animate__slideInLeft"
      />

    
        <CardContent sx={{ alignItems:'start'}} className="animate__animated animate__slideInRight">

          {/* TITULO */}
          <Typography component="div" variant="h3" className="dataTypography" mb={1}>
           { name }
          </Typography> 
          {/* VALORACION */}
          <Typography component="div" sx={{display:"flex", alignItems:"center"}} className="estrellas">
            <Rating name="half-rating-read" precision={0.25} value={rating} readOnly /><span>({ rating })</span>
          </Typography>

          <Divider/>
          
          {/* GENERO */}
          <Typography component="div" variant="h6" className="dataTypography" mt={1}>
          Genero: 
          <span className="game-card-info">
            {
              genres.map( ( { name , id }, index ) => (
                (index == (genres.length - 1))
                  ? <span key={ id }> { name } </span>
                  : <span key={ id }> { name }, </span>
              ) )
            }
          </span>
          </Typography>
          {/* LANZAMIENTO */}
          <div style={{display:"flex", alignItems:"center"}}>
            <Typography variant="h6" className="dataTypography" >
              Lanzamiento: 
            </Typography>
            <Typography variant="body1" className="dataTypography" sx={{ml:"2%"}}>{ transformDate(released)  }</Typography> 
          </div>
          {/* DESARROLLADORA */}
          <div style={{display:"flex", alignItems:"center"}}>
            <Typography component="div" variant="h6" className="dataTypography" >
              Desarrolladora:
            </Typography> 
            <Typography variant="body1" className="dataTypography" sx={{ml:"2%"}}>
              {
                developers.map( ( { name , id }, index ) => (
                  (index == (developers.length - 1))
                    ? <span key={ id }> { name } </span>
                    : <span key={ id }> { name }, </span>
                ) )
              }
            </Typography>
          </div>
            {/* EDITORA */}
          <div style={{display:"flex", alignItems:"center"}}>
            <Typography component="div" variant="h6" className="dataTypography" >
              Editora: 
            </Typography>
            <Typography variant="body1" className="dataTypography" sx={{ml:"2%"}}> 
              {
                publishers.map( ({ name , id }, index) => (
                  (index == (publishers.length - 1))
                  ? <span key={ id }> { name } </span>
                  : <span key={ id }> { name }, </span>
                ) )
              }
            </Typography>
          </div>
            {/* PLATAFORMAS */}
          <Typography component="div" variant="h6" className="dataTypography"mb={3}>
            
            Plataformas:
            <Grid container spacing={7}>
              {
                platforms.map( ({ platform }, index) => (
                  <Grid  item xs={1} >
                    <span key={ platform.id } className={platform.slug} style={{fontSize:"small"}} > { renamePlatformSlugs(platform) } </span>
                  </Grid>
                ) )
              }
              </Grid>
          </Typography>
          {/* TAGS */}
          <Typography component="div" variant="h6" className="dataTypography">
            Etiquetas: 
              <Container>
                {
                  tags.map( ({ id, name }, index) =>(
                    (index == (tags.length - 1))
                      ?<span key={ id }> { name.charAt(0).toUpperCase()+ name.slice(1) } </span>
                      :<span key={ id }> {  name.charAt(0).toUpperCase()+ name.slice(1) }, </span>
                    ) )
                }
              </Container>
          </Typography>
        </CardContent>


    </Card>
 
  )
}
