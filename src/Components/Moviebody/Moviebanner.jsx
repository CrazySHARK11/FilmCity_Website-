import React from 'react'
import { RiStarFill } from 'react-icons/all'

const Moviebanner = ({movie , bg }) => {
  return (
    <div className='moviebanner' style={{ backgroundImage : ` linear-gradient( to top , #000 , transparent ) , url(${bg}${movie.backdrop_path})` }} >
        <div className="ban-row"> 
             <span className="ratings"> <RiStarFill /> {movie.vote_average}</span>
            <h2>{movie.title.slice(0 , 40)} {movie.title.length > 40 ? "..." : "" }   </h2>
            <span className="date"> RELEASE DATE : {movie.release_date}</span>
             <p>{movie.overview.slice(0 , 200)} ... </p>    
        </div>
    </div>
  )
}

export default Moviebanner