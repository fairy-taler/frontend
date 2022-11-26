import Navbar from "./Navbar"
import style from "../../static/css/Header.module.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../../modules/mainModules/headerModule';
import { NavLink } from "react-router-dom";
         
function Header(){
  
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const header = useSelector(state => state.headerReducer);
    const isLogin = window.localStorage.getItem('accessToken');

    console.log("header", header)
    const onClickHandler = (e) => {
        dispatch({ type: ON_CLICK, payload : !header.clicked});
    }

    const onClickLogout = (e) => {
        window.localStorage.setItem('accessToken', null);
        console.log("logout");
        navigate("/", { replace: true });
    }
    console.log(isLogin);
    
    return (
        <div className = {style.headerBox} style={header.color=="white" || !header.hasLogo?{position:"fixed"}:null}>
            { header.clicked ? <Navbar/> : null}
            <div className={style.headerDiv}>
                <button className={style.btn} onClick={ onClickHandler }>  <img className={style.headerImgMenu} src={!header.clicked? header.color=="black"? require(`../../static/images/menu-btn-black.png`):require(`../../static/images/menu-btn.png`):require(`../../static/images/close-btn.png`)}/></button>
                {/* 가운데 미니 로고 */}
                {header.color=="black" && header.hasLogo? <NavLink to="/"><img className={style.logoImg}  src="logo.png"/></NavLink> : null}
                { isLogin == 'null' || isLogin == undefined || isLogin == null ? <Link to ="/login"> <img className={style.headerImg}  src={header.color=="black"? require(`../../static/images/login-btn-black.png`):require(`../../static/images/login-btn.png`)}/></Link>:
                <button onClick={ onClickLogout }> <img className={style.headerImg}  src={header.color=="black"? require(`../../static/images/logout-black.png`):require(`../../static/images/logout-white.png`)}/></button>}
            </div>
        </div>
    )
}

export default Header;