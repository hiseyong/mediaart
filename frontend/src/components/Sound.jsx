import banner from './images/banner.jpg'
import { Link } from 'react-router-dom'
export function Sound() {
    return(
        <div>
            <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
						<div class="content">
							<h1>SOUNDS IN SUMMER</h1>
							<p class="major">여름의 소리를 담다</p>

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
							<h2>소리로 만드는 전시</h2>
							<p>여름의 소리가 전시관을 채운다</p>
                            
							<div class="items style1 medium onscroll-fade-in">
								<section>
									<h3>전시물 소개</h3>
									<p>여름을 대표하는 소리들로 전시관을 채운다</p>
								</section>
								<section>
									<h3>전시 참여</h3>
									<p>벽면의 버튼을 누름으로써 관람객은 여름의 소리로 전시관을 채운다.</p>
								</section>
							</div>
						</div>
					</section>
        </div>
    )
}