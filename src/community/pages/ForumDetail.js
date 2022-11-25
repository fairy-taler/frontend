import style from "../static/css/ForumDetail.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { callGetDetailForumAPI, callInsertCommentAPI} from "../../apis/community/ForumAPICalls"
import { NavLink, useParams } from "react-router-dom"
import Profile from "../../member/pages/Profile"

function ForumDetail(){
    const dispatch = useDispatch();
    const  params = useParams();
    const [commentContent, setCommentContent] = useState(true);
    const result= useSelector(state => state.forumReducer);
    const member= useSelector(state => state.memberReducer);
    const forum = result?.forum;
    const [clickProfile, setClickProfile] = useState(null); 

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetDetailForumAPI(params[1]));
    },[,commentContent])

    // 회원 아이디 보여주기 
    const profile = null; 
    const onClickNickname = (memberId) =>{
        return ()=>{
            setClickProfile(memberId)
            console.log("memberId" , memberId)
        }
    }
    
    // 헤더 설정 변경
    const header = useSelector(state => state.headerReducer);
    
    const nextResult = {"tag" :"자유",
                        "title" :"게임 제작할 때 팁", 
                                "content" :"안녕하세요. " 
                                            + " \n ID 보호 모드를 해제하고 싶어요.",
                                "date" :"2022-10-13"
                        }
    const onClickdata = (e) =>{
        const commentInput = document.getElementById("commentInput");
        console.log("commnetInput value : ", commentInput.value);
        const func = callInsertCommentAPI(params[1], commentInput.value);
        func();
        commentInput.value ="";
        setCommentContent(!commentContent);
    }
    console.log(commentContent);

    return (
        <div className={style.noticeBox}>
            {/* 자주 찾는 도움말 제목 이미지 */}
            <div className={style.betweenBox}>
                {/* 자주 찾는 도움말 타이틀 */}
                <div className={style.forumTitle}> 자유 게시판 </div>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 목록 / 이전으로 버튼 */}
            <NavLink to="/forums"><div className={style.subTitleBox}>
                <img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/>
            </div></NavLink>
            {/* 게시글 제목 */}
            <div className={style.contentTitleBox}>
                <div className={style.contentitle}> 
                    {forum?.title}
                </div>
                <div className={style.contentNickname} onClick={onClickNickname(forum?.memberId)}>작성자 : {forum?.nickname}
                {clickProfile == null ? null : <Profile value={clickProfile} /> }
                </div>
            </div>
            
            {/* 게시글 날짜 */}
            <div className={style.contentDateBox}>
                {forum?.createDate.substr(0,10)}
            </div>
            {/* 게시글 내용 */}
            <div className={style.contentContentBox}>
                {forum?.content}
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 댓글창 */}
            <div className={style.commentBox}>
                <div className={style.commentTitle}>댓글 총 {forum?.comments?.length}개</div>
                {/* 댓글 작성 */}
                <div className={style.commentInputBox}>
                        <div>{member?.nickname}</div>
                        <input id="commentInput" className={style.commentInput} placeholder="댓글 추가..."/>
                        <button onClick={onClickdata}>댓글</button>
                </div>
                {/* 댓글 목록 */}
                <div>
                    {forum?.comments?.map((comment, index)=>(<div className={style.commentsBox}>
                                                        <div className={style.id}>{comment.nickname}</div>
                                                        <div className={style.contents}>{comment.content}</div>
                                                        <div className={style.createDate}>{comment.createDate.substr(0,10)}</div>
                                                    </div>))}
                </div>
            </div>
            {/* 다음 게시글 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.nextContentsBox}>
                <span style={{width : "5%"}}><img src={require("../static/images/under-arrow-btn.png")}/></span>
                <span style={{width : "10%"}}>[{nextResult.tag}]</span>
                <span style={{width : "75%"}}>{nextResult.title}</span>
                <span >{nextResult.date}</span>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
        </div>
    )
}

export default ForumDetail;