import style from "../static/css/Search.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';

import { SEARCH_INFO } from "../../modules/memberModules/memberModule"; 
import { useEffect, useState } from "react";

function SearchResultId(){

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
            <img className={style.openMailImg} src={require("../static/images/open-mail.png")}/>
            <div className={style.phrase}>  회원님의 아이디는 <span className={style.colorOrg}> abcde </span> 입니다.</div>

        </div>
    )
}

export default SearchResultId;