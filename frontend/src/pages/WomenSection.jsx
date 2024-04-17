import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import Button from '../Components/button';
const WomenSection = () => {
  const [clothes_data,setClothesData] = useState([]);
  const [currentPage,setCurrentPage] = useState(10);

useEffect(()=>{
  axios.get("https://dummyjson.com/products")
  .then((response)=>{
    setClothesData(response.data.products)
  })
},[])
const length = clothes_data.length;

  return (
    <div>
      <h1 className='pt-[9vh] text-4xl font-bold text-center uppercase mb-24'>Women's Clothing</h1>
      <div className='flex flex-wrap justify-center gap-10'>
      {
        clothes_data.map((item,index)=>(
          <div key={index} className={`${index<currentPage? "block": "hidden"}`}>
            <Card props={item} />
          </div>
        ))
      }
      </div>
      <div className='flex items-center justify-center py-24'>
      <Button onClick={()=>{
         if(currentPage<length){
          setCurrentPage(currentPage + 10) 
        }
      }} />
      </div>
    </div>
  )
}

export default WomenSection