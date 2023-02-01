import SearchBar from "./SearchBar.jsx"
import style from "./nav.module.css"
import {Link} from "react-router-dom"



function Nav(props){
    
    return (

         <div className={style.nav}>
            <Link to={"/about"}><button className={style.botonesNav}>About</button> </Link>
            <Link to={"/favorites"}><button className={style.botonesNav}>Favorites ❤️ </button> </Link>
            <Link to={"/home"}><button className={style.botonesNav}>Home</button> </Link>

            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav;