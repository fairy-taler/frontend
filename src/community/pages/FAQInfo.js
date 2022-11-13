import style from "../static/css/NoticeInfo.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom"
import { callGetDetailFaqAPI } from "../../apis/community/FaqAPICalls"

function FAQInfo(){
    const  params = useParams();
    //공지사항 정보 불러오기
    
    const result= useSelector(state => state.faqReducer);
    const faq = result?.faq;
    console.log(faq)
    const nextResult = {"tag" :"문의",
                        "title" :"ID 보호모드를 해제하고 싶어요.", 
                                "content" :"안녕하세요. " 
                                            + " \n ID 보호 모드를 해제하고 싶어요.",
                                "date" :"2022-10-13"
                        }
                     
   
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetDetailFaqAPI(params[1]));
    },[])

    return (
        <div className={style.noticeBox}>
            {/* 자주 찾는 도움말 제목 이미지 */}
            <div className={style.betweenBox}>
                {/* 자주 찾는 도움말 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/faq-title.png")}/>
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
            </div>
            {/* FAQ 제목 */}
            <div className={style.contentTitleBox}> 
                {faq?.title}
            </div>
            {/* FAQ 날짜 */}
            <div className={style.contentDateBox}>
                {faq?.createDate?.substr(0,10)}
            </div>
            {/* FAQ 내용 */}
            <div className={style.contentContentBox}>
                {faq.content}
            </div>
            {/* 다음 FAQ */}
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

export default FAQInfo;