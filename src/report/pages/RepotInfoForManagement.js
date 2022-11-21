import style from "../static/css/ReportInfoForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import {callGetReportAPI} from "../../apis/report/ManageReportAPICalls"
import { NavLink, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
function ReportInfo(){
    const  params = useParams();  
    const navigate = useNavigate();  
                     
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetReportAPI(params[1]));
    },[])
    //공지사항 정보 불러오기
    const result= useSelector(state => state.reportManageReducer);
    const report = result?.report;
   
    return (
        <div className={style.noticeBox}>
            {/* 공지사항 제목 이미지 */}
            <div className={style.betweenBox}>
                {/* 공지사항 타이틀 */}
                <div className={style.reportTitle}> 신고 보기 </div>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            {/* border line */}
            {/* 목록 / 이전으로 버튼 */}
            <div className={style.subTitleBox}>
                <NavLink to="/manageReports"><img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/></NavLink>
            </div>
            {/* 공지사항 제목 */}
            <div className={style.contentTitleBox}> 
                {report?.category}
            </div>
            {/* 공지사항 날짜 */}
            <div className={style.contentDateBox} style={{paddingTop: "30px"}}>
                신고일 : {report?.createDate?.substr(0,10)}
            </div>
            <div className={style.contentDateBox}>
                신청자 : {report?.reporterId}
            </div>
            <div className={style.contentDateBox}>
                대상자 : {report?.targetId}
            </div>
            <div className={style.contentDateBox}>
                신고 동화 : {report?.targetTaleTitle? report?.targetTaleTitle:"대상 동화가 없습니다."}
            </div>
            <div className={style.contentDateBox} style={{paddingBottom:"100px"}}>
                신고 내용 : {report?.content}
            </div>
            <div className={style.contentDateBox} style={{paddingBottom:"100px"}}>
                첨부파일 : {report?.attachments?
                <div><img src={report?.attachments} style={{width : "500px", height : "500px"}}></img></div>
                :
                "첨부파일이 없습니다."}
            </div>
            {/* 공지사항 내용 */}
            {/* <div className={style.contentContentBox}>
                신고 내용 : {report?.content}
            </div> */}
            {/* 다음 공지사항 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
        </div>
    )
}

export default ReportInfo;