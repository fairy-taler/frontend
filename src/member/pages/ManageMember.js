import style from "../static/css/ManageMember.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from "react-router-dom";
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import {callGetMemberListAPI, callPutMemberBlockAPI, callPutMemberUnblockAPI, callGetSearchMemberAPI } from '../../apis/member/MemberAPICalls'
import { callGetReportsAPI } from "../../apis/report/ManageReportAPICalls"
import { useEffect, useState } from "react";

function ManageMember(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const memberList = useSelector(state => state.memberListReducer); 
    const result = useSelector(state => state.reportManageReducer);
    const datas  =  result?.reportList?.content;
    const [memberCnt, setMemberCnt] = useState(0); 
    const [keyword, setKeyword ] = useState("");
 
    const [option, setOption] = useState('ALL');
    const onClickAll = () => {
        setOption("ALL");
        console.log(option)
    };
    const onClickTeacher = () => {
        setOption("TEACHER");
    };
    const onClickStudent = () => {
        setOption("STUDENT");
        console.log(option)
    };

    const onClickReport = () => {
        setOption("REPORT"); 
    } 

    const onClickBlock = (e) => {
        console.log(e);
        dispatch(callPutMemberBlockAPI(e)); 
    }

    const onClickUnblock = (e) => {
        console.log(e);
        dispatch(callPutMemberUnblockAPI(e)); 
    }

    const onClickSearch = (e) => {
        dispatch(callGetSearchMemberAPI(keyword)); 
    }

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberListAPI());
        dispatch(callGetReportsAPI({	
            page:0, size:10}
        ));
    },[])
    console.log(datas);

    useEffect(()=>{
        if(document.getElementById('memberListTable') != null ){
            setMemberCnt(document.getElementById('memberListTable').rows.length);
        }
    })
    
    const onChangeKeyword= (e) => {
        setKeyword(e.target.value);
        console.log(keyword)
    };

    const navigate = useNavigate();
    const toNoticesInfo = (e) =>{
        console.log(
            "url", e.target)
         navigate(
            `/manageReports/${e.target.id}`
          );
    }

    console.log(memberList);

    
    
    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                <img className={style.titleImg} src={require("../static/images/manage-member-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요." onChange={onChangeKeyword}/>
                    <button onClick={onClickSearch}> <img className={style.searchImg} src={require("../static/images/search-btn.png")}/></button>
                </div>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 메뉴 선택 */}
            <div className={style.btnGroup}>
                <button onClick={onClickAll}> {option == "ALL" ? <img src={require("../static/images/click-all.png")}></img>:<img src={require("../static/images/unclick-all.png")}></img>}</button> 
                <button onClick={onClickTeacher}>{option == "TEACHER" ? <img src={require("../static/images/click-teacher.png")}></img>:<img src={require("../static/images/unclick-teacher.png")}></img>}</button>
                <button onClick={onClickStudent}>{option == "STUDENT" ? <img src={require("../static/images/click-student.png")}></img>:<img src={require("../static/images/unclick-student.png")}></img>}</button>
                <button onClick={onClickReport}> <img src={require("../static/images/report-manage.png")}></img></button>
            </div>
            {/* 회원 정보 */}
            
            { option == "REPORT" ? 
            <div className={style.memberList}>
                
                <table className={style.memberTable}>
                    <tr styleName><th>번호</th><th>카테고리</th><th>신고자ID</th><th>대상자ID</th><th>신고 일자</th></tr>
                    {datas?.map((data, index)=>(
                        data.targetTaleTitle == null ?
                        <tr className={style.communityTableHover} onClick={toNoticesInfo} id={data.reportCode}>
                                <td id={data.reportCode} >{data?.reportCode}</td>
                                <td id={data.reportCode} >{data?.category}</td>
                                <td id={data.reportCode} >{data?.reporterId}</td>
                                <td id={data.reportCode} >{data?.targetId}</td>
                                <td id={data.reportCode} >{data?.createDate?.substr(0,10)}</td>
                        </tr>
                        : ""
                    ))}
                </table>
            </div>
            :
            <>
            <div className={style.memberList}>
            <table className={style.memberTable} id="memberListTable" >
                <th>순번</th><th>역할</th><th>이름</th><th>아이디</th><th>닉네임</th><th>이메일</th><th>전화번호</th><th>차단 여부</th>
            { memberList?.map((member, index)=>(
                member.memberRole == option || option == "ALL"? 
                    <tr className={style.communityTableHover}  id={index}>
                    <td id={index} >[{member?.memberCode}]</td>
                    <td id={index}>
                        [{ member?.memberRole == "ADMIN" ? "관리자" : member?.memberRole == "TEACHER" ? "선생님":"학생"}]
                    </td>                        
                    <td id={index}>{member?.memberName}</td>
                    <td id={index}>{member?.memberId}</td>
                    <td id={index}>{member?.nickname}</td>
                    <td id={index}>{member?.email}</td>
                    <td id={index}>{member?.phone}</td> 
                    <td id={index}>{member?.blockStatus}
                    {
                        member?.blockStatus == "N" ? <button className={style.blockBtn} onClick={()=> {onClickBlock(member?.memberCode)}} > 차단 </button> : 
                        <button className={style.blockBtn} onClick={()=> {onClickUnblock(member?.memberCode)}} > 차단해제 </button>
                    }
                    </td> 
            </tr>
            : ""
            ))
            }  
            </table>

            </div>
            <img className={style.lineImg} src={require("../static/images/line.png")}/>
            <div className={style.memberCount}> 총 회원 수 : <span> {memberCnt} </span> </div>
            
            <img className={style.lineImg} src={require("../static/images/line.png")} />
        </>
        }
        </div>
    )
}

export default ManageMember;