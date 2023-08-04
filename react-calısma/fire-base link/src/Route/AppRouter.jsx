import React from 'react'
import FireBaseProvider from '../context/FireBaseContext'
import Navs from '../components/Navs'
import MovieProvider from '../context/MovieContext'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PrivateRouter from '../pages/PrivateRouter'
import People from '../pages/People'
import PersonDetail from '../pages/PersonDetail'
import Footer from '../components/Footer'
import MovieDetail from '../pages/MovieDetail'

const AppRouter = () => {
  return (
    <FireBaseProvider>
        <Navs />
        <MovieProvider>
          <Routes>
            <Route index element={<Home />} />


            <Route path="moviedetail" element={<PrivateRouter />}>
              <Route path=":id" element={<MovieDetail />} />
            </Route>
            
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />

            <Route path="people" element={<PrivateRouter />}>
              <Route path="" element={<People />} />
              <Route path=":id" element={<PersonDetail />} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </MovieProvider>

        <Footer />
      </FireBaseProvider>
  )
}

export default AppRouter