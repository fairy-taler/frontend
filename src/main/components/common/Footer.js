
import footerStyle from "../../static/css/Footer.module.css";
function Footer() {
  return (
    <div className={footerStyle.footerBox}>
      <img className={footerStyle.footerImg} src={require('../../static/images/footer.png')}/>
    </div>
  );
}

export default Footer;
