import style from "../static/css/NoticeListForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { callGetNoticesAPI, callGetSearchNoticesAPI } from "../../apis/community/NoticeAPICalls"
import { callGetFaqAPI, callGetSearchFaqAPI } from "../../apis/community/FaqAPICalls"

function NoticeListForManagement(){
    // 카테고리 설정 초기화
    const [noticeCategory, setNoticeCategory] = useState("공지");
    // 공지사항 정보 불어오기
    const result = useSelector(state => state.noticeReducer);
    const result2 = useSelector(state => state.faqReducer);
    const notices = result?.noticeList?.content;
    const faqs = result2?.faqList?.content;
    let datas  = null;
    if(noticeCategory == "공지") datas = notices;
    else  datas  = faqs;

    const pages = Array(10).fill()
    
    // 헤더 설정 변경
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetNoticesAPI({	
            page:0, size:10}
        ));
    },[])

    const onChangeSelectCategory = (e) =>{
        setNoticeCategory(e.target.value);
        if(e.target.value == "공지"){
            dispatch(callGetNoticesAPI({	
                page:0, size:10}
            ));
        }else{
            dispatch(callGetFaqAPI({	
                page:0, size:10}
            ));
        }
    }
    // 검색 이벤트 
    const onClickSearchButton = () => {
        const title = document.getElementById("searchInput").value;
        if(noticeCategory=="공지")
        dispatch(callGetSearchNoticesAPI({ 
            "title" : title	
          , "pageable": {page:0, size:10}}
      ));
        else
        dispatch(callGetSearchFaqAPI({ 
            "title" : title	
          , "pageable": {page:0, size:10}}
      ));
         
    }

    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    const toNoticesInfo = (e) =>{
        console.log(
            "url", e.target)
        if(noticeCategory=="공지")
        navigate(
            `/managementNotices/${e.target.id}`
          );
        else
        navigate(
            `/managementFaqs/${e.target.id}`
          );
    }
    
    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 공지사항 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/notice-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <div className={style.searchInputBox}>
                        <input id = "searchInput" placeholder="검색어를 입력하세요."/>
                        <img src={require("../static/images/search-btn.png")} onClick={onClickSearchButton}/>
                    </div>
                    <select className={style.searchSelect} onChange={onChangeSelectCategory}><option value="공지">공지</option><option value="FAQ">FAQ</option></select>
                    <NavLink to="/insertNotice"><img style={{margin : "0", height : "40px", width : "120px", margin : "5px"}} src={require("../static/images/insert-btn.png")}/></NavLink>
                </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 공지사항 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {datas?.map((data, index)=>(
                            <tr onClick={toNoticesInfo} id={index}>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "10%" , textAlign:"left"}}>[{noticeCategory}]</td>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "60%" , textAlign:"left"}}>{data?.title}</td>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "10%" , textAlign:"left"}}>{data?.public ? "공개" : "비공개"}</td>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "10%", textAlign:"right"}}>{data?.createDate?.substr(0,10)}</td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default NoticeListForManagement;