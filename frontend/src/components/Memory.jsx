import { Link } from 'react-router-dom'
import banner from './images/banner.jpg'
import { useEffect } from 'react'
export function Memory() {
	useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
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

                    <center>
                        <Link to='/memoryform'>
                            <button>
                                전시물에 기억 남기기
                            </button>
                        </Link>
                    </center>
							<div class="items style1 medium onscroll-fade-in">
								<section>
									<h3>전시물 소개</h3>
									<p>자신의 기억을 전시물에 잠시 남김으로써 관람객은 스스로 전시를 구성해 나간다.</p>
									<p>기억은 전시물에서 가장 최근의 11개가 표시된다</p>
									<p>전시물 외에 웹사이트에서 그동안 저장된 메세지를 모두 볼 수 있다</p>
								</section>
								<section>
									<h3>전시 참여</h3>
									<p>위의 기억 남기기 버튼을 통하여 짧은 메시지를 남기고 전시물에서 자신의 기억을 확인한다.</p>
								</section>
							</div>
						</div>
					</section>
                </div>
    )
}