import React, { createContext, useEffect, useReducer, useState } from 'react'
import { fakeFetch } from '../Data/Data';

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [menuItem, setMenuItem] = useState([]);
    const [menu, setMenu] = useState([]);
    const [searchValue, setSearchValue] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const getData= async ()=>{
        try {
            const response = await fakeFetch("https://example.com/api/videos");
            
            setMenuItem(response.data.menu);
            setMenu(response.data.menu);
            setLoading(false);

        } catch (err) {
            setError(err);
            setLoading(false);
        }
    }


    const HandleSort = (event) =>{
        setMenuItem(()=> [...menuItem].sort((a,b)=> event.target.value === "LowToHigh" ?a.price - b.price : b.price - a.price));
    }
    const HandleCart = (event) =>{
        setMenuItem(()=> [...menuItem].sort((a,b)=> event.target.value === "LowToHigh" ?a.price - b.price : b.price - a.price));
    }

    const HandleCheckVeg = (event) =>{
        const isChecked = event.target.checked;
        if(isChecked){
            setMenuItem(()=> menuItem.filter(({is_vegetarian})=> is_vegetarian))
        }
        else{
            setMenuItem(menu);
        }
    }

    const HandleCheckSpicy = (event) =>{
        const isChecked = event.target.checked;
        if(isChecked){
            setMenuItem(()=> menuItem.filter(({is_spicy})=> is_spicy))

        }
        else{
            setMenuItem(menu);
        }

    }
    useEffect(()=>{
        getData()
    },[])
  return (
    <DataContext.Provider value={{menuItem,loading, error,HandleSearch,searchValue,HandleSort,HandleCheckSpicy,HandleCheckVeg,HandleCart,RemoveFromCart}}>
      {children}
    </DataContext.Provider>
  )
}

