import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import ProductCard from '../components/productCard/ProductCard'

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
    <div className='w-screen h-auto'>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 p-4 place-items-center'>
            { 
                products.map((product)=>{
                   return <Fragment>
                        <ProductCard product={product}/>
                   </Fragment>
                })
            }
           </div>
    </div>
  )
}

export default Dashboard