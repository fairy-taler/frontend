import style from "../static/css/Search.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';

import { CHANGE_PWD } from "../../modules/memberModules/memberModule"; 
import { useEffect, useState } from "react";

function SearchResultPwd(){

    const dispatch = useDispatch();
 
    const header = useSelector(state => state.headerReducer);
    const member = useSelector(state => state.changeReducer); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    const onChangeHandler = (e) => {
        console.log(member)
        dispatch({
            type: CHANGE_PWD,
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
            <img className={style.openMailImgPwd} src={require("../static/images/open-mail.png")}/>
            <div className={style.phrase}>  새로운 비밀번호를 입력해주세요 </div>
            <div className={style.inputBox}>
                <input type="password" name="memberPwd" id="memberPwd" value={member[1].memberPwd} onChange={ onChangeHandler } placeholder="새로운 비밀번호" required />
            </div>
            <div className={style.inputBox}>
                <input type="password" name="confirmPwd" id="confirmPwd" value={member[1].confirmPwd} onChange={ onChangeHandler } placeholder="비밀번호 확인" required />
            </div>
            <button className={style.submitBtn}><img src={require("../static/images/change-btn.png")} /> </button>
        </div>
    )
}

export default SearchResultPwd;