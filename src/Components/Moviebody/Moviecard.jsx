import React from 'react'
import { Link } from 'react-router-dom'

const Moviecard = ({movs, bg}) => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Link onClick={handleClick} to={`/${movs.id}`} className="card_con"  >
        <div className="card" style={{ backgroundImage: ` url(${bg}${movs?.poster_path})` }} >
        <p>{movs.overview.slice(0 , 90)} ...</p>
        </div>
        <h3>{movs.title.slice(0 , 17)} {movs.title.length > 17 ? "..." : ""} </h3>
    </Link>
  )
}

export default Moviecard