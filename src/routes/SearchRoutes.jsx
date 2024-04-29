
import { Navigate, Route, Routes } from 'react-router-dom';
import { RiGSearchPage } from '../pages/RiGSearchPage';
import { GameCardPage } from '../pages/GameCardPage';
import { IntroduceDBPage } from '../pages/IntroduceDBPage';


export const SearchRoutes = () => {
  return (
    <Routes>
        <Route path='/search' element={<RiGSearchPage/>}></Route>
        {/* <Route path='/search/:searchedTitle' element={<RiGSearchPage/>}></Route> */}
        <Route path='/game/:gameId' element={<GameCardPage/>}></Route>
        <Route path='/introduce' element={<IntroduceDBPage/>}></Route>

        <Route path="/" element={<Navigate to='search'/>}></Route>
        <Route path="/*" element={<Navigate to='search'/>}></Route>
    </Routes>
  )
}
