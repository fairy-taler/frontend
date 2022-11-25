import React, { useState, useRef, useEffect } from "react";

//슬라이드 배너 라이브러리 (slick) 추가
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import { useSelector, useDispatch } from 'react-redux';
import { ON_WHITE, ON_BLACK,  ON_CLICK , OFF_LOGO} from '../../modules/mainModules/headerModule';
// 스타일 모듈 추가
import style from "../static/css/Main.module.css"

function Main() {
  // 스크롤 설정
  const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset); // window 스크롤 값을 ScrollY에 저장
  }

  useEffect(() => {
    if(ScrollY > 1018 && ScrollY <2352){
      dispatch({ type: ON_BLACK });
      dispatch({ type: OFF_LOGO});
    }
    else{
      dispatch({ type: ON_WHITE });
    }
    console.log("ScrollY is ", ScrollY); // ScrollY가 변화할때마다 값을 콘솔에 출력
  }, [ScrollY])
  //-------------스크롤

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    }
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener('scroll', handleFollow); // addEventListener 함수를 삭제
    }
  })

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
    alert("프로그램을 설치합니다.");
    fetch('/%EC%B1%85%EC%9E%A5%EC%86%8D%EA%B3%A0%EC%96%91%EC%9D%B4.zip', {
      method: 'GET',
      // content-type은 따로 지정하지 않았습니다. 
    })
    .then((response) => response.blob())
    .then((blob) => {
  
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      
      link.setAttribute(
        'href',
        url,
      );
      link.setAttribute(
        'download',
        '책장속고양이.zip',
      );
  
      document.body.appendChild(link);
  
      link.click();
  
      link.parentNode.removeChild(link);
      
      window.URL.revokeObjectURL(url)
    });
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
    <div>
      <img className={style.sliderLeftButton} src={require("../static/images/preButton.png")} onClick={goToPreBanner}/>
      <img className={style.sliderRightButton} src={require("../static/images/nextButton.png")} onClick={goToNextBanner}/>  
      {/* 배너 */}
      <Slider {...settings} ref={slider}>
          {/* 타이틀 */}
          <div>
            <div className={style.banner} style={{ backgroundImage : "url('main/banner-background1.png')"}}>
              <div >
                <img className={style.logoImg} src={require("../static/images/logo.png")} style={{}}/>
                <img className={style.downloadButtonCenter} src={require("../static/images/downloadButton.png")} onClick={onDownload}/>
              </div>
            </div>
          </div>  
          <div>
            <div className={style.banner} style={{ backgroundImage : "url('main/banner-background2.png')"}}>
              <div className={style.bannerImgBox}>
                <img className={style.bannerTextImgLeft} style={{margin:"auto"}} src={require("../static/images/bannerText1.png")} />
                <img className={style.downloadButtonLeft} src={require("../static/images/downloadButton.png")} onClick={onDownload}/>
              </div>
            </div>
          </div>  
          <div>
            <div className={style.banner} style={{ backgroundImage : "url('main/banner-background3.png')"}}>
              <div className={style.bannerImgBox}>
                <img className={style.bannerTextImgRight} src={require("../static/images/bannerText2.png")} />
                <img className={style.downloadButtonRight} src={require("../static/images/downloadButton.png")} onClick={onDownload}/>
              </div>
            </div>
          </div>  
        </Slider>  
        <div className={style.banner2} style={{ backgroundImage : "url('main/banner4.png')"}}/>
    </div>
  </div>
  )
}

export default Main;
