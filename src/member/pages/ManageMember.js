import style from "../static/css/ManageMember.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import {callGetMemberListAPI, callPutMemberBlockAPI, callPutMemberUnblockAPI } from '../../apis/member/MemberAPICalls'
import { useEffect, useState } from "react";

function ManageMember(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const memberList = useSelector(state => state.memberListReducer); 
    const [memberCnt, setMemberCnt] = useState(0); 

    const [option, setOption] = useState('ALL');
    const result = null; 
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

    const onClickBlock = (e) => {
        console.log(e);
        dispatch(callPutMemberBlockAPI(e)); 
    }

    const onClickUnblock = (e) => {
        console.log(e);
        dispatch(callPutMemberUnblockAPI(e)); 
    }

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberListAPI());
    },[])

    useEffect(()=>{
        setMemberCnt(document.getElementById('memberListTable').rows.length);
    })

    console.log(memberList);

    
    
    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                <img className={style.titleImg} src={require("../static/images/manage-member-title.png")}/>
                {/* 검색창 */}
                <div className={style.searchBox}>
                    <input placeholder="검색어를 입력하세요."/>
                    <img src={require("../static/images/search-btn.png")}/>
                </div>
            </div>
            {/* border line */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
            {/* 메뉴 선택 */}
            <div className={style.btnGroup}>
                <button onClick={onClickAll}> {option == "ALL" ? <img src={require("../static/images/click-all.png")}></img>:<img src={require("../static/images/unclick-all.png")}></img>}</button> 
                <button onClick={onClickTeacher}>{option == "TEACHER" ? <img src={require("../static/images/click-teacher.png")}></img>:<img src={require("../static/images/unclick-teacher.png")}></img>}</button>
                <button onClick={onClickStudent}>{option == "STUDENT" ? <img src={require("../static/images/click-student.png")}></img>:<img src={require("../static/images/unclick-student.png")}></img>}</button>
            </div>
            {/* 회원 정보 */}
            <div className={style.memberList}>
            <table className={style.memberTable} id="memberListTable" >
                <th>순번</th><th>역할</th><th>이름</th><th>아이디</th><th>닉네임</th><th>이메일</th><th>전화번호</th><th>차단 여부</th>
            { memberList?.map((member, index)=>(
                member.memberRole == option || option == "ALL"? 
                    <tr id={index}>
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

            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.memberCount}> 총 회원 수 : <span> {memberCnt} </span> </div>

            <img className={style.lineImg} src={require("../static/images/line.png")} />
        </div>
    )
}

export default ManageMember;