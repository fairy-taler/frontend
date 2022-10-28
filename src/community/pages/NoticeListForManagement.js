import style from "../static/css/NoticeListForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function NoticeListForManagement(){
    //공지사항 정보 불러오기
    const results = [{"id":"1","tag":"공지", "title" : "10월 정기점검 안내", "date" :"2022-10-23", "state" : "public"},
                     {"id":"1","tag":"공지", "title" : "10월 정기점검 안내", "date" :"2022-10-23", "state" : "public"},
                     {"id":"1","tag":"공지", "title" : "10월 정기점검 안내", "date" :"2022-10-23", "state" : "public"},
                     {"id":"1","tag":"공지", "title" : "10월 정기점검 안내", "date" :"2022-10-23", "state" : "private"}];

    const pages = Array(10).fill()
    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    const toNoticesInfo = (e) =>{
        console.log(
            "url", e.target)
        navigate(
            `/managementNotices/${e.target.id}`
          );
    }
    
    // 헤더 설정 변경
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 공지사항 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/notice-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <NavLink to="/insertNotice"><img style={{height : "36px", width : "108px", margin : "5px"}} src={require("../static/images/insert-btn.png")}/></NavLink>
                    <select className={style.searchSelect}><option>문의</option><option>공지</option></select>
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
                    {results.map((result, index)=>(
                            <tr onClick={toNoticesInfo} id={index}>
                                    <td id={index} style={{width : "10%" , textAlign:"left"}}>[{result.tag}]</td>
                                    <td id={index} style={{width : "60%" , textAlign:"left"}}>{result.title}</td>
                                    <td id={index} style={{width : "10%" , textAlign:"left"}}>{result.state == "public"? "공개" : "비공개"}</td>
                                    <td id={index} style={{width : "10%", textAlign:"right"}}>{result.date}</td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default NoticeListForManagement;