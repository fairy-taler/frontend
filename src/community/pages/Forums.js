import style from "../static/css/Forums.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { callGetForumsAPI, callGetForumsByCategoryAPI, callGetForumsByMemberCodeAPI, callGetSearchForums } from "../../apis/community/ForumAPICalls"

function Forums(){
    //게시판 정보 불러오기
    // api로 게시판 정보 조회 후 데이터 저장
    const result = useSelector(state => state.forumReducer);
    // const forums = null;
    const forums = result?.forumList?.content;

    const onClickNickname = (memberId) =>{
        return ()=>{
            console.log("memberId" , memberId)
        }
    }

    // 총 페이지 설정
    const totalPages = result?.forumList?.totalPages
    const pages = Array(totalPages).fill()

    // 페이지 버튼 설정 
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("all");


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
        switch(category){
            case "all":
                dispatch(callGetForumsAPI({	
                    page:e.target.id-1, size:10}
                ));
                break;
            case "my": 
                dispatch(callGetForumsByMemberCodeAPI({	
                    page:e.target.id-1, size:10}
                ));
                break;
            default:
                dispatch(callGetForumsByCategoryAPI(category,{	
                    page:e.target.id-1, size:10}
                ));
                break;
        }
    }
    const onClickCategory = (e) => {
        setCategory(e.target.id)
        console.log("category", e.target.id)
        dispatch(callGetForumsByCategoryAPI( e.target.id,{	
            page:0, size:10}
        ));
        setCurrentPage(0)
    }
    const onClickMyPost = () => {
        setCategory("my")
        dispatch(callGetForumsByMemberCodeAPI({	
            page:0, size:10}
        ));
    }
    const onClickAllPost = (e) => {
        setCategory("all")
        dispatch(callGetForumsAPI({	
            page:e.target.id-1, size:10}
        ));
    }
    // 검색 이벤트 
    const onClickSearchButton = () => {
        const title = document.getElementById("searchInput").value;
        dispatch(callGetSearchForums(title,{	
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
                {/* <div className={style.forumTitle}> 자유 게시판 </div> */}
                <img className={style.forumTitle} src={require('../static/images/forumTitle.png')}/>
                {/* 검색창 */}
            </div>
            <div className={style.board}>
                <div className={style.buttonGroup}>
                    <div className={style.buttonGroup1}>
                        {/* <img className={style.categoryBtn} src={require("../static/images/all.png")} onClick={onClickAllPost} id="all"/> */}
                        
                        <img className={style.categoryBtn} src={require("../static/images/all.png")} onClick={()=>{alert("hello")}} id="all"/>
                        <img className={style.categoryBtn} src={require("../static/images/data.png")} onClick={onClickCategory} id="정보공유"/>
                        <img className={style.categoryBtn} src={require("../static/images/tale.png")} onClick={onClickCategory} id="동화"/>
                        <img className={style.categoryBtn} src={require("../static/images/my-forum.png")} onClick={onClickMyPost} id="자유"/>
                        {/* <button className={style.categoryBtn} onClick={onClickCategory}>자유</button>
                        <button className={style.categoryBtn} onClick={onClickCategory}>정보공유</button>
                        <button className={style.categoryBtn} onClick={onClickCategory}>동화</button>
                        <button className={style.categoryBtnGray} onClick={onClickMyPost}>내 글</button> */}
                    </div>
                    <div style={{display:"flex"}} className={style.buttonGroup2}>
                        <div className={style.searchBox} >
                            <input placeholder="검색어를 입력하세요." id="searchInput"/>
                            <img src={require("../static/images/search-btn.png")} onClick={onClickSearchButton} />
                        </div>
                    </div><NavLink to="/insertForum"  className={style.insertBtnBox} ><img className={style.insertBtn} src={require("../static/images/insert-button.png")} onClick={onClickAllPost} id="자유"/></NavLink>
                    
                    {/* <NavLink to="/insertForum"><img className={style.insertButton} src={require("../static/images/insert-btn.png")} /></NavLink> */}
                {/* </div> */}
                </div>
                {/* 게시글 리스트 */}
                <div className={style.tableBox} >
                    <table className={style.communityTable}>
                        {forums==null? null:forums.map((forum, index)=>(
                                <tr id={forum.forumCode} style={{ verticalAlign:"center"}}>
                                        <td id={forum.forumCode} className={style.td_code} >[{forum.category}]</td>
                                        <td id={forum.forumCode} className={style.td_title} onClick={toNoticesInfo} >{forum.title}</td>
                                        <td id={forum.forumCode} className={style.td_user_id} onClick={onClickNickname(forum.memberId)}>{forum.nickname}</td>
                                        <td id={forum.forumCode} className={style.td_date} >{forum.createDate.substr(5,5)}</td>
                                </tr>
                        ))}
                    </table>
                </div>      
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton} onClick={onClickPageButton} style={currentPage==index+1? {fontWeight:"bold", color:"black"}:null}id={index+1}>{index+1}</span>))}</div>
        </div>
    )
}

export default Forums;