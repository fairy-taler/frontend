import style from "../static/css/Join.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, OFF_LOGO, ON_CLICK
} from '../../modules/mainModules/headerModule';
import {LOGIN_ADMIN, LOGIN_TEACHER} from '../../modules/memberModules/loginModule';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Login(){
    const dispatch = useDispatch();
    const member = ""; 
    
    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch({ type: OFF_LOGO});
    },[])

    const onChangeHandler = () => {
    }
    

    
    // 로그인 버튼 클릭시 로그인 아이디가 'admin'일 때 로그인리덕스의 role을 admin으로 변경 ,아닌 경우 role을 teacher로 변경
    const navigate = useNavigate();
    const onClickLoginbutton = () =>{
        const id = document.getElementById("memberId");
        id.value == "admin"? dispatch({ type: LOGIN_ADMIN}) : 
                             dispatch({ type: LOGIN_TEACHER});
        navigate(`/`);
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
            <button className={style.submitLogin}><img src={require("../static/images/login-btn.png")}  onClick={onClickLoginbutton} /> </button>
            <div className={style.btnGroup}>
                <button className={style.phBtn}><img src={require("../static/images/idSearch.png")} /> </button>
                <button className={style.phBtn}><img src={require("../static/images/pwdSearch.png")} /> </button>
                <button className={style.phBtn}><img src={require("../static/images/join-ph.png")} /> </button>
            </div>
        </div>
    )
}

export default Login;