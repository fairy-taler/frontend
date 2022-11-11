import style from "../static/css/InsertForum.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callInsertForumAPI } from "../../apis/community/ForumAPICalls"

function InsertForum(){
    // 헤더 설정 세팅
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    //등록하기 버튼 클릭 이벤트 
    
    const navigate = useNavigate();
    const onClickInsertButton = () => {
        const title = document.getElementById("titleInput").value;
        const category = document.getElementById("categoryInput").value;
        const content = document.getElementById("contentInput").value;
        
        const func = callInsertForumAPI({"title":title, "category":category,"content":content});
        console.log("title : " + title +  "category : " + category + " content : " + content);
        func();
        alert("게시글을 등록하였습니다.")
        navigate(`/forums`);
    }

    return (
        <div className={style.noticeBox}>
            {/* 공지사항 제목 이미지 */}
            <div className={style.betweenBox}>
                {/* 공지사항 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/notice-title.png")}/>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 제목 입력란 */}
            <div className={style.subTitleBox}>
                <div>
                    <img className={style.titleImg} src={require("../static/images/title-text.png")}/>
                </div>
                <div className={style.titleInputBox}>
                    <input id="titleInput" className={style.titleInput}  placeholder="제목을 입력해주세요." />
                </div>
                <select id="categoryInput">
                    <option>자유</option>
                    <option>정보공유</option>
                    <option>동화</option>
                </select>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 내용 입력란 */}
            <div className={style.contentInputBox}> 
                <textarea id="contentInput" className={style.contentInput} placeholder="내용을 입력해주세요."/>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 첨부파일 입력란 */}
            <div className={style.insertFileBox}> 
                <input className={style.insertFileInput} type="file"/>
            </div>
            {/* 등록하기 버튼 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.insertButtonBox}>
                <img className={style.insertButton} src={require("../static/images/insert-btn.png")} onClick={onClickInsertButton}/>
            </div>
        </div>
    )
}

export default InsertForum;