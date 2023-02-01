
import './App.css'
import nombre from "./images/nombre.png"
import { Routes, Route } from "react-router-dom"
import { useState } from 'react'
import Nav from "./components/Nav.jsx"
import About from "./components/About.jsx"
import {CardDetail} from "./components/CardDetail.jsx"
import Cards from "./components/Cards.jsx"
import { Forms } from './components/Forms'
import {useLocation} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import { useEffect } from 'react'
import React from 'react'
import Favorites from "./components/Favorites"


function App() {

  const [characters, setCharacters] = useState([]);

  const location =useLocation();

//-----------------------Seguridad--------
  const navigate = useNavigate()
  const [access, setAccess] = React.useState(false);
  const username = "preza_95@hotmail.com";
  const password = "Pretzel1";
  
  function login(userData) {
    if (userData.password === password && userData.username === username) {
        setAccess(true);
        navigate('/home')
    }
}

useEffect(() => {
    !access && navigate('/');
}, [access]);




  const onSearch = function (character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {

          for ( let elemento of characters){
            if (data.id === elemento.id) return window.alert('Ese personaje ya fue agregado')
            }

          setCharacters((character) => [...character, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (Id) => {
   setCharacters(characters.filter(char => char.id !== Id))
  }
 
  return (

    <div className="App" style={{ padding: "0px" }}>
      <div>
      
{/* // Nota: de esta manera se hace la condicion para que no aparezca la nav cuando esta el login  */}
      {location.pathname === "/" ? <Forms/> : null}
      {location.pathname === "/" ? null : <Nav onSearch={onSearch}/>}

      {location.pathname === "/home" ? <img src={nombre} border-top= "100px" width="400px" height="90px"  alt='' /> : null}
      
        

        <Routes>

          <Route  exact path="/home" element={<Cards
            characters={characters}
            onClose={onClose}
            />}/>

            <Route exact path="/about" element={<About />}/>

            <Route exact path="/detail/:detailId" element={<CardDetail />}/>
            <Route exact path="/favorites" element={<Favorites />} />

        </Routes>

      </div>


    </div>
  )
}

export default App;
