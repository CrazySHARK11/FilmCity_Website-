import React, { useEffect } from 'react'
import { useState } from 'react';
import { RiStarFill , BsEyeFill , BiGlobe } from 'react-icons/all'
import { useParams } from 'react-router-dom';
import Moviecard from './Moviecard';

const Movie = () => {

    const [movie , setMovie] = useState("")
    const [recoms , setRecoms] = useState([])
    const [actors , setActors] = useState([])
    const {id} = useParams()

    const recom = `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=04c35731a5ee918f014970082a0088b1&language=en-US&page=1`
    const APIURL = `https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`;
    const IMGURL = `https://image.tmdb.org/t/p/w1280/`
    const Actors = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=04c35731a5ee918f014970082a0088b1`;


     useEffect(()=>{
        fetch(APIURL).then( res => res.json()).then( data => setMovie(data) )
     }, [id])

     useEffect(()=>{
       fetch(recom).then(res => res.json()).then(data => setRecoms(data.results))
     },[id])

     useEffect(()=>{
       fetch(Actors).then( res => res.json()).then(data => setActors(data.cast)) 
     },[id])

  return (
    <>
    <div className="moviebanner" style={{  backgroundImage : `linear-gradient( to top , #000 , transparent) , url(${IMGURL}${movie?.backdrop_path})` }}>
      <div className="wrap">
      <div className="movie_row">
      <img src={`${IMGURL}${movie?.poster_path}`} width="250px" />
       <div className="detail_card">

       <h2>{movie?.title}</h2>
      <div className="ratings_row">
      <div className="ratings details_ratings"><RiStarFill />{movie?.vote_average}</div>
      <div className="ratings details_ratings"><BsEyeFill />{movie?.popularity}</div>
      <div className="ratings details_ratings"><BiGlobe />{movie?.spoken_languages?.map( lang => lang.english_name ).join(" , ")}</div>
      </div>
       <p className="tagline">" {movie?.tagline} ,</p>

      <ul className='genere'>
      {
        movie.genres?.map((genre)=>{
          return <li>{genre?.name}</li>
        })
       }
      </ul>

       <p>{movie?.overview}</p>  

      </div>   
    </div>    
      </div>
    </div>

    <section className='credits'>
     <div className="wrap">
     <h2>CREDITS</h2>
  <div className="credit_row">
  {
    actors.map((actor)=>{
      return <div className="actor-col">
         <img src={`${IMGURL}${actor?.profile_path}`} width="250px" />
         <h3>{actor?.name}  </h3>
         <p>{actor?.character}{actor.character.length > 28 ? <br /> : ""}</p>
      </div>
    }).slice(0 , 5)
   }  


    </div>   

<div className="companies">
<h2>COMPANIES</h2>
   
   <div className="comp-row">
     {
      movie.production_companies?.map((c)=>{
        return <div className="company_card">
          <img src={`${IMGURL}${c?.logo_path}`} style={{ backgroundColor : "#e1e1e1" }} width="130px" alt="" />
             <h3>{c?.name}</h3>
        </div>
      })
     }
   </div>
</div>

  <div className="recommendation" style={{ marginTop:"2em" }}>
    <h2>RECOMMENDATION</h2>
    <div className="pop-row">
        {
          recoms?.map((r)=>{
            return <Moviecard movs={r} bg={IMGURL} />
          })
        }
    </div>
  </div>

     </div>
    </section>



    </>
  )
}

export default Movie