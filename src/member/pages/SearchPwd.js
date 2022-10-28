import style from "../static/css/Search.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';

import { SEARCH_INFO } from "../../modules/memberModules/memberModule"; 
import { useEffect, useState } from "react";

function SearchPwd(){

    const dispatch = useDispatch();
 
    const header = useSelector(state => state.headerReducer);
    const member = useSelector(state => state.searchReducer); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    const onChangeHandler = (e) => {
        console.log(member)
        dispatch({
            type: SEARCH_INFO,
            payload: {
              name: e.target.name,
              value: e.target.value
            }
          });
    }

    // console.log(userInfo)
    return (
        <div className={style.searchDiv}>
            <div className={style.selectOption}>
                <Link to="/idsearch"><button ><img src={require("../static/images/id-btn.png")}/> </button></Link>
                <button ><img src={require("../static/images/active-pwd-btn.png")}/> </button>
            </div>
            <div className={style.phrase}> 비밀번호 찾기를 위한 본인확인을 진행해 주세요 </div>
            <img className={style.commonImg} src={require("../static/images/mail.png")}/>
            <div className={style.inputBox}>
                <input type="text" name="memberId" id="memberId" value={member[1].memberId} onChange={ onChangeHandler } placeholder="아이디" required />
            </div>
            <div className={style.inputBox}>
                <div className={style.emailBox}>
                    <input type="text" name="email" id="email" value={member.email} onChange={ onChangeHandler } placeholder="이메일" required />
                    <button className={style.authBtn}> <img src={require("../static/images/auth-btn.png")}></img></button>
                </div>
            </div>
            <div className={style.inputBox}>
                <input type="text" name="mainAuth" id="mainAuth" value={member.mainAuth} onChange={ onChangeHandler } placeholder="인증번호" required/>
                <br />
            </div>
            <Link to="/pwdresult"> <button className={style.submitBtn}><img src={require("../static/images/pwd-search-btn.png")} /> </button></Link>
        </div>
    )
}

export default SearchPwd;