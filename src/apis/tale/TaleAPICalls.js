import {
    GET_TALE
} from "../../modules/taleModules/taleAPIModule"; 

import axios from 'axios';

export const callGetTaleAPI = (memberId) => {
   // const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/tale/list/${memberId}`;
   const requestURL = `http://localhost:8080/tale/list/kimyj111`;

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
        
        console.log('[MemberAPICalls] callGetTaleAPI RESULT : ', result);
        
        dispatch({ type: GET_TALE,  payload: result.data });

    };
}
