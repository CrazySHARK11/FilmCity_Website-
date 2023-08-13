import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Moviebanner from './Moviebanner';
import Moviecard from './Moviecard';

const Moviebody = () => {

 const[movie , setMovie] = useState([])
  
const APIURL = "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const IMGURL = "https://image.tmdb.org/t/p/w1280"

useEffect(()=>{
   fetch(APIURL).then( res => res.json() ).then((data) => setMovie(data.results))
}, [])

  return (<>
    <section className='moviebody'>
       <div className="wrap">
       
    <Carousel 
    autoPlay={false}
    showStatus={false} 
    infiniteLoop={true}
    >
     {
        movie.map((movs)=>{
           return <Moviebanner movie={movs} bg={IMGURL} />
         })
      }
    </Carousel>
       </div>
    </section>

    <section className='Popular'>
      <div className="wrap">
         <h2>POPULAR</h2>
         <div className="pop-row">
            {
               movie.map((movs)=>{
                  return <Moviecard movs={movs} bg={IMGURL}/>
               }).slice(0 , 12 )
            }
         </div>
      </div>
    </section>
      </>
  )
}

export default Moviebody