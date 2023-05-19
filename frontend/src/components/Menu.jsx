import { Link } from 'react-router-dom'
import '../style/main.css'
import banner from './images/banner.jpg'
export function Menu() {
    return(
        <div id="mainwrapper">
    <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div class="content">
            <h1>INTERACTIVE MEDIA ART</h1>
            <p class="major">전시관: 하나고등학교 본관 6층 미디어스페이스</p>
            <ul class="actions stacked">
                <li><a href="#first" class="button big wide smooth-scroll-middle">스크롤하여 전시물 확인하기</a></li>
            </ul>
        </div>
        <div class="image">
            <img src={banner} alt="" />
        </div>
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

    <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
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