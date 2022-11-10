import style from "../static/css/Mypage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { CHANGE_INFO, CHANGE_PWD } from "../../modules/memberModules/memberModule";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { callGetMemberAPI } from '../../apis/member/MemberAPICalls'

function Mypage(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.changeReducer); 
    const header = useSelector(state => state.headerReducer);
    const originMember = useSelector(state => state.memberReducer); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberAPI());
    },[])
    console.log(originMember)
    const onChangeHandler = (e) => {
    
        console.log(member);
        dispatch({
          type: CHANGE_INFO,
          payload: {
            name: e.target.name,
            value: e.target.value
          }
        });
    }

    const onChangePwd = (e) =>{
        console.log(member);
        dispatch({
          type: CHANGE_PWD,
          payload: {
            name: e.target.name,
            value: e.target.value
          }
        });
    }

    console.log(member)
    return (
        <div className={style.changeForm}>
            <div className={style.title}><img src={require("../static/images/mypage.png")} /></div>
            <div className={style.lineDiv}> <img className={style.lineImg} src={require("../static/images/line.png")} /></div>
            
            <div className={style.ChangeSection}>
                <div className={style.profile}>
                    <img className={style.profileImg} src={require("../static/images/profile-img.png")}></img>
                    <div className={style.profileInfo}>
                        <div className={style.profileName} > 한지수<span> 선생님 </span> </div>  
                        <div className={style.profileTale}> 제작한 동화책 수 : <span> 0 </span> </div>  
                        <div className={style.profileIntro}> 소개글: </div>
                        <textarea></textarea><br/>
                        <img className={style.mypageBtn} src={require("../static/images/view-tale.png")}></img>
                        <img className={style.mypageBtn} src={require("../static/images/edit-profile.png")}></img>
                    </div>
                </div>
                
                <div className={style.changeInfo}> 
                <div className={style.mypageText}> 로그인 정보 </div>
                <div className={style.inputBox}>
                    <input type="text" name="memberId" id="memberId" value={originMember.memberId} />
                </div>
                <div className={style.inputBox}>
                    <input type="password" name="originPwd" id="originPwd" value={member[2].originPwd} onChange={ onChangePwd } placeholder="이전 비밀번호" required />
                </div>
                <div className={style.inputBox}>
                    <input type="password" name="memberPwd" id="memberPwd" value={member[2].memberPwd} onChange={ onChangePwd } placeholder="새 비밀번호" required />
                </div>
                <div className={style.passwordBox}>
                    <input type="password" name="confirmPwd" id="confirmPwd" value={member[2].confirmPwd} onChange={ onChangePwd } placeholder="비밀번호 확인" required />
                    <button className={style.authBtn}> <img src={require("../static/images/small-change-btn.png")}></img></button>
                </div>

            <div className={style.mypageText2}> 회원 정보 </div>
            <div className={style.inputBox}>
                <input type="text" name="memberName" id="memberName" value={member[3].memberName} onChange={ onChangeHandler } placeholder="이름" required />
            </div>
            <div className={style.inputBox}>
                <input type="text" name="phone" id="phone" value={member[3].phone} onChange={ onChangeHandler } placeholder="전화번호" required />
                <br />
            </div>
            <div className={style.inputBox}>
                <input type="text" name="email" id="email" value={member[3].email} onChange={ onChangeHandler } placeholder="이메일" required />

            </div>
            <div className={style.inputBox}>
                <input type="text" name="nickname" id="nickname" value={member[3].nickname} onChange={ onChangeHandler } placeholder="닉네임" required/>
                <br />
            </div>
            <button className={style.submitBtn}><img src={require("../static/images/change-btn.png")} /> </button>
            <div className={style.unregist}><button> 회원 탈퇴 </button></div>

            </div>
            </div>
        </div>
    )
}

export default Mypage;