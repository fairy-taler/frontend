import style from "../static/css/InsertReport.module.css";
import QueryString from "qs";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation, useParams } from 'react-router';
import { callInsertReportAPI } from "../../apis/report/ManageReportAPICalls"
function InsertReport(){
    // 헤더 설정 세팅
    const dispatch = useDispatch();const location = useLocation();
    const queryData = QueryString.parse(location.search, { ignoreQueryPrefix: true });
    console.log(queryData);
    
    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    //등록하기 버튼 클릭 이벤트 
    const navigate = useNavigate();
    const onClickInsertButton = () => {
        const formData = new FormData();
        const content = document.getElementById("contentInput").value;
        const category = document.getElementById("categoryInput").value;
        formData.append("category", category);
        formData.append("targetCode", queryData?.targetCode);
        formData.append("targetTaleCode", queryData?.targetTaleCode);
        formData.append("content", content);
        const file = document.getElementById("fileInput").files[0]
        if(file!=undefined)
        {formData.append("attachment",  file)}
        
        const func = callInsertReportAPI(formData);
        func();
        alert("신고가 등록되었습니다.")
        navigate(`/`);
    }

    return (
        <div className={style.noticeBox}>
            {/* 제목 이미지 */}
            <div className={style.betweenBox}>
                {/*타이틀 */}
                <div className={style.reportTitle}> 신고 작성 </div>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 제목 입력란 */}
            <div className={style.subTitleBox}>
                <select id="categoryInput" style={{fontSize:"16px",width:"100%", padding:"10px"}}>
                    <option>언어 폭력 및 성희롱적인 게시글 또는 댓글</option>
                    <option>부적절한 컨텐츠 제작</option>
                    <option>기타</option>
                </select>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 내용 입력란 */}
            <div className={style.contentInputBox}> 
                <textarea id="contentInput" className={style.contentInput} placeholder="자세한 내용을 입력해주세요. 첨부할 파일이 있다면 첨부해주세요."/>
            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 첨부파일 입력란 */}
            <div className={style.insertFileBox}> 
                <input id="fileInput" className={style.insertFileInput} type="file"/>
            </div>
            {/* 등록하기 버튼 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.insertButtonBox}>
                <img className={style.insertButton} src={require("../static/images/insert-btn.png")} onClick={onClickInsertButton}/>
            </div>
        </div>
    )
}

export default InsertReport;