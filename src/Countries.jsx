

import React, { useEffect, useState } from 'react';
import "./Countries.css" ;

const Countries = () => {
const[countries , setcountries] = useState([]);

useEffect(()=>{

    const fetchCountries = async () => {
        try{
         const response = await fetch("https://xcountries-backend.azurewebsites.net/all") ;
         const jasondata = await response.json();
         setcountries(jasondata);
        }
        catch(error){
          console.error("Error fetching data: ", error);
        }
    }
   fetchCountries();
} ,[])

  return (
    <div className='container'>

      {countries.map((item)=>(
       <div key={item.abbr}  className='card'>
        <img src = {item.flag} alt={`Flage Of ${item.name}`} className='image'/>
        <h2>{item.name}</h2>
       </div>
      ))}
    </div>
  )
}

export default Countries
