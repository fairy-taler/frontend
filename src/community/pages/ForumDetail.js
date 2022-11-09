import style from "../static/css/ForumDetail.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";

function ForumDetail(){
    //공지사항 정보 불러오기
    const result = {"tag" :"자유",
                    "title" :"안녕하세요~", 
                    "content" :"안녕하세요.오늘 처음 접속해봐요 다들 반갑습니다~",
                    "date" :"2022-10-23"
                    }
    const nextResult = {"tag" :"자유",
                        "title" :"게임 제작할 때 팁", 
                                "content" :"안녕하세요. " 
                                            + " \n ID 보호 모드를 해제하고 싶어요.",
                                "date" :"2022-10-13"
                        }
                     
    const comments =[ {"id" : "yuri" , "contents" : "안녕하세요~"},
                      {"id" : "jihi" , "contents" : "반갑습니다!"} ]
   
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    return (
        <div className={style.noticeBox}>
            {/* 자주 찾는 도움말 제목 이미지 */}
            <div className={style.betweenBox}>
                {/* 자주 찾는 도움말 타이틀 */}
                <div className={style.forumTitle}>자유 게시판</div>
                {/* <img className={style.titleImg} src={require("../static/images/faq-title.png")}/> */}
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 목록 / 이전으로 버튼 */}
            <div className={style.subTitleBox}>
                <img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/>
            </div>
            {/* FAQ 제목 */}
            <div className={style.contentTitleBox}> 
                {result.title}
            </div>
            {/* FAQ 날짜 */}
            <div className={style.contentDateBox}>
                {result.date}
            </div>
            {/* FAQ 내용 */}
            <div className={style.contentContentBox}>
                {result.content}
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 댓글창 */}
            <div className={style.commentBox}>
                <div className={style.commentTitle}>댓글 총 2개</div>
                {/* 댓글 작성 */}
                <div className={style.commentInputBox}>
                        <div>fairytaler</div>
                        <input className={style.commentInput} placeholder="댓글 추가..."/>
                        <button>댓글</button>
                </div>
                {/* 댓글 목록 */}
                <div>
                    {comments.map((comment, index)=>(<div className={style.commentsBox}>
                                                        <div className={style.id}>{comment.id}</div>
                                                        <div className={style.contents}>{comment.contents}</div>
                                                    </div>))}
                </div>
            </div>
            {/* 다음 FAQ */}
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