import React from 'react'
import styled from 'styled-components';
import { BsCalendarDate } from 'react-icons/bs';
import Woman from "../components/assests/woman.jpeg"
import Man from "../components/assests/man.jpeg"
import Blog from "../components/assests/redcloud.jpeg"

const BlogPage = () => {
  return (
    <Section>
        <div className='InstructionContainer'>
			<div className='Container'>
				<div className='InstructionContent'>
					<h1>Our Instructors & Teachers</h1>
					<p>
						We have the best teachers and instructors that would be able to
						train your kids, making <br></br>
						them Creative, God fearing, Respectfull and Intelligent.
					</p>
					<div className='Instructionimg'>
						<div className='Imgdiv'>
							<div className="Overlay">
								<button>Full time</button>
								<p>Masters in Geology</p>
								<p className="font">
                                <BsCalendarDate /> 28th April 2021</p>
							</div>
						</div>
						<div className='Imgdiv1'>
							<div className="Overlay">
								<button>Full time</button>
								<p>Doctor appointments have the </p>
								<p className="dia">diagnose</p>
								<p className="font">
									<BsCalendarDate /> 28th April 2021
								</p>
							</div>
						</div>
						<div className='Imgdiv2'>
							<div className="Overlay">
								<button>Full time</button>
								<p>Doctor appointments have the </p>
								<p className="dia">diagnose</p>
								<p className="font">
									<BsCalendarDate /> 28th April 2021
								</p>
							</div>
						</div>
					</div>
					<div className="btnCOnt">
						<button className='Last_button'>See all</button>
					</div>
				</div>
			</div>
		</div>

    </Section>
  )
}

export default BlogPage;

const Section = styled.section`


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.InstructionContainer{
    background: rgba(143, 191, 38, 0.08);
    width: 100%;



    .Container{
        width: 100%;
	    padding: 2%;

        .InstructionContent{
            padding: 3%;
	    h1 {
		    text-align: center;
		    color: #038c33;
		    font-size: 2.5rem;
		    font-weight: 500;
		    padding-bottom: 1rem;
	    }
	p {
		text-align: center;
		color: #6c757d;
		line-height: 2rem;
		font-size: 1.2rem;
	}
    .btnCOnt{
        text-align: center;
        .Last_button{
                background: #038c33;
	            color: #ffffff;
	            border: none;
	            outline: none;
	            margin-top: 3%;
	            padding: 0.7% 2%;
	            cursor: pointer;
	            border-radius: 5px;
	            font-size: 1.2rem;
	            margin-right: 1.5%;
	            &:hover {
		            background: #02a63b;
		            transition: ease-in;
	            }


            }
    }
        }

        .Instructionimg{
            display: grid;
	        grid-template-columns: repeat(3, 1fr);
	        gap: 2rem;
	        padding-top: 3.5rem;
	        @media screen and (max-width: 1000px) {
		        grid-template-columns: repeat(2, 1fr);
	        }
	        @media screen and (max-width: 800px) {
		        grid-template-columns: repeat(1, 1fr);
	        }

            .Imgdiv{
                background: url(${Woman}) no-repeat center center/cover;
	height: 70vh;
  width: 100%;
  border-radius:5px;
	position: relative;
	.Overlay {
		position: absolute;
		width: 100%;
		height: 48%;
		top: 52%;
		border-radius: 0px 0px 5px 5px;
		background: linear-gradient(
			180deg,
			rgba(3, 140, 51, 0) 22.57%,
			rgba(3, 140, 51, 0.497159) 77.2%,
			#038c33 100%
		);
		button {
			position: absolute;
			top: 25%;
			left: 5%;
      outline: none;
      border:none;
			padding: 0.5rem 1.5rem;
			background-color: #add9bd;
			border-radius: 3.4px;
			color: #038c33;
		}
		p {
			position: absolute;
			top: 45%;
			left: 5%;
			color: #ffffff;
		}
		.font {
			position: absolute;
			top: 55%;
			color: #ffffff;
			left: 5%;
		}
	}
            }
            .Imgdiv1{
                background: url(${Man}) no-repeat center center/cover;
	            height: 70vh;
	            width: 100%;
	            border-radius: 5px;
	            position: relative;
	            .Overlay {
		            position: absolute;
		            width: 100%;
		            height: 48%;
		            top: 52%;
		            border-radius: 0px 0px 5px 5px;
		            background: linear-gradient(
			            180deg,
			            rgba(3, 140, 51, 0) 22.57%,
			            rgba(3, 140, 51, 0.497159) 77.2%,
			            #038c33 100%
		            );
		                button {
			                position: absolute;
			                top: 17%;
			                left: 5%;
			                outline: none;
			                border: none;
			                padding: 0.5rem 1.5rem;
			                background-color: #add9bd;
			                border-radius: 3.4px;
			                color: #038c33;
		                }
		                p {
			                position: absolute;
			                top: 35%;
			                left: 5%;
			                color: #ffffff;
		                }
		                .dia {
			                position: absolute;
			                top: 45%;
			                left: 5%;
			                color: #ffffff;
		                }
		                .font {
			                position: absolute;
			                top: 60%;
			                color: #ffffff;
			                left: 5%;
		                }
	                }
                }
            .Imgdiv2{
                background: url(${Blog}) no-repeat center center/cover;
	height: 70vh;
	width: 100%;
	border-radius: 5px;
	position: relative;
	.Overlay {
		position: absolute;
		width: 100%;
		height: 48%;
		top: 52%;
		border-radius: 0px 0px 5px 5px;
		background: linear-gradient(
			180deg,
			rgba(3, 140, 51, 0) 22.57%,
			rgba(3, 140, 51, 0.497159) 77.2%,
			#038c33 100%
		);
		button {
			position: absolute;
			top: 17%;
			left: 5%;
			outline: none;
			border: none;
			padding: 0.5rem 1.5rem;
			background-color: #add9bd;
			border-radius: 3.4px;
			color: #038c33;
		}
		p {
			position: absolute;
			top: 35%;
			left: 5%;
			color: #ffffff;
		}
		.dia {
			position: absolute;
			top: 45%;
			left: 5%;
			color: #ffffff;
		}
		.font {
			position: absolute;
			top: 60%;
			color: #ffffff;
			left: 5%;
		}
	         }
                }   

       
            }

    }

}

`