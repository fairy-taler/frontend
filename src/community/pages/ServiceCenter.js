import style from "../static/css/ServiceCenter.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";



function ServiceCenter(){
    //공지사항 정보 불러오기
    const results = [{"tag":"공지", "title" : "10월 정기점검 안내", "date" :"2022-10-23"},
                     {"tag":"공지", "title" : "9월 정기점검 안내", "date" :"2022-9-23"},
                     {"tag":"공지", "title" : "8월 정기점검 안내", "date" :"2022-8-23"}];

    const pages = Array(10).fill()
    
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    return (
        <div className={style.noticeBox}>
            {/* 고객센터 타이틀 */}
            <div>
            <img className={style.titleImg} src={require("../static/images/service-center-title.png")}/>
            </div>
            {/* 검색창 */}
            <div className={style.insertButtonBox}>
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            {/* 자주 찾는 도움말 */}
            {/* 자주 찾는 도움말 제목 */}
            <img className={style.line} src={require("../static/images/line.png")} />
            <img className={style.subTitleImg} src={require("../static/images/faq-title.png")}/>
            <img className={style.line} src={require("../static/images/line.png")} />
            {/* 자주 찾는 도움말 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {results.map((result, index)=>(<tr><td style={{width : "100px"}}>[{result.tag}]</td><td>{result.title}</td><td>{result.date}</td></tr>))}
                </table>
            </div>
            {/* 페이지 버튼 */}
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
            {/* 나의 문의 목록 */}
            {/* 1대1 문의하기 버튼 */}
            <div className={style.insertButtonBox}>
                <img className={style.insertButton} src={require("../static/images/inquiry-btn.png")} />
            </div>
            {/* 나의 문의 목록 제목 */}
            <img className={style.line} src={require("../static/images/line.png")} />
            <img className={style.subTitleImg} src={require("../static/images/my-inquiry-title.png")}/>
            <img className={style.line} src={require("../static/images/line.png")} />
            {/* 문의 목록 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {results.map((result, index)=>(<tr><td style={{width : "100px"}}>[{result.tag}]</td><td>{result.title}</td><td>{result.date}</td></tr>))}
                </table>
            </div>
            {/* 페이지 버튼 */}
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default ServiceCenter;