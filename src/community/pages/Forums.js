import style from "../static/css/Forums.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Forums(){
    //공지사항 정보 불러오기
    const results = [{"id":"1","tag":"정보공유", "title" : "어제 신간 동화책 리스트 다들 보셨나요?", "author": "test01", "date" :"2022-10-23"},
                     {"id":"1","tag":"잡담", "title" : "학생들이 많이 안 모여요 ㅠㅠ", "author": "test01", "date" :"2022-10-23"},
                     {"id":"1","tag":"잡담", "title" : "점심 추천해주세용ㅎㅎ ", "author": "test01", "date" :"2022-10-23"}];

    const pages = Array(10).fill()
    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    const toNoticesInfo = (e) =>{
        console.log(
            "url", e.target)
        navigate(
            `/forums/${e.target.id}`
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
                <div className={style.forumTitle}> 자유 게시판 </div>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            <div className={style.buttonGroup}>
                <div>
                    <button className={style.categoryBtn}> 잡담 </button>
                    <button className={style.categoryBtn}> 정보공유</button>
                    <button className={style.categoryBtn}> 동화자랑 </button>
                </div>
                <div className={style.insertButtonBox}>

                <img className={style.insertButton} src={require("../static/images/insert-btn.png")}/>

                <NavLink to="/insertForum"><img className={style.insertButton} src={require("../static/images/insert-btn.png")}/></NavLink>
            </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 게시글 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {results.map((result, index)=>(
                            <tr onClick={toNoticesInfo} id={index}>
                                    <td id={index} style={{width : "100px" , textAlign:"left"}}>[{result.tag}]</td>
                                    <td id={index}>{result.title}</td>
                                    <td id={index} style={{width : "120px", textAlign:"right"}}>{result.author}</td>
                                    <td id={index} style={{width : "120px", textAlign:"right"}}>{result.date}</td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default Forums;