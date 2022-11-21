import style from "../static/css/ManageMember.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import {callGetMemberListAPI } from '../../apis/member/MemberAPICalls'
import { useEffect, useState } from "react";

function ManageMember(){

    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);
    const memberList = useSelector(state => state.memberReducer); 

    const [option, setOption] = useState('ALL');
    const result = null; 
    const onClickAll = () => {
        setOption("ALL");
        console.log(option)
    };
    const onClickTeacher = () => {
        setOption("TEACHER");
        console.log(option)
    };
    const onClickStudent = () => {
        setOption("STUDENT");
        console.log(option)
    };

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetMemberListAPI());
    },[])
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
            <table className={style.memberTable} >
                
            { memberList?.map((member, index)=>(
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
            
            </tr>
            ))
            }  
            </table>

            </div>

            <img className={style.lineImg} src={require("../static/images/line.png")} />
            <div className={style.memberCount}> 총 회원 수 : <span>{memberList?.length} </span> </div>
            <img className={style.lineImg} src={require("../static/images/line.png")} />
        </div>
    )
}

export default ManageMember;