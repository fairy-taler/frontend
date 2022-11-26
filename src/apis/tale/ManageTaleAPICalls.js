
import {
    SET_TALE_LIST,SET_TALE 
} from "../../modules/taleModules/taleManageModule";


export const callGetTalesAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/tale/block?page=${pageable.page}&size=${pageable.size}`;

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
        
        console.log('[TaleAPICalls] callGetTalesAPI RESULT : ', result);
        
        dispatch({ type:SET_TALE_LIST,  payload: result.data});
    };
}

export const callGetTalesByTitleAPI = ({pageable, title}) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/tale/title?page=${pageable.page}&size=${pageable.size}&title=${title}`;

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
        
        console.log('[TaleAPICalls] callGetTalesAPI RESULT : ', result);
        
        dispatch({ type:SET_TALE_LIST,  payload: result.data});

    };
}

export const callGetTaleAPI = (id) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/tale/${id}`;

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
        
        console.log('[TaleAPICalls] callGetTalesAPI RESULT : ', result);
        
        dispatch({ type:SET_TALE,  payload: result.data});

    };
}

//   동화 차단
export const callUpdateBlockTaleAPI = (id) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/tale/block?id=${id}`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"   , 
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
            }
        })
        .then(response => response.json());

        if(result.status === 500){
            console.log(result);
            alert(result.message);
        }
        if(result.status === 200 || result.status === 201){
            alert("동화 차단이 완료 되었습니다. ")     
            window.location.href="/manageTale"
        }
        
        console.log('[TaleAPICalls] callUpdateAPI RESULT : ', result);   
    };
}
// 동화 차단 해제
export const callUpdateUnBlockTaleAPI = (id) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/tale/unblock?id=${id}`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"   , 
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
            }
        })
        .then(response => response.json());
 
        if(result.status === 500){
            console.log(result);
            alert(result.message);
        }
        if(result.status === 200 || result.status === 201){
            alert("동화 차단이 해제 되었습니다. ")     
            window.location.href="/manageTale"
        }
        
        console.log('[TaleAPICalls] callUpdateAPI RESULT : ', result);  
    };
}