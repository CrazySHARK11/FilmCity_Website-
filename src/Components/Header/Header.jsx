import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
 
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
window.addEventListener('scroll',function handleScroll() {
  if (window.scrollY >= 10) {
    setHeaderClass('bottom-class');
  } else {
    setHeaderClass('');
  }
}) },[])

  return (
    <header className={headerClass} >
        <div className="wrap">
            <nav> 
                <Link to='/' className='logo'> Film<span>city</span> </Link>
             <div className="menu">
              <Link to='/movies/popular'> POPULAR </Link>
              <Link to='/movies/top_rated'> TOP RATED </Link>
              <Link to='/movies/upcoming'> UPCOMING </Link>
             </div>

           </nav>
        </div>
    </header>
  )
}

export default Header