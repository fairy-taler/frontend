import {
    POST_LOGIN,
    GET_MEMBER,
    POST_REGISTER
} from "../../modules/memberModules/memberAPIModule"; 

import {
    INIT_INFO
} from "../../modules/memberModules/memberModule"; 


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