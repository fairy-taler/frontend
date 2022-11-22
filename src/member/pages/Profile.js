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
    console.log("data", profile?.profile?.memberCode);
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
                        <Link to="/tale" state={memberId}><img className={style.mypageBtn} src={require("../static/images/view-tale.png")}></img></Link>
                        <NavLink to={`/insertReport?targetCode=${profile?.profile?.memberCode}`}><button><img className={style.mypageBtn} src={require("../static/images/report.png")}></img></button></NavLink>

                    </div>
                </div>
              
            </div>
            }
        </div>
    )
}

export default Profile;