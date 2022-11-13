import style from "../static/css/NoticeInfo.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import {callGetDetailNoticeAPI } from "../../apis/community/NoticeAPICalls"
import { NavLink, useParams } from "react-router-dom"
function NoticeInfo(){       
    const  params = useParams();                 
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetDetailNoticeAPI(params[1]));
    },[])

    //공지사항 정보 불러오기
    const result= useSelector(state => state.noticeReducer);
    const notice = result.notice;
    const nextResult = {"tag" :"공지",
                        "title" :"10월 정기 점검 안내", 
                                "content" :"안녕하세요. " 
                                            + " \n 10월 정기점검 안내합니다. 오후 11시부터 오전 1시까지 서비스 점검을 진행합니다."
                                            + "\n 너그러운 양해 부탁드립니다."
                                            + "\n 갑사합니다.",
                                "date" :"2022-10-23"
                        }
                     
    // 헤더 설정 변경
    const header = useSelector(state => state.headerReducer);

    return (
        <div className={style.noticeBox}>
            {/* 공지사항 제목 이미지 */}
            <div className={style.betweenBox}>
                {/* 공지사항 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/notice-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 목록 / 이전으로 버튼 */}
            <div className={style.subTitleBox} onClick={()=>{ navigate(`/notices`)}}>
                <img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/>
            </div>
            {/* 공지사항 제목 */}
            <div className={style.contentTitleBox}> 
                {notice.title}
            </div>
            {/* 공지사항 날짜 */}
            <div className={style.contentDateBox}>
                {notice.createDate.substr(0,10)}
            </div>
            {/* 공지사항 내용 */}
            <div className={style.contentContentBox}>
                {notice.content}
            </div>
            {/* 다음 공지사항 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.nextContentsBox}>
                <span style={{width : "5%"}}><img src={require("../static/images/under-arrow-btn.png")}/></span>
                <span style={{width : "10%"}}>[{nextResult.tag}]</span>
                <span style={{width : "75%"}}>{nextResult.title}</span>
                <span >{nextResult.date}</span>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
        </div>
    )
}

export default NoticeInfo;