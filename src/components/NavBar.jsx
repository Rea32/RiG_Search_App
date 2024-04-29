import { SearchOutlined } from "@mui/icons-material"
import { AppBar, Button, Grid, InputAdornment, TextField, Toolbar } from "@mui/material"
import { useForm } from "react-hook-form"
import { useGamesStore } from "../hooks/useGamesStore";
import { useDispatch } from "react-redux";
import { returnInitialState } from "../store/games/gamesSlice";
import { Link, Navigate } from "react-router-dom";
import { useEffect } from "react";

export const NavBar = () => {

  const { register, handleSubmit, reset, formState, formState:{isSubmitSuccessful} } = useForm();
  const { startSearchingGames } = useGamesStore();
  const dispatch = useDispatch();

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ something: "" })
    }
  
  }, [formState, reset])
  

  const onSubmit = ({ title }) => {
    
    dispatch(returnInitialState () )
    startSearchingGames(title);

  }

  const handleClick = () => {
    
    dispatch(returnInitialState () );
    return <Navigate to="/search"/>
  }

  return (
    <AppBar color='secondary'>
      <Toolbar>
       <Grid container direction='row' alignItems='center' justifyContent='start'>
        {/* //LOGO */}
        <Grid item  sx={{mr:10, p:1}}>
          <Button onClick={ handleClick }>
            <Link to="/search"><img src="src\images\brandname.png"/></Link>
          </Button>
        </Grid>
        {/* //BARRA DE BUSQUEDA */}
        <Grid item sx={{ml:"10%"}} >
            <form 
              onSubmit={handleSubmit(onSubmit)}
            >
              <TextField 
                type="text"
                size="small"
                {...register("title", {required:true, minLength:2})}
                placeholder="Introduce el título del juego"
                InputProps={{
                    startAdornment: <InputAdornment position="start"><SearchOutlined/></InputAdornment>,
                }}
                sx={{backgroundColor:'white', width:"120%"}}
              />

            </form>
          </Grid> 
        </Grid>
      </Toolbar>
    </AppBar>
  )
}
