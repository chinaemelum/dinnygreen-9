import React from 'react'
import styled from 'styled-components';
import Vector10 from "../components/assests/Vector(10).png"
import Vector11 from "../components/assests/Vector(11).png"
import Vector12 from "../components/assests/Vector(12).png"
import logo from "../components/assests/Group 60.png"
import  { FaMousePointer } from 'react-icons/fa';







const FooterComp = () => {
  return (
      <Footer>
          <div className="footer">
				<div className="footer-container">
					<div className="footer-1">
						<img src={logo} width="120.64px" height="99.64px" alt="" />
						<p>
							Replenish him third creature and meat <br /> blessed void a fruit
							gathered you’re, <br /> they’re two waters own morning <br />{" "}
							gathered greater.
						</p>
					</div>

					<div className="footer-2">
						<h4>
							{" "}
							<span className="line">About</span> Us
						</h4>
						<li>Afficiates</li>
						<li>Partners</li>
						<li>Reviews</li>
						<li>Blogs</li>
					</div>

					<div className="footer-2">
						<h4>
							<span className="line">Popular</span> Classes
						</h4>
						<li>Creche</li>
						<li>Primary</li>
						<li>Secondary</li>
						<li>Highschool</li>
					</div>

					<div className="footer-2">
						<h4>
							<span className="line">News</span>letter
						</h4>
						<p className="news">
							Sign up to newsletter to get <br />
							Latest updates
						</p>
						<input type="email" placeholder="Enter Email address" />
						<FaMousePointer className='icon' />

						<div className="socials">
							<div>
								{" "}
								<a href="">
									<img src={Vector10} alt="" />
								</a>
							</div>
							<div className="space">
								<a href="">
									<img src={Vector11} alt="" />
								</a>
							</div>
							<div>
								<a href="">
									<img src={Vector12} alt="" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="underline"></div>
				<div className="align">
					<p>
						Copywrite @ DinnyGreen International Schools
						{new Date().getFullYear()}
					</p>
				</div>
			</div>
    </Footer>
  )
}

export default FooterComp;

const Footer = styled.footer`
.footer {
		background-color: #003412;
		.footer-container {
			max-width: 1400px;
			margin: 0 auto;
			padding: 4rem;
			overflow: hidden;
			display: grid;
			align-items: center;
			grid-template-columns: repeat(4, 1fr);
			@media screen and (max-width: 1000px) {
				grid-template-columns: repeat(2, 1fr);
			}
			p,
			li {
				font-size: 0.9rem;
				color: #f2f2f2;
				line-height: 1.5;
				font-size: 1.1rem;
			}
			h4 {
				color: #f2f2f2;
				padding-bottom: 1.6rem;
				font-size: 1.5rem;
			}
			.footer-1 {
				li {
					gap: 1.7rem;
					font-size: 0.9rem;
				}
			}

			.footer-2 {
				margin-top: 7%;
				margin-left: 7%;
				.line {
					padding-bottom: 0.6rem;
					border-bottom: 2px solid #add9bd;
				}

				li {
					padding-bottom: 0.6rem;
					list-style: none;
				}
				input {
					padding: 4% 10%;
					outline: none;
					border: none;
				}
				input::placeholder {
					color: #038c33;
				}
				.icon {
					padding: 4% 7%;
					color: #ffffff;
					background-color: #038c33;

				}
			}
		}

		.align {
			margin-top: 1%;
			color: #f2f2f2;
			text-align: center;
			font-size: 1rem;
			align-self: end;
			padding: 1rem;
		}
		.socials {
			padding-top: 7%;
			display: flex;
			.space {
				margin-left: 6%;
				margin-right: 6%;
			}
		}

		.underline {
			border-bottom: 1px solid #777777;
			max-width: 1400px;
			margin: 0 auto;
		}
	}
`