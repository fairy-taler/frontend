import style from "../static/css/NoticeList.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect } from "react";

function NoticeList(){
    //공지사항 정보 불러오기
    const results = [{"tag":"공지", "title" : "10월 정기점검 안내", "date" :"2022-10-23"},
                     {"tag":"공지", "title" : "9월 정기점검 안내", "date" :"2022-9-23"},
                     {"tag":"공지", "title" : "8월 정기점검 안내", "date" :"2022-8-23"}];

    const pages = Array(10).fill()
   
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
    },[])

    return (
        <div className={style.noticeBox}>
            {/* 공지사항 제목 이미지 */}
            <div className={style.leftBox}>
                <img className={style.titleImg} src={require("../static/images/communityTitle.png")}/>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 공지사항 리스트 */}
            <div className={style.tableBox}>
                <table className={style.communityTable}>
                    {results.map((result, index)=>(
                        <tr>
                            <td style={{width : "50px" , textAlign:"left"}}>[{result.tag}]</td>
                            <td>{result.title}</td>
                            <td style={{width : "120px", textAlign:"right"}}>{result.date}</td>
                        </tr>
                    ))}
                </table>
            </div>
            <div className={style.pageListBox}>{pages.map((page, index)=>(<span className={style.pageButton}>{index+1}</span>))}</div>
        </div>
    )
}

export default NoticeList;