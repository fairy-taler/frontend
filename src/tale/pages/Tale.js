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
import { NavLink } from "react-router-dom";
import { decodeJwt } from '../../utils/tokenUtils';
function Tale(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const profile = useSelector(state => state.profileMemberReducer); 
    const taleList = useSelector(state => state.taleReducer); 
    
    const token = decodeJwt(window.localStorage.getItem('accessToken'));
    const location = useLocation();
    const myTaleTF = false; 

    console.log(token.sub)
    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        const memberId = location.state.value;
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

        <div className={style.ProfileSection2}>

        <div className={style.profile2}>
            <div className={style.profileImgBookFrame}>  

            <img className={style.profileImgFrame2} src={profile.profile.imgUrl} onError={handleImgError}></img> 
            </div>
                <div>
                <div className={style.profileInfo2}>
                <div className={style.profileGroup}>
                    <div className={style.profileName2}> {profile.memberName} <span> 선생님 </span> </div>  
                    <div className={style.profileTale2}> 제작한 동화책: <span> {profile.taleCount} </span> </div>  
                </div>
                <div className={style.profileIntroText2}><div className={style.startLeft}>소개글: </div>
                 {profile.profile.intro == null ?  <div> "" </div>
                  : <div > {profile.profile.intro}</div>
                  }
                </div>
                </div>
                <br/>
            </div>
        </div>

        </div>
    
            <div className={style.taleListDiv}> 
                <div className={style.lineDiv}> <img className={style.lineImg} src={require("../static/images/tale-list.png")} /></div>
                
            {/* 동화 목록 보여주기 */}
            <div className={style.taleList}>
                {taleList == null ? null : taleList.map((tale, index)=>(
                <div>
                    <div> <img className={style.taleImg} src={tale.taleInfo.thumbNail} onError={handleImgError} /> </div>
                    <div className={style.taleTitle}> {tale.taleList.title ==  "" ? " 제목없음" : tale.taleList.title}</div>
                    {token.sub == location.state.value ? "" :
                        <NavLink to={`/insertReport?targetCode=${profile?.profile?.memberCode}&targetTaleCode=${tale.taleInfo.id}`}><button> <img className={style.reportImg} src={require("../static/images/report.png")} /> </button></NavLink>
                    }
                    </div>
                ))
                }  
            
                </div>
                </div>
            </div>
    )
}

export default Tale;