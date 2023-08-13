import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Moviecard from './Moviecard'


const MovieType = () => {

    const[movie , setMovie] = useState([])
    
    
const { type } = useParams()
   const API = `https://api.themoviedb.org/3/movie/${type}?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`
   const IMGURL = "https://image.tmdb.org/t/p/w1280"


   useEffect(()=>{
    fetch(API).then( res => res.json() ).then(data => setMovie(data.results))
   },[type])


    return (
    <>
    <section className="types" style={{ marginTop : "3em" }}>
        <div className="wrap">
            <h2>{type}</h2>

          <div className="pop-row">
          {
               movie?.map((movs)=>{
                  return <Moviecard movs={movs} bg={IMGURL}/>
               })}
          </div>
        </div>
    </section>
    </>
  )
}

export default MovieType