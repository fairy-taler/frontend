
import {
    SET_FORUM_LIST, SET_FORUM
} from "../../modules/communityModules/forumModule";


export const callGetForumsAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/forums?page=${pageable.page}&size=${pageable.size}&sort=createDate,desc`;

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
        
        console.log('[ForumAPICalls] callGetForumAPI RESULT : ', result);
        
        dispatch({ type:SET_FORUM_LIST,  payload: result.data});

    };
}
export const callGetForumsByMemberCodeAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/forums/my?page=${pageable.page}&size=${pageable.size}&sort=createDate,desc`;

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
        
        console.log('[ForumAPICalls] callGetForumAPI RESULT : ', result);
        
        dispatch({ type:SET_FORUM_LIST,  payload: result.data});

    };
}
export const callGetForumsByCategoryAPI = (category,pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/forums/category?category=${category}&page=${pageable.page}&size=${pageable.size}&sort=createDate,desc`;

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
        
        console.log('[ForumAPICalls] callGetForumAPI RESULT : ', result);
        
        dispatch({ type:SET_FORUM_LIST,  payload: result.data});

    };
}
export const callGetDetailForumAPI = (forumCode) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/forums/${forumCode}`;

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
        
        console.log('[ForumAPICalls] callGetForumAPI RESULT : ', result);
        
        dispatch({ type:SET_FORUM,  payload: result.data});

    };
}
export const callInsertCommentAPI = (forumCode, content) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/forums/comments`;
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
                "forumCode" :forumCode,
                "content" : content
            })
        })
        .then(response => response.json());
        console.log('[ForumAPICalls] callRegistCommentAPI RESULT : ', result);   
    };
}
export const callInsertForumAPI = (forumData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/forums`;
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
                "title" :forumData.title,
                "category" : forumData.category,
                "content" : forumData.content
            })
        })
        .then(response => response.json());

        console.log('[MemberAPICalls] callRegisterAPI RESULT : ', result);   

    };
}

