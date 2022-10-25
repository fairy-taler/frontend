import style from "../static/css/Join.module.css";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import { INPUT_INFO } from "../../modules/memberModules/memberModule";

function SelectRole(){

    const dispatch = useDispatch();
    const member = useSelector(state => state.joinReducer); 

    const onClickHandler = (e) => {
        dispatch({
          type: INPUT_INFO,
          payload: {
            name: "memberRole",
            value: e.target.id
          }
        });
    }
    console.log(member)
    return (
        <div className="join-form">
            <button className={ style.selectBtn } onClick={ onClickHandler }><img id="teacher" src={require('../static/images/teacher-btn.png')}></img></button> <br/>
            <button className={ style.selectBtn } onClick={ onClickHandler }><img id= "student" src={require('../static/images/stud-btn.png')}></img></button>
        </div>
    )
}

export default SelectRole;