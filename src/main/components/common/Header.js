import Navbar from "./Navbar"
import style from "../../static/css/header.module.css"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../../modules/mainModules/headerModule';
         
function Header(){
  
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    console.log(header)
    const onClickHandler = (e) => {
        dispatch({ type: ON_CLICK, payload : !header.clicked});
    }
    
    return (
        <div>
            { header.clicked ? <Navbar/> : null}
            <div className={style.headerDiv}>
                <button className={style.btn} onClick={ onClickHandler }>  <img className={style.headerImg} src={!header.clicked? header.color=="black"? require(`../../static/images/menu-btn-black.png`):require(`../../static/images/menu-btn.png`):require(`../../static/images/close-btn.png`)}/> </button>
                <img className={style.headerImg}  src={header.color=="black"? require(`../../static/images/login-btn-black.png`):require(`../../static/images/login-btn.png`)}/>
            </div>
        </div>
    )
}

export default Header;