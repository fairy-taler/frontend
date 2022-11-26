import style from "../static/css/InquiryList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { callGetInquirysAPI } from "../../apis/community/InquiryAPICalls"

function InquiryList(){
    const result = useSelector(state => state.inquiryReducer);
    const inquirys = result?.inquiryList?.content
    console.log(inquirys)
    //FAQ 정보 불러오기
    const results = [{"tag":"공지", "title" : "10월 정기점검 안내", "author": "test01", "status": "Y", "date" :"2022-10-23"},
                     {"tag":"공지", "title" : "9월 정기점검 안내", "author": "test01", "status": "Y", "date" :"2022-9-23"},
                     {"tag":"공지", "title" : "8월 정기점검 안내", "author": "test01", "status": "N", "date" :"2022-8-23"}];

    const pages = Array(result?.inquiryList?.totalPages).fill()
    // 페이지 버튼 클릭
    const onClickPageButton = (e) => {
        dispatch(callGetInquirysAPI({	
            page:e.target.id, size:10}
        ));
    }
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetInquirysAPI({	
            page:0, size:10}
        ));
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
            <div className={style.inquiryTitle}>등록된 문의 목록</div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 문의 목록 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {inquirys?.map((inquiry, index)=>(
                        <tr onClick={toInquiryInfo} key={index} id={inquiry.inquiryCode}>
                            <td  key={index} id={inquiry.inquiryCode} style={{width : "100px"}}>[문의]</td>
                            <td  key={index} id={inquiry.inquiryCode} >{inquiry?.title}</td>
                            <td  key={index} id={inquiry.inquiryCode} >{}</td>
                            <td  key={index} id={inquiry.inquiryCode} >{inquiry?.answer == null? <span  >답변 대기중</span>:<span style={{color : "#AAAAAA", fontWeight : "bold"}}>답변완료</span>  }</td>
                            <td  key={index} id={inquiry.inquiryCode} >{inquiry?.createDate.substr(0,10)}</td>
                        </tr>))}
                </table>
            </div>
            {/* 페이지 버튼 */}
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span id={index} className={style.pageButton} onClick={onClickPageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default InquiryList;