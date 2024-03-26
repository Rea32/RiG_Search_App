
import { VideogameAssetOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const NothingSearchedView = () => {
    
    
  return (
    <Grid 
        container 
        justifyContent='center'
        alignItems='center'
        sx={{ minHeight:'100vh', backgroundColor: 'primary.main'}}
        direction='column'
    >
        <Grid item xs={12}>
            <VideogameAssetOutlined sx={{ fontSize:120, color:"error.main"}}/>
        </Grid>
        <Grid item xs={12}>
            <Typography sx={{fontSize:25, color:"white"}}>
                Introduce el juego en la barra de busqueda
            </Typography>
        </Grid>

    </Grid>
  )
}