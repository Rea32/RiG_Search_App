import { Box, Card, CardContent, CardMedia, Divider, Typography } from "@mui/material"
import "../styles/gameCard.css"
import { Navigate, useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { GameCardView } from "../views/GameCardView";


export const GameCardPage = () => {

  const { gameId } = useParams();
  const { idActiveGame, activeGame } = useSelector( state => state.games );
  return (
    <>
   {
    
    (idActiveGame !== null)
      ? <GameCardView gameInfo= {activeGame} />
      : <Navigate to="/search"/>
   }
   </>
  )
}
