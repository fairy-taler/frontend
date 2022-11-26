import style from "../static/css/TaleInfoForManagement.module.css";
import { useSelector, useDispatch } from 'react-redux';
import {
    ON_BLACK, ON_WHITE, ON_CLICK
} from '../../modules/mainModules/headerModule';
import { useEffect, useRef, } from "react";
import { callGetTaleAPI} from "../../apis/tale/ManageTaleAPICalls"
import { NavLink, useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
function TaleInfo(){
    const  params = useParams();  
    const navigate = useNavigate();  
                     
    // 헤더 설정 변경
    const dispatch = useDispatch();
    const header = useSelector(state => state.headerReducer);

    useEffect(()=>{
        dispatch({ type: ON_CLICK, payload : false});
        dispatch({ type: ON_BLACK});
        dispatch(callGetTaleAPI(params[1]));
    },[])
    //공지사항 정보 불러오기
    const result= useSelector(state => state.taleManageReducer);
    const tale = result?.tale;
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
    const slider = useRef();
    //버튼을 클릭하면 앞 뒤 배너로 이동
    const goToNextBanner= () => {
    slider.current.slickNext();
    }
    const goToPreBanner= () => {
    // slider.current.();
    slider.current.slickPrev();
    }
    return (
        <div className={style.noticeBox}>
            <div className={style.betweenBox}>
                {/* 타이틀 */}
                <div className={style.reportTitle}> 동화 정보 </div>
            </div>
            {/* border line */}
            {/* 목록 / 이전으로 버튼 */}
            <div className={style.subTitleBox}>
                <NavLink to="/manageTale"><img className={style.titleImg} src={require("../static/images/before-list-btn.png")}/></NavLink>
            </div>
            {/* 동화 제목 */}
            <div className={style.contentTitleBox}> 
                동화 이름 : {tale?.title} ({tale?.id})
                <div className={style.contentDateBox}>
                    {tale?.createAt.substr(0,10)}
                </div>
            </div>
            {/* 동화 정보 */}
            <Slider {...settings} className={style.taleBox} ref={slider}>
                    {tale?.pages?.map((page, index)=>(
                        <div>
                            <div>페이지 번호 : {page.page}p</div>
                            <img src={page.rawImgUrl}/>
                            <audio controls src={page.audioUrl}/>
                        </div>))}
            </Slider>
            {/* 공지사항 내용 */}
            {/* <div className={style.contentContentBox}>
                신고 내용 : {report?.content}
            </div> */}
            {/* 다음 공지사항 */}
            <img className={style.lineImg} src={require("../static/images/line.png")} />
        </div>
    )
}

export default TaleInfo;