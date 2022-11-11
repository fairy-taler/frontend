import {
    POST_LOGIN,
    GET_MEMBER,
    POST_REGISTER,
    PUT_PWD,
    PUT_MEMBER,
    PUT_PROFILE
} from "../../modules/memberModules/memberAPIModule"; 

import {
    INIT_INFO,
    INIT_PROFILE
} from "../../modules/memberModules/memberModule"; 

import {
    GET_PROFILE
} from "../../modules/memberModules/profileAPIModule"

import axios from 'axios';


export const callLoginAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/login`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberPwd: form.memberPwd             
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);   

        if(result.status === 500){
            console.log(result);
            alert(result.message);
        }
        if(result.status === 200){
            window.localStorage.setItem('accessToken', result.data.accessToken);            
        }
        dispatch({ type: POST_LOGIN,  payload: result });   
    };
}

export const callGetMemberAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/members/all-info`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*" 
            }
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callGetMemberAPI RESULT : ', result);
        
        dispatch({ type: GET_MEMBER,  payload: result.data });
        dispatch({ type: INIT_INFO,  payload: result.data });

    };
}

export const callRegisterAPI = ({form}) => {

    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/auth/join`;
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                memberId: form.memberId,
                memberPwd: form.memberPwd,
                memberName: form.memberName,
                email: form.email,
                phone: form.phone,
                nickname: form.nickname,
                memberRole: form.memberRole        
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);        
        
        if(result.status === 500){
            alert(result.message);
        }
        if(result.status === 201){
            dispatch({ type: POST_REGISTER,  payload: result });
        }        
    };
}

export const callGetProfileAPI = () => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/members/profile`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*" 
            }
        })
        .then(res => res.json());
        
        console.log('[MemberAPICalls] callGetProfileAPI RESULT : ', result);
        
        dispatch({ type: GET_PROFILE,  payload: result.data });
        dispatch({ type: INIT_PROFILE,  payload: result.data });

    };
}

export const callUpdatePwdAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/members/update-pwd`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",  
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                originalPwd: form.originalPwd,
                newPwd: form.newPwd             
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callUpdatePwdAPI RESULT : ', result);   

        if(result.status === 500){
            console.log(result);
            alert(result.message);
        }
        if(result.status === 200){
            alert("회원 비밀번호 변경이 완료 되었습니다. ")     
            window.location.href="/"
        }
        dispatch({ type: PUT_PWD,  payload: result });   
    };
}

export const callUpdateMemberAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/members/update`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",  
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*"    
            },
            body: JSON.stringify({
                memberName: form.memberName,
                phone: form.phone,
                nickname: form.nickname             
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callUpdateMemberAPI RESULT : ', result);   

        if(result.status === 500){
            console.log(result);
            alert(result.message);
        }
        if(result.status === 200){
            alert("회원 정보 변경이 완료 되었습니다. ")     
            window.location.href="/"
        }
        dispatch({ type: PUT_MEMBER,  payload: result });   
    };
}

export const callUpdateProfileAPI = ({form}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/members/profile`;
    //const requestURL = `http://localhost:8080/members/profile`;
    console.log(requestURL);
    return async (dispatch, getState) => {
        const formData = new FormData();

        formData.append("profileImg", form.profileImg)
        formData.append("intro", form.intro)

        const result = await axios(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "multipart/form-data; boundary=<calculated when request is sent>",
                "Accept": "*/*",  
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*"    
            },
            data: formData
        })


        console.log('[MemberAPICalls] callUpdateProfileAPI RESULT : ', result);   

        if(result.status === 500){
            console.log(result);
            alert(result.message);
        }
        if(result.status === 200){
            alert("회원 프로필 변경이 완료 되었습니다. ")     
            window.location.href="/mypage"
        }
        dispatch({ type: PUT_PROFILE,  payload: result });   
    };
}