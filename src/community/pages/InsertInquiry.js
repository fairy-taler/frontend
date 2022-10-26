import style from "../static/css/InsertInquiry.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";

function InsertInquiry(){
    // 헤더 설정 세팅
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    return (
        <div className={style.noticeBox}>
            {/* 1대1 문의하기 이미지 */}
            <div className={style.betweenBox}>
                {/* 1대1문의하기 타이틀 */}
                <img className={style.titleImg} src={require("../static/images/inquiry-title.png")}/>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 제목 입력란 */}
            <div className={style.subTitleBox}>
                <div>
                    <img className={style.titleImg} src={require("../static/images/title-text.png")}/>
                </div>
                <div className={style.titleInputBox}>
                    <input className={style.titleInput}  placeholder="제목을 입력해주세요."/>
                </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 내용 입력란 */}
            <div className={style.contentInputBox}> 
                <textarea className={style.contentInput} placeholder="내용을 입력해주세요."/>
            </div>
            {/* 등록하기 버튼 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.insertButtonBox}>
                <img className={style.insertButton} src={require("../static/images/insert-btn.png")}/>
            </div>
        </div>
    )
}

export default InsertInquiry;