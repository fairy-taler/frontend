import style from "../static/css/NoticeInfo.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom"
import { callGetDetailInquiryAPI } from "../../apis/community/InquiryAPICalls"

function InquiryInfo(){
    const  params = useParams();
    //문의 상세 정보 불러오기
    
    const result= useSelector(state => state.inquiryReducer);
    const inquiry = result?.inquiry;
    console.log(inquiry)
    //공지사항 정보 불러오기
   
    const nextResult = {"tag" :"문의",
                        "title" :"게임 오류 목록 확인", 
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
        dispatch(callGetDetailInquiryAPI(params[1]));
    },[])

    return (
        <div className={style.noticeBox}>
            {/* 1대1문의 제목 이미지 */}
            <div className={style.betweenBox}>
                {/* 자주 찾는 도움말 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/my-inquiry-title.png")}/>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 목록 / 이전으로 버튼 */}
            <div className={style.subTitleBox}>
                <NavLink to="/serviceCenter"><img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/></NavLink>
            </div>
            {/* 문의 제목 */}
            <div className={style.contentTitleBox}> 
                {inquiry?.title}
            </div>
            {/* 문의 날짜 */}
            <div className={style.contentDateBox}>
                {inquiry?.createDate.substr(0,10)}
            </div>
            {/* 문의 내용 */}
            <div className={style.contentContentBox}>
                {inquiry?.content}
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.contentTitleBox} style={{paddingTop:"20px"}}> 
                답변
            </div>
            {inquiry?.answer == null? 
                <div className={style.contentContentBox}>
                        답변이 아직 등록되지 않았습니다.
                    </div>
            :
                <div>
                    {/* 문의 날짜 */}
                    <div className={style.contentDateBox}>
                        {inquiry?.answerDate.substr(0,10)}
                    </div>
                    {/* 문의 내용 */}
                    <div className={style.contentContentBox}>
                        {inquiry?.answer}
                    </div>
                </div>
            }
            
            {/* 다음 FAQ */}
            {/* <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.nextContentsBox}>
                <span style={{width : "5%"}}><img src={require("../static/images/under-arrow-btn.png")}/></span>
                <span style={{width : "10%"}}>[{nextResult.tag}]</span>
                <span style={{width : "75%"}}>{nextResult.title}</span>
                <span >{nextResult.date}</span>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} /> */}
        </div>
    )
}

export default InquiryInfo;