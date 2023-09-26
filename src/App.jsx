import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SectionNav from './components/SectionNav/SectionNav'
import SearchBar from './components/SearchBar/SearchBar'
import Powerstats from './pages/Powerstats/Powerstats'
import Biography from './pages/Biography/Biography'
import Connections from './pages/Connections/Connections'
import Appearance from './pages/Appearance/Appearance'

function App() {

  return (
    <>
      <BrowserRouter>
        <section className='d-flex justify-content-center align-items-center'>
          <div className='mainContainer container row m-0 p-0 '>
            <div className='col-12 h-25 py-3 px-5 d-flex justify-content-between align-items-center'>
              <h1>Super 58i</h1>
              <SearchBar/>
            </div>
            <div className='col-4 h-75'></div>
            <div className='col-8 h-75 mx-0 row align-items-center'>
              <SectionNav/>
              <Routes>
                <Route path='/' element={<Powerstats/>}/>
                <Route path='/biography' element={<Biography/>}/>
                <Route path='/appearance' element={<Appearance/>}/>
                <Route path='/connections' element={<Connections/>}/>
              </Routes>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
