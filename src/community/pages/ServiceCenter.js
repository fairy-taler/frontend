import style from "../static/css/ServiceCenter.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callGetFaqAPI } from "../../apis/community/FaqAPICalls"
import { callGetForumsByMemberCodeAPI } from "../../apis/community/InquiryAPICalls"


function ServiceCenter(){
    //공지사항 정보 불러오기
    const result = useSelector(state => state.faqReducer);
    const faqs = result?.faqList?.content;
    console.log(faqs);
    // 나의 문의 정보 불러오기
    const result2 = useSelector(state => state.inquiryReducer);
    const myInquirys = result2?.inquiryList?.content;
    console.log(myInquirys);
    
    const pages = Array(10).fill()
    
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetFaqAPI({	
            page:0, size:5}
        ));
        dispatch(callGetForumsByMemberCodeAPI({	
            page:0, size:5}
        ));
    },[])

    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    // FAQ 리스트 클릭 이벤트
    const toFAQInfo = (e) =>{
        navigate(`/faq/${e.target.id}`);
    }
    // 나의 문의 목록 리스트 클릭 이벤트
    const toInquiryInfo = (e) =>{
        navigate(`/myInquiry/${e.target.id}`);
    }
    // 1대1문의하기 클릭 이벤트
    const toInsertInquiry = (e) =>{
        navigate(`/insertInquiry`);
    }

    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 고객센터 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/service-center-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            {/* 자주 찾는 도움말 */}
            {/* 자주 찾는 도움말 제목 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <img className={style.subTitleImg} src={require("../static/images/faq-title.png")}/>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 자주 찾는 도움말 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {faqs?.map((faq, index)=>(
                        <tr onClick={toFAQInfo} key={faq.faqCode} id={index}>
                            <td  id={faq.faqCode} style={{width : "100px"}}>[FAQ]</td>
                            <td  id={faq.faqCode}>{faq.title}</td>
                            <td  id={faq.faqCode}>{faq.createDate.substr(0,10)}</td>
                        </tr>))}
                </table>
            </div>
            {/* 페이지 버튼 */}
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
            {/* 나의 문의 목록 */}
            {/* 1대1 문의하기 버튼 */}
            <div className={style.insertButtonBox} onClick={toInsertInquiry}>
                <img className={style.insertButton} src={require("../static/images/inquiry-btn.png")} />
            </div>
            {/* 나의 문의 목록 제목 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <img className={style.subTitleImg} src={require("../static/images/my-inquiry-title.png")}/>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 문의 목록 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {myInquirys?.map((inquiry, index)=>(
                        <tr onClick={toInquiryInfo} key={inquiry.inquiryCode} id={index}>
                            <td  key={inquiry.inquiryCode} id={index} style={{width : "100px"}}>[내 문의]</td>
                            <td  key={inquiry.inquiryCode} id={index} >{inquiry.title}</td>
                            <td  key={inquiry.inquiryCode} id={index} >{inquiry.createDate.substr(0,10)}</td>
                        </tr>))}
                </table>
            </div>
            {/* 페이지 버튼 */}
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default ServiceCenter;