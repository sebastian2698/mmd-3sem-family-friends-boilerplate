
"use client"
import { createContext, useContext, useState } from "react"

const Starcontext = createContext();
export function Provider({children}){
  const[favorite,setFavorite] = useState({});

return(
    <Starcontext.Provider value={{favorite,setFavorite}}>
        {children}
   
   
    </Starcontext.Provider>
)

}
export function providecontext(){
    return useContext(Starcontext);
}