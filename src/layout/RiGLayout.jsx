import { Box, CircularProgress } from "@mui/material"
import { NavBar } from "../components/NavBar"
import { useSelector } from "react-redux"

export const RiGLayout = ( { children } ) => {
const { gamesLoading } = useSelector( state => state.games)

  return (
    <Box
    display="flex" 
    flexDirection="column"
    sx={{backgroundColor:'primary.main', minHeight:'100vh'}}
    >
     <NavBar/>
      <hr />

     {

      (gamesLoading) 
        ? <Box component='main' display="flex" alignItems="center" justifyContent="center" my={10} sx={{ mt:"20%", backgroundColor:'primary.main', minHeight:'100vh', color:"white"}}> 
            <h1 style={{marginRight:"25px"}} >Cargando</h1><CircularProgress color="inherit" />
          </Box>

        : <Box component='main' display="flex"alignItems="center" justifyContent="center" my={12} sx={{backgroundColor:'primary.main', minHeight:'100vh'}}> { children } </Box>

            
      
     }
      
    </Box>
  
  )
}