import style from "../static/css/Search.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";

function Join(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    // const userInfo = useSelector(state => state.idSearchReducer); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    // console.log(userInfo)
    return (
        <div className={style.searchDiv}>
            <div className={style.selectOption}>
                <button ><img src={require("../static/images/active-id-btn.png")}/> </button>
                <button ><img src={require("../static/images/pwd-btn.png")}/> </button>
                
            </div>
        </div>
    )
}

export default Join;