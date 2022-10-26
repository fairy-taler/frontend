
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

  console.log(header)
  const onClickHandler = (e) => {
      dispatch({ type: ON_CLICK, payload : !header.clicked});
  }


  const isLogin = null; 

  const menuList = (isLogin) => {
    if (isLogin == 'null' || isLogin == undefined || isLogin == null) {
      return (
        <>
          <Link to = "/login"><button className={style.btn}><img src={require('../../static/images/login-arrow.png')}/></button><br/></Link>
          <Link to = "/idsearch"><button className={style.btn}><img src={require('../../static/images/id-search-btn.png')}/></button><br/></Link>
          <Link to = "/pwdsearch"><button className={style.btn}><img src={require('../../static/images/pwd-search-btn.png')}/></button></Link>
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
      if (isLogin == 'null' || isLogin == undefined || isLogin == null) {
        return (
          <>
            <NavLink to="/join"><button className={style.btn}><img className={style.joinBtn} src={require('../../static/images/join-btn.png')}/></button></NavLink>
          </>
        );
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
                  <div className={style.btnGroup}>
                    <NavLink to="/serviceCenter"><button className={style.btn}><img src={require('../../static/images/commu-btn.png')}/></button></NavLink><br/>
                    <NavLink to="/notices"><button className={style.btn}><img src={require('../../static/images/info-btn.png')}/></button></NavLink>
                  </div>
                </div>
            </div>
            <div className={style.blockedDiv} onClick={onClickHandler}>
            </div>
        </div>
      </div>
  );
}

export default Navbar;
