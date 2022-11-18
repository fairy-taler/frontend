import style from "../static/css/Tale.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { CHANGE_INFO, CHANGE_PWD, CHANGE_PROFILE } from "../../modules/memberModules/memberModule";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { callGetMemberAPI, callGetProfileAPI} from '../../apis/member/MemberAPICalls'
import React from "react";
import defaultImg from "../static/images/profile-img.png";

function Tale(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.changeReducer); 
    const header = useSelector(state => state.headerReducer);
    const originProfile = useSelector(state => state.profileReducer); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberAPI());
        dispatch(callGetProfileAPI());
    },[])
    console.log(originProfile);

    /* 이미지 업로드  */

    const fileInput = React.useRef(null);

    const handleButtonClick = e => {
        fileInput.current.click();
    };


    const handleImgError = (e) => {
        e.target.src = defaultImg;
    }


    console.log(member)
    return (
        <div className={style.changeForm}>

            <div className={style.ChangeSection}>
                <div className={style.profile}>
                    <img className={style.profileImg} src={member[4].imgUrl} onError={handleImgError}></img> 

                    <div className={style.profileInfo}>
                        <div className={style.profileName}> {originProfile.memberName} <span> 선생님 </span> </div>  
                        <div className={style.profileTale}> 제작한 동화책 수 : <span> {originProfile.taleCount} </span> </div>  
                        <div className={style.profileIntro}> 소개글: </div>
                        <textarea value={member[4].intro} name="intro"></textarea><br/> 
                    </div>
                    
                </div>
    
            </div>  
                <div className={style.lineDiv}> <img className={style.lineImg} src={require("../static/images/tale-list.png")} /></div>
               
        </div>
    )
}

export default Tale;