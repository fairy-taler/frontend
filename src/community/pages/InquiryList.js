import style from "../static/css/ServiceCenter.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



function InquiryList(){
    //공지사항 정보 불러오기
    const results = [{"tag":"공지", "title" : "10월 정기점검 안내", "author": "test01", "status": "Y", "date" :"2022-10-23"},
                     {"tag":"공지", "title" : "9월 정기점검 안내", "author": "test01", "status": "Y", "date" :"2022-9-23"},
                     {"tag":"공지", "title" : "8월 정기점검 안내", "author": "test01", "status": "N", "date" :"2022-8-23"}];

    const pages = Array(10).fill()
    
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();
    // 문의 목록 리스트 클릭 이벤트
    const toInquiryInfo = (e) =>{
        navigate(`/inquiryresponse/${e.target.id}`);
    }
    // 1대1문의하기 클릭 이벤트
    return (
        <div className={style.noticeBox}>
            <img className={style.subTitleImg} src={require("../static/images/my-inquiry-title.png")}/>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 문의 목록 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {results.map((result, index)=>(
                        <tr onClick={toInquiryInfo} key={index} id={index}>
                            <td  key={index} id={index} style={{width : "100px"}}>[{result.tag}]</td>
                            <td  key={index} id={index} >{result.title}</td>
                            <td  key={index} id={index} >{result.author}</td>
                            <td  key={index} id={index} >{result.status == 'Y' ? "답변완료" : "답변 대기중"}</td>
                            <td  key={index} id={index} >{result.date}</td>
                        </tr>))}
                </table>
            </div>
            {/* 페이지 버튼 */}
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default InquiryList;