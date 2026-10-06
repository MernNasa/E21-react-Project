import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
    const[products,setProducts]=useState([])
    const fetchProducts=async () => {
        const {data}=await axios.get("https://dummyjson.com/products")
        setProducts(data.products)
    }
    useEffect(()=>{
        fetchProducts()
    },[])
  return (
    <div className='w-screen h-auto bg-red-300'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 p-4 place-items-center'>
            { 
                products.map((product)=>{
                   return <div className='w-[300px] h-[250px] bg-amber-300'>
                    
                   </div>
                })
            }
           </div>
    </div>
  )
}

export default Dashboard