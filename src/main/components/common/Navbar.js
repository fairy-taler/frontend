
import { NavLink } from "react-router-dom";
import style from "../../static/css/Navbar.module.css"
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_CLICK
} from '../../../modules/mainModules/headerModule';
        
function Navbar() {
  
  const dispatch = useDispatch();
  const header = useSelector(state => state.headerReducer);

  // 로그인 권한 정보 확인
  const loginState = useSelector(state => state.loginReducer);
  console.log(loginState);


  console.log(header)
  const onClickHandler = (e) => {
      dispatch({ type: ON_CLICK, payload : !header.clicked});
  }


  const isLogin = null; 

  const memberRole = loginState.role; 

  const menuList = (isLogin) => { 
    if (memberRole == '' || memberRole == undefined || memberRole == null) {
      return (
        <>
          <Link to = "/login"><button className={style.btn}><img src={require('../../static/images/login-arrow.png')}/></button><br/></Link>
          <Link to = "/idsearch"><button className={style.btn}><img src={require('../../static/images/id-search-btn.png')}/></button><br/></Link>
          <Link to = "/pwdsearch"><button className={style.btn}><img src={require('../../static/images/pwd-search-btn.png')}/></button></Link>
        </>
      );
    } else if( memberRole == "admin"){
      return (
        <>
          <Link to = "/inquirylist"><div className={style.manageNav}>1:1 문의 관리</div></Link>
          <Link to = "/"><div className={style.manageNav}>공지사항 관리</div></Link>
          <Link to = "/"><div className={style.manageNav}>회원 관리 </div></Link>
          <Link to = "/"><div className={style.manageNav}>동화 관리</div></Link>
        </>
      );
    } else {
      return (
        <>
          <button className={style.btn}><img src={require('../../static/images/mytale-btn.png')}/></button><br/>
          <button className={style.btn}><img src={require('../../static/images/community-btn.png')}/></button>
        </>
      );
    }
  };
  
    const menuLogin = (isLogin) =>{
      if (memberRole == '' || memberRole == undefined || memberRole == null) {
        return (
          <>
            <NavLink to="/join"><button className={style.btn}><img className={style.joinBtn} src={require('../../static/images/join-btn.png')}/></button></NavLink>
          </>
        );
      } else if (memberRole == "admin") {

      } else {
        return (
          <>
            <button className={style.btn}><img className={style.joinBtn} src={require('../../static/images/mypage-btn.png')}/></button>
          </>
        );
    }
  }

  return (
      <div className={style.navbarDiv}>
        <div className={style.flexDiv}>
            <div className={style.menus}>
                {menuLogin(isLogin)}
                <div className={style.btnsDiv}>
                  <div className={style.btnGroup}>
                    {menuList(isLogin)}
                  </div>
                  { memberRole == "admin" ? <></> : 
                    <div className={style.btnGroup}>
                      <NavLink to="/serviceCenter"><button className={style.btn}><img src={require('../../static/images/commu-btn.png')}/></button></NavLink><br/>
                      <NavLink to="/notices"><button className={style.btn}><img src={require('../../static/images/info-btn.png')}/></button></NavLink>
                    </div>
                  }
                  </div>
            </div>
            <div className={style.blockedDiv} onClick={onClickHandler}>
            </div>
        </div>
      </div>
  );
}

export default Navbar;
