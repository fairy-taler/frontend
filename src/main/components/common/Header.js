import Navbar from "./Navbar"
import style from "../../static/css/Header.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header(){

    const [navbar, setNavbar] = useState(false);    

    const onClickHandler = (e) => {
        setNavbar(prevStatus => prevStatus ? false : true); 
        console.log(navbar);
    }

    return (
        <div>
            { navbar ? <Navbar/> : null}
            <div className={style.headerDiv}>
                <button className={style.btn} onClick={ onClickHandler }>  <img className={style.headerImgMenu} src={!navbar?require(`../../static/images/menu-btn.png`): require(`../../static/images/close-btn.png`)}/> </button>
                <Link to="/"><img className={style.headerImg}  src={require('../../static/images/login-btn.png')}/></Link>
            </div>
        </div>
        

    )
}

export default Header;