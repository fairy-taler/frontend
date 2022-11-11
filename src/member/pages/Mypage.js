import style from "../static/css/Mypage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { CHANGE_INFO, CHANGE_PWD, CHANGE_PROFILE } from "../../modules/memberModules/memberModule";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { callGetMemberAPI, callGetProfileAPI, callUpdatePwdAPI, callUpdateMemberAPI } from '../../apis/member/MemberAPICalls'

function Mypage(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.changeReducer); 
    const header = useSelector(state => state.headerReducer);
    const originMember = useSelector(state => state.memberReducer); 
    const originProfile = useSelector(state => state.profileReducer); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberAPI());
        dispatch(callGetProfileAPI());
    },[])
    console.log(originMember)
    console.log(originProfile);

    const onChangeProfile = (e) => {
        console.log(member);
        dispatch({
          type: CHANGE_PROFILE,
          payload: {
            name: e.target.name,
            value: e.target.value
          }
        });
    }

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

    const onClickUpdatePwd = () => { 
        let body = {
            originalPwd: member[2].originPwd,
            newPwd: member[2].memberPwd
        }
        dispatch(callUpdatePwdAPI({
        form: body
        }));
    }

    const onClickUpdateMember = () => { 
        let body = {
            memberName: member[3].memberName,
            phone: member[3].phone,
            nickname: member[3].nickname  
        }
        dispatch(callUpdateMemberAPI({
        form: body
        }));
    }

    console.log(member)
    return (
        <div className={style.changeForm}>
            <div className={style.title}><img src={require("../static/images/mypage.png")} /></div>
            <div className={style.lineDiv}> <img className={style.lineImg} src={require("../static/images/line.png")} /></div>
            
            <div className={style.ChangeSection}>
                <div className={style.profile}>
                    { originProfile.profile != null && originProfile.profile.imgUrl != null ? 
                        <img className={style.profileImg} src={originProfile.profile.imgUrl}></img> : 
                        <img className={style.profileImg} src={require("../static/images/profile-img.png")}></img> 
                    }
                    <div className={style.profileInfo}>
                        <div className={style.profileName}> {originMember.memberName} <span> 선생님 </span> </div>  
                        <div className={style.profileTale}> 제작한 동화책 수 : <span> {originProfile.taleCount} </span> </div>  
                        <div className={style.profileIntro}> 소개글: </div>
                        <textarea value={member[4].intro} name="intro" onChange={ onChangeProfile }></textarea><br/> 
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
                    <button className={style.authBtn} onClick={ onClickUpdatePwd }> <img src={require("../static/images/small-change-btn.png")}></img></button>
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
                <input type="text" name="email" id="email" value={originMember.email} placeholder="이메일" required />

            </div>
            <div className={style.inputBox}>
                <input type="text" name="nickname" id="nickname" value={member[3].nickname} onChange={ onChangeHandler } placeholder="닉네임" required/>
                <br />
            </div>
            <button className={style.submitBtn} onClick={onClickUpdateMember}><img src={require("../static/images/change-btn.png")} /> </button>
            <div className={style.unregist}><button> 회원 탈퇴 </button></div>

            </div>
            </div>
        </div>
    )
}

export default Mypage;