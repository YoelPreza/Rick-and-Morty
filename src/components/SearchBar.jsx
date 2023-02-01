import React from "react";
import style from "./Buscar.module.css"
import { useState } from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   function handleInputChange(element){
      setCharacter(element.target.value)
     
   }

   return (
      <div>
         <input className={style.Buscar} type='search'
         name="nameInput"
         placeholder="Introduce el id de la tarjeta"
         onChange={handleInputChange}
         value={character} />
         
      <button className={style.botonBuscar} 
      onClick={()=> props.onSearch(character)}>
         Agregar
         </button>
      </div>
   );
}
