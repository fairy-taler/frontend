import style from "../static/css/Mypage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { callGetMemberProfileAPI } from '../../apis/member/MemberAPICalls'
import React from "react";
import defaultImg from "../static/images/profile-img.png";

function Profile(memberId){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const profile = useSelector(state => state.profileMemberReducer); 
    const [close, setClose] = useState(false);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberProfileAPI(memberId));
    },[])

    const handleImgError = (e) => {
        e.target.src = defaultImg;
    }

    const onClickClose = () => {
        setClose(!close)
        console.log(close)
    }

    console.log(profile)
    return (
        <div className={style.profileComponent}>
            { close == true ? null : 
            <div className={style.ProfileSection}>
                <div className={style.profile}>
            
                    <img className={style.profileImg} src={profile.imgUrl} onError={handleImgError}></img> 
                   
                    <div className={style.profileInfo}>
                        <div className={style.xBtn}> <button onClick={onClickClose}>X </button></div>
                        <div className={style.profileName}> {profile.memberName} <span> 선생님 </span> </div>  
                        <div className={style.profileTale}> 제작한 동화책 수 : <span> {profile.taleCount} </span> </div>  
                        <div className={style.profileIntro}> 소개글: </div>
                        <div> {profile.intro}</div><br/> 
                        <img className={style.mypageBtn} src={require("../static/images/view-tale.png")}></img>
                        <button><img className={style.mypageBtn} src={require("../static/images/report.png")}></img></button> 
                    </div>
                </div>
              
            </div>
            }
        </div>
    )
}

export default Profile;