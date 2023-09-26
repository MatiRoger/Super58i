import './App.css'
import { BrowserRouter, Routes, Route, useSubmit } from 'react-router-dom'
import { useState , useEffect } from 'react'
import axios from 'axios'
import SectionNav from './components/SectionNav/SectionNav'
import SearchBar from './components/SearchBar/SearchBar'
import Powerstats from './pages/Powerstats/Powerstats'
import Biography from './pages/Biography/Biography'
import Connections from './pages/Connections/Connections'
import Appearance from './pages/Appearance/Appearance'

function App() {
  const urlBase ='https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/70.json'
  const [heroData, setHeroData ] = useState({});
  const [apiUrl, setapiUrl] = useState(urlBase);
  const changeHero = ()=>{
    let randomId = Math.floor(Math.random()*729+1);
    let newUrl = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomId}.json`
    setapiUrl(newUrl);
  }

  useEffect(()=>{
    const fetchHeroData = async () => {
      const {data} = await axios.get(apiUrl);
      setHeroData(data);
    }
    try {
      fetchHeroData();
    } catch (error) {
      console.log(error);
    }
  },[apiUrl]);

  return (
    <>
      <BrowserRouter>
        <section className='d-flex justify-content-center align-items-center'>
          <div className='mainContainer container row m-0 p-0 '>
            <div className='col-12 h-25 py-3 px-5 d-flex justify-content-between align-items-center'>
              <h1>Super 58i</h1>
              <SearchBar cambioUrl={changeHero}/>
            </div>
            <div className='heroImg col-4 h-75'style={
              { backgroundImage: `url(${heroData.images && heroData.images.md})`}
              } ></div>
            <div className='col-8 h-75 mx-0 row align-items-center'>
              <SectionNav/>
              <Routes>
                <Route path='/' element={
                <Powerstats 
                  Intelligence={heroData && heroData.powerstats ? heroData.powerstats.intelligence: '-'}
                  Strength={heroData && heroData.powerstats ?heroData.powerstats.strength:'-'}
                  Speed={heroData && heroData.powerstats ?heroData.powerstats.speed:'-'}
                  Durability={heroData && heroData.powerstats ?heroData.powerstats.durability:'-'}
                  Power={heroData && heroData.powerstats ?heroData.powerstats.power:'-'}
                  Combat={heroData && heroData.powerstats ?heroData.powerstats.combat:'-'}
                  />
                }/>
                <Route path='/biography' element={
                  <Biography biographyData={heroData.biography}/>}/>  
                <Route path='/appearance' element={
                <Appearance
                  Gender={heroData&&heroData.appearance?heroData.appearance.gender:'-'}
                  Race={heroData&&heroData.appearance?heroData.appearance.race:'-'}
                  Height={heroData&&heroData.appearance?heroData.appearance.height:'-'}
                  Weight = {heroData&&heroData.appearance?heroData.appearance.weight:'-'}
                  EyeColor={heroData&&heroData.appearance?heroData.appearance.eyeColor : '-'}
                  HairColor={heroData&&heroData.appearance?heroData.appearance.hairColor:'-'}
                />}/>
              </Routes>
            </div>
          </div>
        </section>
      </BrowserRouter>
    </>
  )
}

export default App
