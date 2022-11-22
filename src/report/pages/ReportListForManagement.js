import style from "../static/css/ReportListForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {callGetNoticesAPI } from "../../apis/community/NoticeAPICalls"
import { callGetReportsAPI } from "../../apis/report/ManageReportAPICalls"

function NoticeListForManagement(){
    // 카테고리 설정 초기화
    const [noticeCategory, setNoticeCategory] = useState("공지");
    // 신고 정보 불어오기
    const result = useSelector(state => state.reportManageReducer);
    const datas  =  result?.reportList?.content;
    console.log(result);

    const pages = Array(result?.reportList?.totalPages).fill()
    
    // 헤더 설정 변경
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetReportsAPI({	
            page:0, size:10}
        ));
    },[])


    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    const toNoticesInfo = (e) =>{
        console.log(
            "url", e.target)
         navigate(
            `/manageReports/${e.target.id}`
          );
    }
    
    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/report-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <div className={style.searchInputBox}>
                        <input placeholder="검색어를 입력하세요."/>
                        <img src={require("../static/images/search-btn.png")}/>
                    </div>
                </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 공지사항 리스트 */}
            <div className={style.tableBox}>
                
                <table className={style.communityTable}>
                    <tr styleName><th>번호</th><th>카테고리</th><th>신고자ID</th><th>대상자ID</th><th>동화 제목</th><th>신고 일자</th></tr>
                    {datas?.map((data, index)=>(
                            <tr className={style.communityTableHover} onClick={toNoticesInfo} id={data.reportCode}>
                                    <td id={data.reportCode} style={{width : "10%" , textAlign:"center"}}>{data?.reportCode}</td>
                                    <td id={data.reportCode} style={{width : "10%" , textAlign:"center"}}>{data?.category}</td>
                                    <td id={data.reportCode} style={{width : "10%" , textAlign:"center"}}>{data?.reporterId}</td>
                                    <td id={data.reportCode} style={{width : "10%" , textAlign:"center"}}>{data?.targetId}</td>
                                    <td id={data.reportCode} style={{width : "40%" , textAlign:"center"}}>{data?.targetTaleTitle? data?.targetTaleTitle:"지정된 동화가 없습니다."}</td>
                                    <td id={data.reportCode} sityle={{width : "10%", textAlign:"center"}}>{data?.createDate?.substr(0,10)}</td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}
export default NoticeListForManagement;