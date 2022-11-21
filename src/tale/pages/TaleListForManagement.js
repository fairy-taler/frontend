import style from "../static/css/TaleListForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { callGetTalesAPI,callGetTalesByTitleAPI } from "../../apis/tale/TaleAPICalls"

function TaleListForManagement(){
    // 카테고리 설정 초기화
    const [noticeCategory, setNoticeCategory] = useState("공지");
    // 신고 정보 불어오기
    const result = useSelector(state => state.taleManageReducer)?.taleList;
    console.log("data", result)
    const tales = result?.content;
    const pages = Array(result?.totalPages).fill()
    
    // 헤더 설정 변경
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetTalesAPI({	
            page:0, size:10}
        ));
    },[])
    const onClickPageButton = (e) =>{
        console.log(e.target.id);
        dispatch(callGetTalesAPI({	
            page:e.target.id, size:10}
        ));
    }
    const onClickSearchButton = (e) =>{
        console.log(document.getElementById("searchInput").value);
        const searchText = document.getElementById("searchInput").value;
        dispatch(callGetTalesByTitleAPI({pageable:{
            page:e.target.id, size:10}, title:searchText}
        ));
    }
    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();

    
    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 타이틀 */}
                <div className={style.title}>동화 목록 (총 {result?.totalElements}개)</div>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <select className={style.searchSelect} ><option value="이름">제작자</option><option value="제목">제목</option></select>
                    <div className={style.searchInputBox}>
                        <input id="searchInput" placeholder="검색어를 입력하세요."/>
                        <img onClick={onClickSearchButton} src={require("../static/images/search-btn.png")}/>
                    </div>
                </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 공지사항 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {tales?.map((data, index)=>(
                            <tr id={index}>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "10%" , textAlign:"left"}}>[{data?.id}]</td>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "60%" , textAlign:"left"}}>{data?.title}</td>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "10%" , textAlign:"left"}}>{data?.createAt?.substr(0,10)}</td>
                                    <td id={noticeCategory=="공지"? data?.noticeCode : data?.faqCode} style={{width : "10%", textAlign:"right"}}>{data?.createDate?.substr(0,10)}</td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span id={index} className={style.pageButton} onClick={onClickPageButton}>{index+1}</span>))}</div>
        </div>
    )
}
export default TaleListForManagement;