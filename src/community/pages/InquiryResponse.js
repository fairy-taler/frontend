import style from "../static/css/InsertInquiry.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import { callGetDetailInquiryAPI, callInsertInquiryAnswerAPI } from "../../apis/community/InquiryAPICalls"
function InquiryResponse(){
    const  params = useParams();
    // 문의 상세 정보 조회
    const result = useSelector(state => state.inquiryReducer);
    const inquiry = result?.inquiry;

    const [change, setChange] = useState(true);
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK}); 
        dispatch(callGetDetailInquiryAPI(params[1]));
    },[, change])
    const onClickInsertAnswer= () => {
        const answer = document.getElementById("answerInput").value
        const func = callInsertInquiryAnswerAPI({"inquiryCode" : params[1], "answer" : answer  })
        func();
        alert("답변이 등록되었습니다.");
        setChange({...change});
    }

    return (
        <div className={style.noticeBox}>
            {/* 1대1문의 제목 이미지 */}
            <div className={style.betweenBox}>
                <div className={style.inquiryTitle}>문의 확인</div>
                {inquiry?.answer == null ? <div>답변 미등록 </div>:<div>답변 완료</div>}
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 목록 / 이전으로 버튼 */}
            <div className={style.subTitleBox}>
                <img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/>
            </div>
            {/* FAQ 제목 */}
            <div className={style.contentTitleBox}> 
                {inquiry?.title}
            </div>
            {/* FAQ 날짜 */}
            <div className={style.contentDateBox}>
                {inquiry?.createDate?.substr(0,10)}
            </div>
            {/* FAQ 내용 */}
            <div className={style.contentContentBox}>
                {inquiry?.content}
            </div>

            <img className={style.lineImg} src={require("../static/images/line.png")} />
            
            <div className={style.betweenBox}>
                <div className={style.inquiryTitle}>답변</div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 내용 입력란 */}
            { inquiry?.answer != null ? 
            <div className={style.contentContentBox}>
                {inquiry?.answer}
            </div>
            :    
            <div>
                <div className={style.contentInputBox}> 
                    <textarea id = "answerInput" className={style.contentInput} placeholder="내용을 입력해주세요."/>
                </div>
                {/* 등록하기 버튼 */}
                <img className={style.lineImg} src={require("../static/images/line.png")} />
                <div className={style.insertButtonBox}>
                    <img onClick={onClickInsertAnswer} className={style.insertButton} src={require("../static/images/insert-btn.png")}/>
                </div>
            </div>
            }

           
        </div>
    )
}

export default InquiryResponse;