import Navbar from "./Navbar"
import style from "../../static/css/header.module.css"
import { useState } from "react"

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
                <button className={style.btn} onClick={ onClickHandler }>  <img src={!navbar?require(`../../static/images/menu-btn.png`): require(`../../static/images/close-btn.png`)}/> </button>
                <img src={require('../../static/images/login-btn.png')}/>
            </div>
        </div>
        

    )
}

export default Header;