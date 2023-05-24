import banner from './images/banner.jpg'
import { Link } from 'react-router-dom'
export function PhotoZone() {
    return(
        <div>
            <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div class="content">
							<h1>MEMORIES IN SUMMER</h1>
							<p class="major">여름의 기억을 담다</p>

                        <Link to='/menu'>
                            <button>Back To Menu</button>
                        </Link>
						</div>

						<div class="image">
							<img src={banner} alt="" />
						</div>
					</section>
                    
					<section class="wrapper style1 align-center">
						<div class="inner">
							<h2>기억으로 만드는 전시</h2>
							<p>자신만의 여름 속 기억으로 전시를 채우다</p>

							<div class="items style1 medium onscroll-fade-in">
								<section>
									<h3>전시물 소개</h3>
									<p>사진을 찍음으로써 하나의 새로운 기억을 만들어내는 전시물</p>
								</section>
								<section>
									<h3>전시 참여</h3>
									<p>사진을 찍어 하나의 새로운 기억을 만들어낸다</p>
								</section>
							</div>
						</div>
					</section>
        </div>
    )
}