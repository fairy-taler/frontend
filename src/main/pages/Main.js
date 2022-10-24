import React, { useState, useRef, useEffect } from "react";

//슬라이드 배너 라이브러리 (slick) 추가
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux';
import { ON_WHITE, ON_CLICK } from '../../modules/mainModules/headerModule';
// 스타일 모듈 추가
import style from "../static/css/Main.module.css"

function Main() {

  const dispatch = useDispatch();
  const header = useSelector(state => state.headerReducer);

  const onClickHandler = (e) => {
      dispatch({ type: ON_CLICK, payload : !header.clicked });
  }
  useEffect(
    ()=>{
      dispatch({ type: ON_WHITE });
    }
    ,[]
  )

  //슬라이더 앞뒤로 이동하기
  const slider = useRef();

  //버튼을 클릭하면 앞 뒤 배너로 이동
  const goToNextBanner= () => {
    slider.current.slickNext();
  }
  const goToPreBanner= () => {
    // slider.current.();
    slider.current.slickPrev();
  }

  //프로그램 다운로드 이벤트
  const onDownload= () => {
    alert("프로그램을 설치합니다.")
  }

  //슬라이더 배너 설정
  const settings = {
    //dots : 슬라이더 아래 점
    dots: false,
    //arrows : 옆으로 이동하는 화살표 표시 여부
    arrows: false,
    //콘텐츠 끝에서 처음으로 가기
    infinite: true,
    //컨텐츠 넘어갈 때 속도 (1000ms => 1초)음식
    speed: 1000,
    //한 화면에 보이는 콘텐츠 수
    slidesToShow: 1,
    //한 번에 넘어가는 콘텐츠 수
    slidesToScroll: 1
};

return (
  <div className={style.mainBox}>
    <img className={style.sliderLeftButton} src={require("../static/images/preButton.png")} onClick={goToPreBanner}/>
    <img className={style.sliderRightButton} src={require("../static/images/nextButton.png")} onClick={goToNextBanner}/>
    <div>
      {/* 배너 */}
      <Slider {...settings} ref={slider}>
          {/* 타이틀 */}
          <div>
            <div className={style.banner} style={{ backgroundImage : "url('main/banner-background1.png')"}}>
              <div>
                <img className={style.logoImg} src={require("../static/images/logo.png")} />
                <img className={style.downloadButton} src={require("../static/images/downloadButton.png")} onClick={onDownload}/>
              </div>
            </div>
          </div>  
          <div>
            <div className={style.banner} style={{ backgroundImage : "url('main/banner-background2.png')"}}>
              <div>
                <img className={style.bannerTextImg} src={require("../static/images/bannerText1.png")} />
                <img className={style.downloadButton} src={require("../static/images/downloadButton.png")} onClick={onDownload}/>
              </div>
            </div>
          </div>  
          <div>
            <div className={style.banner} style={{ backgroundImage : "url('main/banner-background3.png')"}}>
              <div>
                <img className={style.bannerTextImg} src={require("../static/images/bannerText2.png")} />
                <img className={style.downloadButton} src={require("../static/images/downloadButton.png")} onClick={onDownload}/>
              </div>
            </div>
          </div>  
        </Slider>  
    </div>
  </div>
  )
}

export default Main;
