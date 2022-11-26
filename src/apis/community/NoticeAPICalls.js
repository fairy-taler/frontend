
import {
    SET_NOTICE_LIST, SET_NOTICE
} from "../../modules/communityModules/noticeModule";


export const callGetNoticesAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/notices?page=${pageable.page}&size=${pageable.size}`;

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
        
        console.log('[ForumAPICalls] callGetNoticeAPI RESULT : ', result);
        
        dispatch({ type:SET_NOTICE_LIST,  payload: result.data});

    };
}
export const callGetDetailNoticeAPI = (noticeCode) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/notices/${noticeCode}`;

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
        
        console.log('[NoticeAPICalls] callGetNoticeDetailAPI RESULT : ', result);
        
        dispatch({ type:SET_NOTICE,  payload: result.data});

    };
}
export const callInsertNoticeAPI = (noticeData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/notices`;
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
            body: JSON.stringify({
                "title" :noticeData.title,
                "content" : noticeData.content
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);   

    };
}

export const callDeleteNoticeAPI = (noticeCode) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/notices/${noticeCode}`;

    return async (dispatch, getState) => {
        const result = await fetch(requestURL,{
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
                "Access-Control-Allow-Origin": "*" 
            }
        })
        .then(res => res.json());
        
        console.log('[NoticeAPICalls] callDeleteNoticeAPI RESULT : ', result);

    };
}

//  비공개로 변경
export const callUpdateNoticeToPrivateAPI = (noticeData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/notices/${noticeData.noticeCode}?isPublic=${noticeData.isPublic}`;
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
            },
            body: JSON.stringify({
                "title" :noticeData.title,
                "content" : noticeData.content
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);   

    };
}

//  공지사항 검색
export const callGetSearchNoticesAPI = (data) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/notices/title?title=${data.title}&page=${data.pageable.page}&size=${data.pageable.size}`;

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
        
        console.log('[ForumNoticeCalls] callGetSearchNoticeAPI RESULT : ', result);
        
        dispatch({ type:SET_NOTICE_LIST,  payload: result.data});

    };
}