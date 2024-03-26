import { useSelector } from "react-redux"
import { useGamesStore } from "../hooks/useGamesStore"
import { NothingSearchedView } from "../views/NothingSearchedView"
import { SearchListView } from "../views/SearchListView"



export const RiGSearchPage = () => {
  // const {startSearchingGames} = useGamesStore()
  // startSearchingGames();
  const { gamesSearched, idActiveGame } = useSelector( state => state.games );



  return (
    <>
      {
        (gamesSearched.length > 0  )
            ? <SearchListView games={gamesSearched}/>
            : <NothingSearchedView/>
      }
    </>
  )
}