import React from "react";
import style from "./Buscar.module.css"
import { useState } from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   function handleSubmit(){
      props.onSearch(character);
      setCharacter("")
   }
   function handleInputChange(element){
      setCharacter(element.target.value)
   }

   return (
      <div>
         <input  className={style.Buscar} type='search'
         name="nameInput"
         placeholder="Type a number from 1 to 826"
         onChange={handleInputChange}
         value={character} />
         
      <button className={style.botonBuscar} 
      onClick={handleSubmit}>
         Agregar
         </button>
      </div>
   );
}
