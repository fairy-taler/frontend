import style from "../static/css/Join.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, OFF_LOGO, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import InputInfo from "./InputInfo"
import SelectRole from "./SelectRole"

function JoinResult(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const member = useSelector(state => state.joinReducer); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch({ type: OFF_LOGO});
    },[])

    return (
        <div className={style.joinDiv}>
            <Link to="/"> <img className={style.joinLogo} src={require('../static/images/logo.png')}></img></Link><br/>
            <img className={style.joinResult} src={require('../static/images/join-result.png')}></img><br/>
            <button><img className={style.joinResult} src={require('../static/images/download.png')}></img> </button> 
        </div>
    )
}

export default JoinResult;