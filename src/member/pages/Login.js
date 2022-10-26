import style from "../static/css/Join.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";


function Login(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const member = ""; 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    const onChangeHandler = () => {

    }

    return (
        <div className={style.loginDiv}>
            <Link to="/"> <img className={style.loginLogo} src={require('../static/images/logo.png')}></img></Link><br/>
            <img className={style.loginP} src={require('../static/images/login-ph.png')}></img>
            <div className={style.inputBox}>
                    <input type="text" name="memberId" id="memberId" value={member.memberId} onChange={ onChangeHandler } placeholder="아이디" required />
            </div>
            <div className={style.inputBox}>
                <input type="password" name="memberPwd" id="memberPwd" value={member.memberPwd} onChange={ onChangeHandler } placeholder="비밀번호" required />
            </div>
            <button className={style.submitLogin}><img src={require("../static/images/login-btn.png")} /> </button>
            <div className={style.btnGroup}>
                <button className={style.phBtn}><img src={require("../static/images/idSearch.png")} /> </button>
                <button className={style.phBtn}><img src={require("../static/images/pwdSearch.png")} /> </button>
                <button className={style.phBtn}><img src={require("../static/images/join-ph.png")} /> </button>
            </div>
        </div>
    )
}

export default Login;