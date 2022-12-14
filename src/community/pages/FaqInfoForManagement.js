import style from "../static/css/NoticeInfoForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { callGetDetailFaqAPI,callDeleteFaqAPI } from "../../apis/community/FaqAPICalls"
import { NavLink, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";

function FaqInfo(){
    const  params = useParams();      
    const result= useSelector(state => state.faqReducer);
    const navigate = useNavigate();
    const faq = result?.faq;
    //공지사항 정보 불러오기
    const nextResult = {"tag" :"FAQ",
                        "title" :"10월 정기 점검 문의", 
                                "content" :"안녕하세요. " 
                                            + " \n 10월 정기점검 안내합니다. 오후 11시부터 오전 1시까지 서비스 점검을 진행합니다."
                                            + "\n 너그러운 양해 부탁드립니다."
                                            + "\n 감사합니다.",
                                "date" :"2022-10-23",
                                "state" : "public"
                        }
                     
   
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetDetailFaqAPI(params[1]));
    },[])
    const onClickDelteFaq = () => {
        dispatch(callDeleteFaqAPI(params[1]));
        alert("삭제되었습니다.")
        navigate(`/managementNotices`);
    }

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
            <div className={style.subTitleBox}>
                <img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/>
                <div>
                <span className={style.editButton} style={{background : "#6666FF"}}>수정</span>
                <span className={style.editButton} style={{background : "#FF6666"}} onClick={onClickDelteFaq}>삭제</span>
                <span className={style.editButton}>비공개로 변경</span>
                </div>
            </div>
            {/* 공지사항 제목 */}
            <div className={style.contentTitleBox}> 
                [문의] {faq?.title}
                <div>{faq?.public? "공개": "비공개"}</div>
            </div>
            {/* 공지사항 날짜 */}
            <div className={style.contentDateBox}>
                {faq?.createDate?.substr(0,10)}
            </div>
            {/* 공지사항 내용 */}
            <div className={style.contentContentBox}>
                {faq?.content}
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

export default FaqInfo;