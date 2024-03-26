import { Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Pagination } from "@mui/material";
import { useGamesStore } from "../hooks/useGamesStore"
import { useSelector } from "react-redux"
import '../styles/platform.css'

import { GameList } from "../components/GameList"
import { Navigate, redirect } from "react-router-dom";
import { useEffect } from "react";
import { FilterBar } from "../components/FilterBar";

export const SearchListView = ({games}) => {

  const { startChangePage } = useGamesStore();
  const { titleSearched, pages, actualPage } = useSelector(state => state.games);

  const handleChange = (event, page)=>{
    startChangePage(titleSearched, page);
  }



  return (
    <Grid container direction="column" justifyContent="start" alignItems="center" sx={{  minHeight:'100vh', maxWidth:'100vw', backgroundColor: 'primary.main' }}>
      {/* <FilterBar/> */}
      <GameList games={games}/>

      <Pagination count={pages} page={actualPage} color="primary" onChange={handleChange}/>
    </Grid>
  )
}
