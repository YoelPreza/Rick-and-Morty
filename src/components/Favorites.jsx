import { connect } from "react-redux";
import Card from "./Card";
import { useDispatch } from "react-redux/es/exports";
import { filterCards, orderCards } from "../redux/actions";
import style from "./favorites.module.css"

function Favorites(props) {
const dispatch = useDispatch();

function handleOrder(event){
    dispatch(orderCards(event.target.value))
}

function handleFilter(event){
    dispatch(filterCards(event.target.value))
}

    return (
        <div>
<h1 className={style.Favorites}>Your Favorite Cards</h1>
            <div>
                <select className={style.selectorOrden} onChange={handleOrder} >
                <option defaultValue value="all" hidden>Order </option>
                    <option value="Asc" > Ascendente </option>
                    <option value="Descendente">Descendente</option>
                </select>

                <select className={style.selectorGender} onChange={handleFilter} name="Gender" id="">
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                    


                </select>
            </div>
            {props.myFavorites?.map(
                character => (<Card

                    id={character.id}
                    name={character.name}
                    gender={character.gender}
                    species={character.species}
                    image={character.image}
                    origin={character.origin}
                    key={character.id}
                />
                ))}



        </div>



    )

}
const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}
export default connect(mapStateToProps, null)(Favorites);