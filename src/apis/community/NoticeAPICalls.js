
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
        
        console.log('[ForumAPICalls] callGetForumAPI RESULT : ', result);
        
        dispatch({ type:SET_NOTICE_LIST,  payload: result.data});

    };
}
