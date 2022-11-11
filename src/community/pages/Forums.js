import style from "../static/css/Forums.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { callGetForumsAPI, callGetForumsByCategoryAPI, callGetForumsByMemberCodeAPI } from "../../apis/community/ForumAPICalls"


function Forums(){
    //공지사항 정보 불러오기
    // api로 게시판 정보 조회 후 데이터 저장
    const result = useSelector(state => state.forumReducer);
    // const forums = null;
    
    const forums = result?.forumList?.content;

    // 총 페이지 설정
    const totalPages = result?.forumList?.totalPages
    const pages = Array(totalPages).fill()

    // 페이지 버튼 설정 
    const [currentPage, setCurrentPage] = useState(1);

    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    const toNoticesInfo = (e) =>{
        console.log(
            "url", e.target)
        navigate(
            `/forums/${e.target.id}`
          );
        
    }
    const onClickPageButton = (e) =>{  
        setCurrentPage(e.target.id)
    }
    const onClickCategory = (e) => {
        console.log(e.target.textContent)
        dispatch(callGetForumsByCategoryAPI(e.target.textContent,{	
            page:0, size:10}
        ));
    }
    const onClickMyPost = () => {
        dispatch(callGetForumsByMemberCodeAPI({	
            page:0, size:10}
        ));
    }
    
    // 헤더 설정 변경
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetForumsAPI({	
            page:0, size:10}
        ));
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
                    <button className={style.categoryBtn} onClick={onClickCategory}>자유</button>
                    <button className={style.categoryBtn} onClick={onClickCategory}>정보공유</button>
                    <button className={style.categoryBtn} onClick={onClickCategory}>동화</button>
                </div>
                <div className={style.insertButtonBox}>

                <div><img className={style.insertButton} src={require("../static/images/insert-btn.png")} onClick={onClickMyPost}/></div>
                <NavLink to="/insertForum"><img className={style.insertButton} src={require("../static/images/insert-btn.png")}/></NavLink>
            </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 게시글 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {forums==null? null:forums.map((forum, index)=>(
                            <tr onClick={toNoticesInfo} id={forum.forumCode}>
                                    <td id={forum.forumCode} style={{width : "100px" , textAlign:"left"}}>[{forum.category}]</td>
                                    <td id={forum.forumCode}>{forum.title}</td>
                                    <td id={forum.forumCode} style={{width : "120px", textAlign:"right"}}>{forum.nickname}</td>
                                    <td id={forum.forumCode} style={{width : "120px", textAlign:"right"}}>{forum.createDate.substr(0,10)}</td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton} onClick={onClickPageButton} style={currentPage==index+1? {fontWeight:"bold", color:"black"}:null}id={index+1}>{index+1}</span>))}</div>
        </div>
    )
}

export default Forums;