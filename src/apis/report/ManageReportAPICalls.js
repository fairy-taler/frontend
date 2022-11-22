
import {
    SET_REPORT_LIST, SET_REPORT
} from "../../modules/reportModules/reportManageModule";


export const callGetReportsAPI = (pageable) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/reports?page=${pageable.page}&size=${pageable.size}?sort=createDate,desc`;

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
        
        console.log('[ReportAPICalls] callGetReportsAPI RESULT : ', result);
        
        dispatch({ type:SET_REPORT_LIST,  payload: result.data});

    };
}

export const callGetReportAPI = (reportCode) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/reports/${reportCode}`;

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
        
        console.log('[ReportAPICalls] callGetReportAPI RESULT : ', result);
        
        dispatch({ type:SET_REPORT,  payload: result.data});

    };
}

export const callInsertReportAPI = (formData) => {
    const requestURL = `http://${process.env.REACT_APP_RESTAPI_IP}/reports`;
    console.log(requestURL);
    return async (dispatch, getState) => {

        const result = await fetch(requestURL, {
            method: "POST",
            headers: {
                "Accept": "*/*",
                "Access-Control-Allow-Origin": "*"   , 
                "Authorization": "Bearer " + window.localStorage.getItem("accessToken"),
                "accessToken":  window.localStorage.getItem("accessToken"),
            },
            body: formData
        })
        .then(response => response.json());

        console.log('[ReportAPICalls] callInsertReportAPI RESULT : ', result);   

    };
}

