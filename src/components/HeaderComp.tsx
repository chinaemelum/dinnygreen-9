
 import styled from 'styled-components';
 import Logo from "./assests/Group 60.png";
import { FaStream } from 'react-icons/fa';
import { useState, useEffect } from "react";



const HeaderComp = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	const toggleNav = () => {
		setToggleMenu(!toggleMenu);
	};

	useEffect(() => {
		const changeWidth = () => {
			setScreenWidth(window.innerWidth);
		};

		window.addEventListener("resize", changeWidth);

		return () => {
			window.removeEventListener("resize", changeWidth);
		};
	}, []);
  return (
   
   <Header>

	   <div className="nav">
	   <div className='nav-Container'>
				<div className='Logoimg'>
					<img src={Logo} alt="dinner-green-logo" />
				</div>
				{(toggleMenu || screenWidth > 1700) && (
					<ul className="nav-list">
						<li className="nav-items">
							<a href="*">Home</a>
						</li>
						<li className="nav-items">
							<a href="*">About</a>
						</li>
						<li className="nav-items">
							<a href="*">Services</a>
						</li>
						<li className="nav-items">
							<a href="*">Instructors</a>
						</li>
						<li className="nav-items">
							<a href="*">Courses</a>
						</li>
						<li className="nav-items">
							<a href="*">Blog</a>
						</li>
						<button>Contact</button>
					</ul>
				)}
				<div>
					<FaStream className="toogle-btn" onClick={toggleNav} />
				</div>
			</div>
	   </div>
	   
    </Header>
  )
}

export default HeaderComp;

const Header = styled.header`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
}

		.nav{

			z-index: 3;
			background: #003412;
			width: 100%;
				.nav-Container{
					max-width: 100%;
					display: flex;
					justify-content: space-evenly;
					align-items: center;

						.Logoimg{
							flex: 1;
	
							img {
								width: 120px;
							}
							@media screen and (max-width: 1300px) {
								img {
									width: 100px;
								}
							}
							@media screen and (max-width: 850px) {
								img {
									width: 70px;
								}
							}
						}

						.nav-list{
							list-style-type: none;
							display: flex;
							gap: 10rem;
							justify-content: space-evenly;
							align-items: center;
							position: relative;
							.nav-items{
								font-size: 20px;
								cursor: pointer;
								a {
									text-decoration: none;
									color: #f1f1f1;
									&:hover {
										color: #038c33;
									}
								}
							}

							button{
								background: #038c33;
								color: #ffffff;
								border: none;
								outline: none;
								margin-right: 3rem;
								font-size: 1.1rem;
								padding: 1.1rem 3rem;
								border-radius: 5px;
								cursor: pointer;
								transition: ease-in-out;
								&:hover {
									background: #02a63b;
								}
							}
						}
						.toogle-btn{
							display: none;
							position: absolute;
							right: 10px;
							top: 7px;
							padding: 5px;
							color: #000;
							font-size: 18px;
						}
						@media screen and (max-width: 1700px) {
							.nav-list{
								flex-direction: column;
								height: auto;
								position: absolute;
								top:  15%;
								width: 100%;
								z-index: 1;
								background: #003412;
								padding: 1rem;
								.nav-items{
									width: 100%;
									text-align: center;
									padding: 0;
									
								}
							}
							.toogle-btn{
								display: block;
								margin-top: 7rem;
								font-size: 2.5rem;
								color: #ffffff;
								margin-right: 5rem;
							}

							@media screen and (max-width: 958px){
								.toogle-btn{
									margin-top:6rem;
								}
							}

						}
														

						}

		}

		
    
`