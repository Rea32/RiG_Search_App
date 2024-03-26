import {  List, ListSubheader } from "@mui/material"

import { GameListItems } from "./GameListItems";
import { useSelector } from "react-redux";


export const GameList = ( { games } ) => {
  const { titleSearched } = useSelector( state => state.games)
  return (
    <List sx={{backgroundColor: 'error.main', borderStyle:'double',  minWidth:"60%", my:5, boxShadow:5}}>
      <ListSubheader key="subheader"><span>Resultados de la busqueda: "{ titleSearched }"</span> </ListSubheader>
      {
        games.map( ( game ) => {
          // console.log({ name, platforms, released }) 
          if ( game.platforms !== null && game.released !== null ){
            return (
              <GameListItems key={game.id} {...game}/>
              
            )
          }
        })
      }    
    </List>
  )
}
