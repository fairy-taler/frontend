import style from "../static/css/Join.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom"
import {
    ON_BLACK, OFF_LOGO, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { POST_LOGIN  } from "../../modules/memberModules/memberAPIModule";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { callLoginAPI } from "../../apis/member/MemberAPICalls"


function Login(){
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const memberStatus = useSelector(state => state.memberReducer);
    
    const [member, setMember] = useState({
      memberId: '',
      memberPwd: '',
    });

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch({ type: OFF_LOGO});
    },[])

    useEffect(() => {
        if(memberStatus.status === 200){
            console.log("[Login] Login SUCCESS {}", member);
            navigate("/", { replace: true });
        }
      }
      ,[memberStatus]);

      
    if(memberStatus.length > 0) {
        console.log("[Login] Login is already authenticated by the server");        
        return navigate("/", { replace: true });
    }

    const onChangeHandler = (e) => {
        setMember({
            ...member,
            [e.target.name]: e.target.value
        });
        console.log(member)
    };
    
    const onClickLoginHandler = () => { 
        dispatch(callLoginAPI({	
            form: member
        }));
    }
    



    return (
        <div className={style.loginDiv}>
            <Link to="/"> <img className={style.loginLogo} src={require('../static/images/logo.png')}></img></Link><br/>
            <img className={style.loginP} src={require('../static/images/login-ph.png')}></img>
            <div className={style.inputBox}>
                    <input type="text" name="memberId" id="memberId" value={member.memberId} onChange={ onChangeHandler } placeholder="아이디" required />
            </div>
            <div className={style.inputBox}>
                <input type="password" name="memberPwd" id="memberPwd" value={member.memberPwd} onChange={ onChangeHandler } placeholder="비밀번호" required />
            </div>
            <button className={style.submitLogin}><img src={require("../static/images/login-btn.png")}  onClick={onClickLoginHandler} /> </button>
            <div className={style.btnGroup}>
                <button className={style.phBtn}><img src={require("../static/images/idSearch.png")} /> </button>
                <button className={style.phBtn}><img src={require("../static/images/pwdSearch.png")} /> </button>
                <button className={style.phBtn}><img src={require("../static/images/join-ph.png")} /> </button>
            </div>
        </div>
    )
}

export default Login;