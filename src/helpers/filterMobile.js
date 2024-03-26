

export const filterMobile = ( games = [] ) => (
   
    games.map( ( { stores, platforms } ) => (
        ( 
            stores!== null 
            && 
            platforms.forEach(({platform})=> {

                (Object.values(platform).some(element => element === "Android") || Object.values(platform).some(element => element ==="iOS"))
            })
        )

    ))
)