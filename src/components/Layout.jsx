import React , {useEffect, useState} from 'react'
import Header from './Header'
import axios from 'axios'
import { Routes, Route } from 'react-router';
import ls from 'localstorage-slim'

import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Footer from './Footer';

function Layout() {
  const [data, setData] = useState([])

useEffect(() =>{
  async function FetchData(){
    if(ls.get('github_data')== null){
      let response = await axios.get('https://api.github.com/users/Dylanotina/repos', {headers : {'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}` }})
      ls.set('github_data',response.data, {ttl : 3600})
      setData(response.data)
    }else{
      setData(ls.get('github_data'))
    }
  }
  FetchData()
},[])

  return (
    <>
    <header>
    <Header/>
    </header>
    <main>
    <Routes>
        <Route path='/' element={data && <Home data={data}/>}/>
        <Route path='/projects' element={data && <Projects data={data}/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </main>
    <footer>
        <Footer/>
    </footer>
  
    </>
  )
}

export default Layout