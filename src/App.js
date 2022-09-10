import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import { Nav } from './components/Nav';
import AboutUs from './pages/AboutUs'
import { ContactUs } from './pages/ContactUs';
import Ourwork from './pages/Ourwork';
import {Route,Routes, useLocation} from 'react-router-dom'
import  MovieDetails  from './pages/MovieDetails';
import {AnimatePresence} from 'framer-motion'


function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
    <AnimatePresence exitBeforeEnter>
    <Routes location={location} key={location.pathname}>

<Route path='/' element={<AboutUs/>}>

</Route>
<Route path='/work/:id' element={<MovieDetails/>}>

</Route>

<Route path='/contact' element={<ContactUs/>}>

</Route>

<Route path='/work' exact element={<Ourwork/>}>
</Route>

</Routes>
    </AnimatePresence>
    
    </div>
  );
}

export default App;
