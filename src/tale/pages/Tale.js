import style from "../static/css/Tale.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { CHANGE_INFO, CHANGE_PWD, CHANGE_PROFILE } from "../../modules/memberModules/memberModule";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import React from "react";
import defaultImg from "../static/images/profile-img.png";
import { callGetMemberProfileAPI } from '../../apis/member/MemberAPICalls'
import { useLocation } from "react-router-dom";
import { callGetTaleAPI } from "../../apis/tale/TaleAPICalls"; 

function Tale(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const profile = useSelector(state => state.profileMemberReducer); 
    const taleList = useSelector(state => state.taleReducer); 

    const location = useLocation();


    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        const memberId = location.state;
        console.log(memberId)
        dispatch(callGetMemberProfileAPI(memberId));
        dispatch(callGetTaleAPI(memberId)); 
    },[])

    console.log(profile)
    console.log(taleList)

    const handleImgError = (e) => {
        e.target.src = defaultImg;
    }

    return (
        <div className={style.changeForm}>

            <div className={style.ChangeSection}>
                <div className={style.profile}>
                    <img className={style.profileImg} src={profile.profile.imgUrl} onError={handleImgError}></img> 

                    <div className={style.profileInfo}>
                        <div className={style.profileName}> {profile.memberName} <span> 선생님 </span> </div>  
                        <div className={style.profileTale}> 제작한 동화책 수 : <span> {profile.taleCount} </span> </div>  
                        <div className={style.profileIntro}> 소개글: </div>
                        <textarea value={profile.profile.intro} name="intro"></textarea><br/> 
                    </div>
                    
                </div>
    
            </div>  
                <div className={style.lineDiv}> <img className={style.lineImg} src={require("../static/images/tale-list.png")} /></div>
                
            {/* 동화 목록 보여주기 */}
            <div className={style.taleList}>
                {taleList == null ? null : taleList.map((tale, index)=>(
                <div>
                    <div> <img className={style.taleImg} src={tale.taleInfo.thumbNail}/> </div>
                    <div className={style.taleTitle}> {tale.taleList.title}</div>
                    <button> <img className={style.reportImg} src={require("../static/images/report.png")} /> </button>
                </div>
                ))
                }  
            
                </div>
            </div>
    )
}

export default Tale;