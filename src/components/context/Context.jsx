import { createContext, useContext,useState } from "react";


const Appcontext=createContext(null)

export const UseAppContext=()=>{   //creating a custom hook
const context=useContext(Appcontext)
if(context===undefined){
    throw new Error('AppCotext must be within  appContextProvider')}
return context}

 const AppContextProvider=({children})=>{
            const [favourites,setFavourites]=useState([])

            const addTofavourites=(book)=>{
                const oldFavourites=[...favourites]
                const newFavourites=oldFavourites.concat(book)
                setFavourites(newFavourites)
            }

            const removeFromFavourites=(id)=>{
                const oldFavourites=[...favourites]
                const newFavourites=oldFavourites.filter((book)=>
                  id!==book.id)
                  setFavourites(newFavourites)
                
            }
    return(
    <Appcontext.Provider value={{favourites,addTofavourites,removeFromFavourites}}>
        {children}
    </Appcontext.Provider>
)
}
export default AppContextProvider