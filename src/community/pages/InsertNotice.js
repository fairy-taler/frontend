import style from "../static/css/InsertNotice.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {callInsertFaqAPI } from "../../apis/community/FaqAPICalls"
import {callInsertNoticeAPI } from "../../apis/community/NoticeAPICalls"

function InsertNotice(){
    // 헤더 설정 세팅
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [noticeCategory, setNoticeCategory] = useState("공지");
    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    //등록하기 버튼 클릭 이벤트 
    const onClickInsertButton = () => {
        alert("공지사항을 등록하였습니다.")
        const title = document.getElementById("titleInput").value;
        const content = document.getElementById("contentInput").value;
        if(noticeCategory == "공지"){
            const func = callInsertNoticeAPI({"title": title , "content" : content});
            func();
        }
        else {
            const func = callInsertFaqAPI({"title": title , "content" : content});
            func();
        }
        navigate(`/managementNotices`);
    }
    const onChangeNoticeCategory = (e) => {
        setNoticeCategory(e.target.value)
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
                    <input id="titleInput" className={style.titleInput}  placeholder="제목을 입력해주세요."/>
                </div>
                <select onChange={onChangeNoticeCategory}>
                    <option>공지</option>
                    <option>FAQ</option>
                </select>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 내용 입력란 */}
            <div className={style.contentInputBox}> 
                <textarea id="contentInput" className={style.contentInput} placeholder="내용을 입력해주세요."/>
            </div>
            {/* 등록하기 버튼 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.insertButtonBox}>
                <img className={style.insertButton} src={require("../static/images/insert-btn.png")} onClick={onClickInsertButton}/>
            </div>
        </div>
    )
}

export default InsertNotice;