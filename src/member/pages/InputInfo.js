import style from "../static/css/Join.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { INPUT_INFO } from "../../modules/memberModules/memberModule";
import { callRegisterAPI } from "../../apis/member/MemberAPICalls";
import { useNavigate } from "react-router-dom";

function InputInfo(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.joinReducer); 
    const member1 = useSelector(state => state.memberReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if(member1.status == 201){
          console.log("[Login] Register SUCCESS {}", member1);
          alert("회원가입에 성공하였습니다 !")
          navigate("/", { replace: true })
        }
    },
    [member1]);

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

    const onClickRegisterHandler = () => {
    
        let body = {
          memberId: member[0].memberId,
          memberPwd: member[0].memberPwd,
          memberName: member[0].memberName,
          email: member[0].email,
          phone: member[0].phone,
          nickname: member[0].nickname,
          memberRole: member[0].memberRole
        }
    
        console.log("body",body);
    
        dispatch(callRegisterAPI({
          form: body
        }));
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
                <div className={style.inputBox}>
                    <input type="password" name="memberPwd" id="memberPwd" value={member.memberPwd} onChange={ onChangeHandler } placeholder="비밀번호 확인" required />
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
                <input type="text" name="email" id="email" value={member.email} onChange={ onChangeHandler } placeholder="이메일" required />
            </div>
            <div className={style.inputBox}>
                <input type="text" name="nickname" id="nickname" value={member.nickname} onChange={ onChangeHandler } placeholder="닉네임" required/>
                <br />
            </div>
            <button className={style.submitBtn} onClick={onClickRegisterHandler}><img src={require("../static/images/join-btn.png")} /> </button>
        </div>
    )
}

export default InputInfo;