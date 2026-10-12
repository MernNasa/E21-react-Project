import axios from 'axios'
import React, { createContext, useEffect, useState } from 'react'


export const SerarchContext=createContext()
const SearchContextAPI = ({children}) => {
    const[allproducts,setAllProducts]=useState([])
    const [products,setProducts]=useState([])
    const [searchItem,setSearchItem]=useState("")

    const fetchAllProducts=async () => {
        const { data } = await axios.get("https://dummyjson.com/products");
        setAllProducts(data)
      setProducts(data.products)  
    }
    
    useEffect(()=>{
        fetchAllProducts()
    },[])

    useEffect(()=>{
            if(searchItem===""){
                setProducts(allproducts.products)
            }
            else{
                const filterProducts=allproducts.products.filter((item)=>item.title.toLowerCase().startsWith(searchItem.toLowerCase()))
                console.log(filterProducts)
                setProducts(filterProducts)
            }
    },[searchItem])


    return <SerarchContext.Provider value={{products,setSearchItem}}>
        {
            children
        }
    </SerarchContext.Provider>
}

export default SearchContextAPI