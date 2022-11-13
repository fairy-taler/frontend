
import {
    SET_FAQ_LIST, SET_FAQ
} from "../../modules/communityModules/faqModule";


export const callGetFaqAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/faq?page=${pageable.page}&size=${pageable.size}`;

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
        
        console.log('[FaqAPICalls] callGetFaqAPI RESULT : ', result);
        
        dispatch({ type:SET_FAQ_LIST,  payload: result.data});

    };
}
export const callGetDetailFaqAPI = (faqCode) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/faq/${faqCode}`;

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
        
        console.log('[FaqAPICalls] callGetFfaqAPI RESULT : ', result);
        
        dispatch({ type:SET_FAQ,  payload: result.data});

    };
}

export const callInsertFaqAPI = (faqData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/faq`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"   , 
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
            },
            body: JSON.stringify(
                {
                    "title" : faqData.title,
                    "content" : faqData.content,
                    "answer" : faqData.content
                }
            )
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);   

    };
}