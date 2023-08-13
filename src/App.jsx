import React, { Suspense } from 'react'
import { lazy } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Movie from './Components/Moviebody/Movie'
import Moviebody from './Components/Moviebody/Moviebody'
import MovieType from './Components/Moviebody/MovieType'
import './style.scss'

const App = () => {

  return (
    <> 

    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Moviebody/>} />
        <Route path='/:id' element={<Movie />} />
        <Route path='/movies/:type' element={<MovieType />} />
        <Route path='*' element={<h1>ERROR</h1>} />
      </Routes>
    </Router>
    </>
  )
}

export default App