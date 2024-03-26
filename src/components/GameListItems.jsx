import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { Link } from "react-router-dom"
import { renamePlatformSlugs } from "../helpers/renamePlatformSlugs"
import { useDispatch } from "react-redux";
import { setIdActiveGame } from "../store/games/gamesSlice";
import { useGamesStore } from "../hooks/useGamesStore";

export const GameListItems = ({id, name, platforms, released}) => {

    const { startObtainGameDetails } = useGamesStore();
    const dispatch = useDispatch();

    const onGameClick = () =>{
        dispatch (setIdActiveGame( id ));
        startObtainGameDetails( id );
        
    }

  return (
    <Link to={`/game/${id}`} style={{textDecoration:"none", color:"black"}}>
    <ListItemButton key={id} sx={{justifyContent:'start', backgroundColor: 'secondary.main', my:0.25}} onClick={onGameClick}>
    {/* Titulo */}
      <ListItemText 
          primary={ name }           
          className="title"
          sx={{mr:5}}
      />
    {/* Plataformas */}
      {
        platforms.map(({platform}) => (
          <ListItemIcon xs={4} key={platform.id} className="platforms" sx={{ height:25, pr:1}} >
            <div className={platform.slug}><h6 className="platform">{ renamePlatformSlugs( platform ) }</h6></div>
            {/* <img src="src\images\Xbox-Logo.wine.svg" /> */}
          </ListItemIcon>
        ))
      }
    {/* Año */}
      <ListItemText
        primary= {released.substring(0,4)}
        sx={{display:'flex', justifyContent:'end', ml:2}}
        className="year"
      />
     
    </ListItemButton>
    </Link>
  )
}
