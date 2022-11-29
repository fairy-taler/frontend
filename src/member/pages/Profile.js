import style from "../static/css/Mypage.module.css";
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
            
            <div className={style.ProfileSection2}>

                <div className={style.profileXBtn}> <button className={style.profileXBtn} onClick={onClickClose}>X </button></div>
                <div className={style.profile2}>
                    <div className={style.profileImgBookFrame}>  

                    <img className={style.profileImgFrame2} src={profile.profile.imgUrl} onError={handleImgError}></img> 
                    </div>
                        <div>
                        <div className={style.profileInfo2}>
                            
                        <div className={style.profileName2}> {profile.memberName} <span> 선생님 </span> </div>  
                        <div className={style.profileTale2}> 제작한 동화책 수 : <span> {profile.taleCount} </span> </div>  
                        <div className={style.profileIntro2}> 소개글: </div>
                        <div className={style.profileIntroText2}> {profile.profile.intro}</div>
                        </div>
                        <div className={style.profileBtnGroup}>
                        <Link to="/tale" state={memberId}><img className={style.profileBtn} src={require("../static/images/view-tale-btn.png")}></img></Link>
                        <NavLink to={`/insertReport?targetCode=${profile?.profile?.memberCode}`}><img className={style.profileBtn} src={require("../static/images/like-btn.png")}></img></NavLink>
                        <NavLink to={`/insertReport?targetCode=${profile?.profile?.memberCode}`}><img className={style.profileBtn} src={require("../static/images/tale-report-btn.png")}></img></NavLink>
                        </div>
                    </div>
                </div>
              
            </div>
            }
        </div>
    )
}

export default Profile;