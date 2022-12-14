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
        <div className={style.noticeBox} >
            <div className={style.board} >
            <div className={style.betweenBox}>
                {/* 타이틀 */}
                {/* <div className={style.forumTitle}> 자유 게시판 </div> */}
                <img className={style.forumTitle} src={require('../static/images/forumTitle.png')}/>
            </div>
            {/* border line */}
            {/* <img className={style.lineImg} src={require("../static/images/line.png")} /> */}
            {/* 목록 / 이전으로 버튼 */}
          
            {/* 게시글 제목 */}
            <div className={style.contentTitleBox}>
            <NavLink to="/forums"><div className={style.subTitleBox}>
            <img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/>
            </div></NavLink>
            <img className={style.lineImg} src={require("../static/images/line2p.png")} />
                <div className={style.contentTitle}> 
                        {forum?.title}
                </div>
            <img className={style.lineImg} src={require("../static/images/line2p.png")} />
                <div className={style.titleProfile}  onClick={onClickNickname(forum?.memberId)}>
                    <img className={style.profileImg} src={forum?.profileUrl}></img> 
                    <div>
                        <div className={style.contentNickname} onClick={onClickNickname(forum?.memberId)}>{forum?.nickname}
                        <div>
                            {forum?.createDate.substr(0,10)}
                        </div>      
                    </div>
                </div>
                {clickProfile == null ? null : <Profile value={clickProfile} /> }
                </div>
                
                <div className={style.contentContentBox}>
                    {forum?.content}
                </div>
            {/* <img className={style.lineImg} src={require("../static/images/line2p.png")} /> */}
            </div>
            {/* 게시글 내용 */}
            
            {/* 다음 게시글 */}
            </div>
            {/* 댓글창 */}
            <div className={style.commentBox}>
                <div className={style.commentTitle}>댓글 총 {forum?.comments?.length}개</div>
                {/* 댓글 작성 */}
                <div className={style.commentInputBox}>
                        <input id="commentInput" className={style.commentInput} placeholder="댓글 추가..."/>
                        <button onClick={onClickdata}>댓글</button>
                </div>
                {/* 댓글 목록 */}
                <div >
                    {forum?.comments?.map((comment, index)=>(<div className={style.commentsBox} onClick={onClickNickname(comment.memberId)}>
                                                        <img className={style.profileImg} src={comment?.profileUrl}></img> 
                                                        <div className={style.id}>{comment.nickname}</div>
                                                        <div className={style.contents}>{comment.content}</div>
                                                        <div className={style.createDate}>
                                                            <div>{comment.createDate.substr(5,5)}</div>
                                                            <div>{comment.createDate.substr(11,5)}</div>
                                                        </div>
                                                    </div>))}
                </div>
            </div>
        </div>
    )
}

export default ForumDetail;