import style from "../static/css/InsertInquiry.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";

function InquiryResponse(){
    //공지사항 정보 불러오기
    const result = {"tag" :"문의",
                    "title" :"구매한 동화책이 보이지 않아요.", 
                    "content" :"안녕하세요. " 
                                + " \n 구매한 동화책이 보이지 않아요. 어디서 확인할 수 있나요?",
                    "date" :"2022-10-23"
                    }
    const nextResult = {"tag" :"문의",
                        "title" :"게임 오류 목록 확인", 
                                "content" :"안녕하세요. " 
                                            + " \n ID 보호 모드를 해제하고 싶어요.",
                                "date" :"2022-10-13"
                        }
                     
   
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    return (
        <div className={style.noticeBox}>
            {/* 1대1문의 제목 이미지 */}
            <div className={style.betweenBox}>
                <img className={style.titleImg} src={require("../static/images/my-inquiry-title.png")}/>
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
            
            <div className={style.betweenBox}>
                <img className={style.titleImg} src={require("../static/images/my-inquiry-title.png")}/>
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

export default InquiryResponse;