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
        <div className="join-form">
            <div className="join-input">
                <input type="text" name="memberId" id="memberId" value={member.memberId} onChange={ onChangeHandler } placeholder="아이디" required />
            </div>
            <div className="join-input">
                <input type="password" name="memberPwd" id="memberPwd" value={member.memberPwd} onChange={ onChangeHandler } placeholder="비밀번호" required />
            </div>
            <div className="join-input">
                <input type="text" name="memberName" id="memberName" value={member.memberName} onChange={ onChangeHandler } placeholder="이름" required />
            </div>
            <div className="join-input">
                <input type="text" name="phone" id="phone" value={member.phone} onChange={ onChangeHandler } placeholder="전화번호" required />
                <br />
            </div>
            <div className="join-input">
            <   input type="text" name="email" id="email" value={member.email} onChange={ onChangeHandler } placeholder="이메일" required />
            </div>
            <div className="join-input">
                <input type="text" name="mainAuth" id="mainAuth" value={member.mainAuth} onChange={ onChangeHandler } placeholder="인증번호" required/>
                <br />
            </div>
        </div>
    )
}

export default InputInfo;