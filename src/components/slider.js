import React, { useEffect, useState } from 'react'

export default function Slider({banner}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);


  useEffect(() => {
    fetch("https://admin.onlinefrsh.com/api/banners")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
          console.log(result)
        },
    
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  return (
   <>
   <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
     
  {items.map((curElem,index) => {  


    return (
      <>
<div class={`carousel-item ${index==0?'active':''}`}  data-interval="10000">
      <img src={curElem.image} class="d-block w-100" height="300px" alt="..." />
    </div>
   
    </>
    )
   })}
    
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
   </>
  )
}
