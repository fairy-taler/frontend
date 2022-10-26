import style from "../static/css/Search.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';

import { SEARCH_INFO } from "../../modules/memberModules/memberModule"; 
import { useEffect, useState } from "react";

function SearchId(){

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
                <button ><img src={require("../static/images/active-id-btn.png")}/> </button>
                <button ><img src={require("../static/images/pwd-btn.png")}/> </button>
            </div>
            <div className={style.phrase}> 아이디 찾기를 위한 본인확인을 진행해 주세요 </div>
            <img className={style.commonImg} src={require("../static/images/mail.png")}/>
            <div className={style.inputBox}>
                <input type="text" name="memberName" id="memberName" value={member[1].memberName} onChange={ onChangeHandler } placeholder="이름" required />
            </div>
            <div className={style.inputBox}>
                <input type="text" name="email" id="email" value={member[1].email} onChange={ onChangeHandler } placeholder="이메일" required />
                <br />
            </div>
            <button className={style.submitBtn}><img src={require("../static/images/id-search-btn.png")} /> </button>
        </div>
    )
}

export default SearchId;