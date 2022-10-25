import style from "../static/css/Join.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { INPUT_INFO } from "../../modules/memberModules/memberModule";

function InputInfo(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.joinReducer); 

    const onChangeHandler = (e) => {
    
        console.log(member);
        dispatch({
          type: INPUT_INFO,
          payload: {
            name: e.target.name,
            value: e.target.value
          }
        });
    }
    console.log(member)
    return (
        <div className={style.joinForm}>
            <div className={style.joinSection}>
                <div className={style.joinText}> 로그인 정보 </div>
                <div className={style.inputBox}>
                    <input type="text" name="memberId" id="memberId" value={member.memberId} onChange={ onChangeHandler } placeholder="아이디" required />
                </div>
                <div className={style.inputBox}>
                    <input type="password" name="memberPwd" id="memberPwd" value={member.memberPwd} onChange={ onChangeHandler } placeholder="비밀번호" required />
                </div>
            </div>
            <div className={style.joinText}> 회원 정보 </div>
            <div className={style.inputBox}>
                <input type="text" name="memberName" id="memberName" value={member.memberName} onChange={ onChangeHandler } placeholder="이름" required />
            </div>
            <div className={style.inputBox}>
                <input type="text" name="phone" id="phone" value={member.phone} onChange={ onChangeHandler } placeholder="전화번호" required />
                <br />
            </div>
            <div className={style.inputBox}>
                <div className={style.emailBox}>
                    <input type="text" name="email" id="email" value={member.email} onChange={ onChangeHandler } placeholder="이메일" required />
                    <button className={style.authBtn}> <img src={require("../static/images/auth-btn.png")}></img></button>
                </div>
            </div>
            <div className={style.inputBox}>
                <input type="text" name="mainAuth" id="mainAuth" value={member.mainAuth} onChange={ onChangeHandler } placeholder="인증번호" required/>
                <br />
            </div>
            <button className={style.submitBtn}><img src={require("../static/images/join-btn.png")} /> </button>
        </div>
    )
}

export default InputInfo;