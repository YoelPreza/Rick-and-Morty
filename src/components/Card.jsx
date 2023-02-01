import style from "./Card.module.css"
import { Link } from "react-router-dom"
import { addCharacter, deleteCharacter } from "../redux/actions"
import { connect } from "react-redux";
import {useEffect, useState} from "react"



function Card(props) {

   const [isFav, SetIsFav] = useState(false);
   
   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            SetIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);
   
   function handleFavorite(){
      if (isFav) { 
         SetIsFav(false)
            props.deleteCharacter(props.id)
      } else {
         SetIsFav(true)
         const character = {id: props.id , species:props.species, name:props.name, image:props.image , gender:props.gender, origin:props.origin}
         props.addCharacter(character)
      }
   }

   return (
      <div className={style.contenedor}>

         <div className={style.botonesCards}>
         { isFav ? (<button className={style.botonFavyCerrar} onClick={handleFavorite}>❤️</button>) : (
               <button onClick={handleFavorite}>🤍</button>)}

            <button className={style.botonFavyCerrar}
               onClick={() => {
                  props.onClose(props.id);
               }}>X</button>

         </div>
         <img className={style.imagenes} src={props.image} alt="" />

         <Link to={`/detail/${props.id}`}>
            <h2 className={style.nombre}>{props.name}</h2>
         </Link>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </div>

);
}
const mapStateToProps =(state)=>{
   return{
      myFavorites: state.myFavorites
   }
}
const mapDispatchToProps=(dispatch)=> {
   return {
      addCharacter: (character) => { dispatch(addCharacter(character)) },
      deleteCharacter: (id) => { dispatch(deleteCharacter(id)) }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);