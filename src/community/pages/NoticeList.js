import style from "../static/css/NoticeList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {callGetNoticesAPI } from "../../apis/community/NoticeAPICalls"

function NoticeList(){
    // 공지사항 정보 불러오기
    // api로 공지사항 정보 조회 후 데이터 저장
    const result = useSelector(state => state.noticeReducer);
    const notices = result?.noticeList?.content;
    console.log("data", notices);
    
    //  페이징 처리
    const [currentPage, setCurrentPage] = useState(0);
    const pages = Array(result?.forumList?.totalPages).fill()

    const onClickPageButton = (e) =>{  
        dispatch(callGetNoticesAPI({	
            page:e.target.id-1, size:10}
        ));
    }
    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    const toNoticesInfo = (e) =>{
        console.log(
            "url", e.target)
        navigate(
            `/notices/${e.target.id}`
          );
    }
    
    // 헤더 설정 변경
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetNoticesAPI({	
            page:0, size:10}
        ));
    },[])

    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 공지사항 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/notice-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 공지사항 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {notices?.map((notice, index)=>(
                            <tr onClick={toNoticesInfo} id={notice.noticeCode}>
                                    <td id={notice.noticeCode} style={{width : "50px" , textAlign:"left"}}>[공지]</td>
                                    <td id={notice.noticeCode}>{notice.title}</td>
                                    <td id={notice.noticeCode} style={{width : "120px", textAlign:"right"}}>{notice.createDate.substr(0,10)}</td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton} style={currentPage==index+1? {fontWeight:"bold", color:"black"}:null}  onClick={onClickPageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default NoticeList;