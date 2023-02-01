
import React from "react";
import { useState } from "react";
import { useParams} from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Card.module.css"



export const CardDetail=()=> {
   let {detailId} = useParams();
   const navigate = useNavigate();

  function backToHome(){
    navigate("/home")
  }

  const [character, setCharacter] = useState("")
  useEffect(() => {
   fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
       .then((response) => response.json())
       .then((char) => {
          if (char.name) {
             setCharacter(char);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       })
       .catch((err) => {
          window.alert('No hay personajes con ese ID');
       });
    return setCharacter({});
 }, [detailId]);

 return ( 
    <div className={style.cardDetail}>
            <img className={style.imagenes} src={character.image} alt="" />
        <div className={style.textoDetail}>
            <h2>Name:   {character.name}</h2>
            <h2>Status: {character.status}</h2>
            <h2>Specie: {character.species}</h2>
            <h2>Gender: {character.gender}</h2>
        <button className={style.botonDetail} onClick={backToHome}>Volver</button>
        </div>
    </div>
    
 )
}