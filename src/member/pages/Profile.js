import style from "../../tale/static/css/Tale.module.css"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { callGetMemberProfileAPI } from '../../apis/member/MemberAPICalls'
import React from "react";
import defaultImg from "../static/images/profile-img.png";
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";

function Profile(memberId){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const profile = useSelector(state => state.profileMemberReducer); 
    console.log(profile, profile?.profile?.memberCode);
    const [close, setClose] = useState(false);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberProfileAPI(memberId.value));
    },[])

    const handleImgError = (e) => {
        e.target.src = defaultImg;
    }

    const onClickClose = () => {
        setClose(!close)
        console.log(close)
    }

    console.log(memberId)
    return (
        <div className={style.profileComponent} >
            { close == true ? null : 
            
            
            <div className={style.ProfileSection3}>

            <div className={style.profileXBtn}> <button className={style.profileXBtn} onClick={onClickClose}>X </button></div>
            <div className={style.divGroup}>
            <div className={style.profileImgBookFrame3}>  

            <img className={style.profileImgFrame3} src={profile.profile.imgUrl} onError={handleImgError}></img> 
            </div>
                <div>
                <div className={style.profileInfo3}>
                <div className={style.profileGroup3}>
                    <div className={style.profileName3}> {profile.memberName} <span> 선생님 </span> </div>  
                    <div className={style.profileTale3}> 제작한 동화책: <span> {profile.taleCount} </span> </div>  
                </div>
                <div className={style.profileIntroText3}><div className={style.startLeft3}>소개글: </div>
                 {profile.profile.intro == null ?  <div> "" </div>
                  : <div className={style.padding5} > {profile.profile.intro}</div>
                  }
                  
                </div>
                <div className={style.profileBtnGroup3}>
                        <Link to="/tale" state={memberId}><img className={style.profileBtn2} src={require("../static/images/view-tale-btn.png")}></img></Link>
                        <NavLink to={`/insertReport?targetCode=${profile?.profile?.memberCode}`}><img className={style.profileBtn2} src={require("../static/images/like-btn.png")}></img></NavLink>
                        <NavLink to={`/insertReport?targetCode=${profile?.profile?.memberCode}`}><img className={style.profileBtn2} src={require("../static/images/tale-report-btn.png")}></img></NavLink>
                        </div>
                </div>
                </div>
                </div>
                    
                </div>
              
            }
        </div>
    )
}

export default Profile;