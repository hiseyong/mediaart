import './assets/css/main.css'
import banner from './images/banner.jpg'
import { Link } from 'react-router-dom'
export function Main() {
    return(
        <div id="main">


            <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
                <div class="content">
                    <h1>INTERACTIVE MEDIA ART</h1>
                    <p class="major">전시관: 하나고등학교 6층 미디어스페이스</p>
                    <ul class="actions stacked">
                        <li><Link to="/menu" class="button big wide smooth-scroll-middle">Learn More</Link></li>
                    </ul>
                </div>
                <div class="image">
                    <img src={banner} alt="" />
                </div>
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