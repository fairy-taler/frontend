import style from "../static/css/TaleListForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { callGetTalesAPI,callGetTalesByTitleAPI,callUpdateBlockTaleAPI,callUpdateUnBlockTaleAPI } from "../../apis/tale/ManageTaleAPICalls"

function TaleListForManagement(){
    // 카테고리 설정 초기화
    const [noticeCategory, setNoticeCategory] = useState("공지");
    const [update, setUpdate] = useState(true);
    // 신고 정보 불어오기
    const result = useSelector(state => state.taleManageReducer)?.taleList;
    console.log("data", result)
    const tales = result?.content;
    const pages = Array(result?.totalPages).fill()
    
    // 헤더 설정 변경
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetTalesAPI({	
            page:0, size:10}
        ));
    },[])
    const onClickPageButton = (e) =>{
        console.log(e.target.id);
        dispatch(callGetTalesAPI({	
            page:e.target.id, size:10}
        ));
    }
    const onClickSearchButton = (e) =>{
        console.log(document.getElementById("searchInput").value);
        const searchText = document.getElementById("searchInput").value;
        dispatch(callGetTalesByTitleAPI({pageable:{
            page:e.target.id, size:10}, title:searchText}
        ));
    }
    // 차단 버튼 클릭 이벤트
    const onClickBlockButton = (e) => {
        const func = callUpdateBlockTaleAPI(e.target.id);
        func().then( () =>{
            console.log("업데이트 되었습ㄴ디ㅏ.")
            setUpdate(!update)
        })
    }
    const onClickUnBlockButton = (e) => {
        const func = callUpdateUnBlockTaleAPI(e.target.id);
        func().then(
            dispatch(callGetTalesAPI({	
            page:0, size:10})));
    }

    //리스트 클릭시 해당 정보로 이동하는 이벤트 함수
    const navigate = useNavigate();

    const toTaleInfo = (e) =>{
        console.log(
            "url", e.target)
         navigate(
            `/manageTale/${e.target.id}`
          );
    }
    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 타이틀 */}
                <div className={style.title}>동화 목록 (총 {result?.totalElement}개)</div>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <select className={style.searchSelect} ><option value="이름">제작자</option><option value="제목">제목</option></select>
                    <div className={style.searchInputBox}>
                        <input id="searchInput" placeholder="검색어를 입력하세요."/>
                        <img onClick={onClickSearchButton} src={require("../static/images/search-btn.png")}/>
                    </div>
                </div>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 공지사항 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                <tr styleName><th>동화 제목</th><th>작성자</th><th>생성일</th><th>신고</th><th>차단</th></tr>
                    {tales?.map((data, index)=>(
                            <tr id={index} >
                                    <td id={data?.id} style={{width : "60%" , textAlign:"left"}} onClick={toTaleInfo}>{data?.title}</td>
                                    <td id={data?.id} style={{width : "10%" , textAlign:"left"}}>{data?.writerId}</td>
                                    <td id={data?.id} style={{width : "10%" , textAlign:"left"}}>{data?.createAt?.substr(0,10)}</td>
                                    <td id={data?.id} style={{width : "10%" , textAlign:"left"}}>신고보기({data?.reportSize})</td>
                                    <td id={data?.id} style={{width : "10%" , textAlign:"left"}}><img className={style.blockButton}
                                                                                                      onClick={data?.isBlock == 'Y'? onClickUnBlockButton : onClickBlockButton} id={data?.id}
                                                                                                      src={data?.isBlock =='Y'?
                                                                                                            require("../static/images/unblock-button.png"):
                                                                                                            require("../static/images/block-button.png")}></img></td>
                            </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span id={index} className={style.pageButton} onClick={onClickPageButton}>{index+1}</span>))}</div>
        </div>
    )
}
export default TaleListForManagement;