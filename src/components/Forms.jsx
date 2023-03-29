
import React from "react";
import validation from "./validation.js"
import style from "./Forms.module.css"
import { useNavigate } from "react-router-dom"
import waiting from "../images/waiting_sing_in.gif"
import { Link } from "react-router-dom";

export function Forms(props) {

    // const navigate = useNavigate();
    // // const [access, setAccess] = React.useState(false);
    // const userName = "preza_95@hotmail.com";
    // const password = "Pretzel1";

//    function login(userData) {
//         if (userData.password === password && userData.userName === userName) {
//             setAccess(true);
//             navigate('/home')
//         }
//     }
    // useEffect(() => {
    //     !access && navigate('/');
    // },[access]);


    // const [userData, setUserData] = React.useState({
    //     userName: "",
    //     password: "",
    // })
    
    // const [errors, setErrors] = React.useState({
    //     userName: "",
    //     password: "",
    // })
    // const handleChange = (event) => {
    //     setUserData({ ...userData, [event.target.name]: event.target.value, })
    //     setErrors(validation({ ...userData, [event.target.name]: event.target.value, }))
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     login(userData);
    // }


    return (
    
        <div className={style.contenedorForms}>
            {/* <h1> Type the magical words  </h1> */}

            <img className={style.singin} src={waiting} width="400px" height="230px" alt="waiting" />
            <div className={style.contenth1}>
            <h1 className={style.h1}> Find your favorite characters  </h1>

            </div>

            {/* <form onSubmit={handleSubmit}>

                <label className={style.espacio} htmlFor="userName"> Username  </label>
                <input className={errors.userName && style.warning}
                    name="userName"
                    type="text"
                    value={userData.userName}
                    onChange={handleChange}
                >
                </input>
                <p className={style.danger}>{errors.userName}</p>

                <label className={style.espacio} htmlFor="password">Password  </label>
                <input
                    className={errors.password && style.warning}
                    name="password"
                    type="password"
                    value={userData.password}
                    onChange={handleChange}
                >

                </input>
                <p className={style.danger}>{errors.password}</p>

                <button type="submit"> Login </button>


            </form> */}
<Link to="/home">      
<button className={style.buton}>Search</button>
</Link>
        </div>
    


    )

} 
