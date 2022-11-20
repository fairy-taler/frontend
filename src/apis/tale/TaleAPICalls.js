
import {
    SET_TALE_LIST
} from "../../modules/taleModules/taleManageModule";


export const callGetTalesAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/tale?page=${pageable.page}&size=${pageable.size}`;

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