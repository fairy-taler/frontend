import style from "../static/css/Mypage.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { CHANGE_INFO, CHANGE_PWD } from "../../modules/memberModules/memberModule";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';

function Mypage(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.changeReducer); 
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

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
                <div className={style.mypageText}> 로그인 정보 </div>
                <div className={style.inputBox}>
                    <input type="text" name="memberId" id="memberId" value={member[3].memberId} onChange={ onChangeHandler } placeholder="아이디" disabled />
                </div>
                <div className={style.inputBox}>
                    <input type="password" name="memberPwd" id="memberPwd" value={member[2].memberPwd} onChange={ onChangePwd } placeholder="비밀번호" required />
                </div>
                <div className={style.passwordBox}>
                    <input type="password" name="confirmPwd" id="confirmPwd" value={member[2].confirmPwd} onChange={ onChangePwd } placeholder="비밀번호 확인" required />
                    <button className={style.authBtn}> <img src={require("../static/images/small-change-btn.png")}></img></button>
                </div>
            </div>
            <div className={style.mypageText}> 회원 정보 </div>
            <div className={style.inputBox}>
                <input type="text" name="memberName" id="memberName" value={member[3].memberName} onChange={ onChangeHandler } placeholder="이름" required />
            </div>
            <div className={style.inputBox}>
                <input type="text" name="phone" id="phone" value={member[3].phone} onChange={ onChangeHandler } placeholder="전화번호" required />
                <br />
            </div>
            <div className={style.inputBox}>
                <div className={style.emailBox}>
                    <input type="text" name="email" id="email" value={member[3].email} onChange={ onChangeHandler } placeholder="이메일" required />
                    <button className={style.authBtn}> <img src={require("../static/images/auth-btn.png")}></img></button>
                </div>
            </div>
            <div className={style.inputBox}>
                <input type="text" name="mailAuth" id="mailAuth" value={member[3].mailAuth} onChange={ onChangeHandler } placeholder="인증번호" required/>
                <br />
            </div>
            <button className={style.submitBtn}><img src={require("../static/images/change-btn.png")} /> </button>
            <div className={style.unregist}><button> 회원 탈퇴 </button></div>
        </div>
    )
}

export default Mypage;