import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const Favorites = () => {

    const products=useSelector((state)=>state);
    const [displayMusic, setDisplayMusic] = useState([]);


    useEffect(() => {
      setDisplayMusic(products.allProducts.products);
    }, [])
    
  return (
   <>
   {
    displayMusic.map((item,index)=>(
        <div key={index} style={{border:"2px solid red"}}>
            
        </div>
    ))
   }



   
   </>
  )
}

export default Favorites