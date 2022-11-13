
import {
    SET_INQUIRY_LIST, SET_INQUIRY
} from "../../modules/communityModules/inquiryModule";


export const callGetInquirysAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/inquirys?page=${pageable.page}&size=${pageable.size}`;

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
        
        console.log('[InquiryAPICalls] callGetInquiryAPI RESULT : ', result);
        
        dispatch({ type:SET_INQUIRY_LIST,  payload: result.data});

    };
}
export const callGetDetailForumAPI = (inquiryCode) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/inquirys/${inquiryCode}`;

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
        
        console.log('[InquiryAPICalls] callGetInquiryAPI RESULT : ', result);
        
        dispatch({ type:SET_INQUIRY,  payload: result.data});

    };
}
export const callGetForumsByMemberCodeAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/inquirys/my?page=${pageable.page}&size=${pageable.size}`;

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
        
        console.log('[InquiryAPICalls] callGetInquiryAPI RESULT : ', result);
        
        dispatch({ type:SET_INQUIRY_LIST,  payload: result.data});

    };
}