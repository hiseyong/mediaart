import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import './assets/css/main.css'
import '../style/main.css'
import banner from './images/banner.jpg'
export function Menu() {
	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div id="mainwrapper">
    <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div class="content">
            <h1>INTERACTIVE MEDIA ART</h1>
            <p>전시관: 하나고등학교 6층 미디어스페이스</p>
            <ul class="actions stacked">
                <li><a href="#disc" className="button big wide smooth-scroll-middle">스크롤하여 설명 보기</a></li>
            </ul>
        </div>
        <div class="image">
            <img src={banner} alt="" />
        </div>
    </section>

    <section id='disc'>
        <center>
            <h3 id='mediaartproject'>2023 HAS Media Art Project</h3>
            <p>안세용 김종원 이준상</p>
            <p>이승원 현지민 김유찬</p>
            <p>오민준 송석윤 김서영</p>
        </center>
    </section>
    <hr/>
    <section>
        <center>
            <p>2023년 하나고등학교에서 위 9명과 진행한 프로젝트 입니다.</p>
            <p>전시 기간: 6월 11일까지 예정</p>
            <p>전시 장소: 하나고등학교 6층 미디어스페이스(개인연습실 옆)</p>
        </center>
    </section>

    <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in" id="first">
        <div class="content">
            <h2>MEMORIES IN SUMMER</h2>
            <p>여름의 기억을 담다.</p>
            <ul class="actions stacked">
                <li><Link to="/memory" class="button">바로가기</Link></li>
            </ul>
        </div>
        <div class="image"> 
            <img src={banner} alt="" />
        </div>
    </section>

    <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in" id='second'>
        <div class="content">
            <h2>SOUNDS IN SUMMER</h2>
            <p>여름의 소리로 채우다</p>
            <ul class="actions stacked">
                <li><Link to="/sound" class="button">바로가기</Link></li>
            </ul>
        </div>
        <div class="image">
            <img src={banner} alt="" />
        </div>
    </section>

    <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
            <h2>PHOTO ZONE</h2>
            <p>전시관에서 하나의 새로운 기억을 만들다</p>
            <ul class="actions stacked">
                <li><Link to="/photozone" class="button">바로가기</Link></li>
            </ul>
        </div>
        <div class="image">
            <img src={banner} alt="" />
        </div>
    </section>

    <section class="wrapper style1 align-center">


</section>
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.scrollex.min.js"></script>
<script src="assets/js/jquery.scrolly.min.js"></script>
<script src="assets/js/browser.min.js"></script>
<script src="assets/js/breakpoints.min.js"></script>
<script src="assets/js/util.js"></script>
<script src="assets/js/main.js"></script>
        </div>
    )
}