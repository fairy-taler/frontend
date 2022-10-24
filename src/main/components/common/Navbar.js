import style from "../../static/css/navbar.module.css"

function Navbar() {

  return (
      <div className={style.navbarDiv}>
        <div className={style.flexDiv}>
            <div className={style.menus}>
                <button className={style.btn}><img className={style.joinBtn} src={require('../../static/images/join-btn.png')}/></button>
                <div className={style.btnsDiv}>
                  <div className={style.btnGroup}>
                    <button className={style.btn}><img src={require('../../static/images/login-arrow.png')}/></button><br/>
                    <button className={style.btn}><img src={require('../../static/images/id-search-btn.png')}/></button><br/>
                    <button className={style.btn}><img src={require('../../static/images/pwd-search-btn.png')}/></button>
                  </div>
                  <div className={style.btnGroup}>
                    <button className={style.btn}><img src={require('../../static/images/commu-btn.png')}/></button><br/>
                    <button className={style.btn}><img src={require('../../static/images/info-btn.png')}/></button>
                  </div>
                </div>
            </div>
            <div className={style.blockedDiv}>
            </div>
        </div>
      </div>
  );
}

export default Navbar;
