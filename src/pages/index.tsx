import styled from "styled-components";
import HeaderComp from "../components/HeaderComp";
import FooterHead from "../components/HeadingFooter";
import AboutPage from "./about";
import BlogPage from "./Blog";
import ContactPage from "./contact";
import FindOut from "./find-out";
import InstuctorPage from "./Instructors";
import ServicePage from "./Services";
import Students from "./Students";
import SuccessPage from "./Success";
import Blur from "../components/assests/Unique1.png"
const HomePage = () => {
  return (
    <Section>
      <FooterHead />
        <HeaderComp />
        <div className="main-Container">
				<img src={Blur} alt="dinner-green-logo" />
				<div className="div-Container">
					<div className="div-Content">
						<div className="div-Content-wrapper">
							<h1>
								Give Your Child A <br />
								Chance To Be Unique
							</h1>
							<p>
								Experts agree that a child’s personality doesn’t fully form
								<br />
								until they are in elementary school. <br />
								<a href="#" className="sign-in">
									Sign-in
								</a> to enroll your child </p>
							<div className="bttns">
								<button className="green-button">Sign-up</button>
								<button className="light-green">Learn more</button>
							</div>
						</div>
					</div>
				</div>
			</div>
         <AboutPage /> 
         <ServicePage /> 
         <FindOut /> 
         <InstuctorPage />
         <Students />
         <SuccessPage />
         <BlogPage />
         <ContactPage />
         
    </Section>
  
  )
}

export default HomePage;

const Section = styled.section`
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
}
    .main-Container{
      background-image: url("images/dinny-green bg picture.jpg");
  height:80vh;
  width:100%;
  background-position:center;
  background-size:cover;
	img {
		position: relative;
		top: 88%;
		width:100%;
		height: 11vh;
	}

      .div-Container{
        display: grid;
	grid-template-columns: repeat(1, 1fr);
	justify-content: center;
	align-items: center;
	height: 80vh;
	max-width: 1400px;
	margin: 0 auto;
	padding: 1rem;
	overflow: hidden;
	 .div-Content-wrapper {
		margin-left: 5rem;
		line-height: 1.2;
		margin-bottom: 15%;
		h1 {
			font-size: 3.5rem;
			line-height: 1.2;
			color: #038c33;
		}
		p {
			margin-top: 1rem;
			font-size: 1.3rem;
			line-height: 1.4;
			color: #1f6036;
			a {
				text-decoration: none;
				color: #7ad420;
				margin-left: 0.3rem;
			}
		}
		@media screen and (max-width: 1300px) {
			h1 {
				font-size: 1rem;
			}
		}
		@media screen and (max-width: 800px) {
        .div-Content-wrapper{
          margin-right: 5%;
          h1 {
				font-size: 1.5rem;
			}
        }
		}
	}
			.bttns{
				margin-top: 2rem;

						.green-button{
							background: #038c33;
							color: #ffffff;
							border: none;
							outline: none;
							padding: 1rem 2rem;
							cursor: pointer;
							border-radius: 5px;
							font-size: 1.2rem;
							margin-right: 1.5rem;
							&:hover {
								background: #02a63b;
								transition: ease-in;
							}
						}

						.light-green{
							background: #add9bd;
							color: #038c33;
							border: none;
							font-size: 1.2rem;
							outline: none;
							padding: 1rem 2rem;
							cursor: pointer;
							border-radius: 5px;
							margin-right: 1.5rem;
							&:hover {
								background: #b6fccf;
								transition: ease-in;
							}
						}
			}
      }
    }
   
     

   
`
