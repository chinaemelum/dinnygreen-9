import React from 'react'
import styled from 'styled-components';
import { FaCheck } from "react-icons/fa";
import girl from "../components/assests/Frame11.png"

const FindOut = () =>  {
  return (
    <Section>

        <div className="section">
				<div className="find_more">
    <h1>Find Out More About <br /> Our Learning Experience </h1>
    <p>We have built hospitals, arranged doctor appointments <br />
	  have the diagnose and treat yourem ipsu r aol ad <br />
	   meniam, quis nostrud exercitation.</p>
     
	<ul>
						<li>
							<FaCheck className="green" />
							Culture in diversity
						</li>
						<li>
							<FaCheck className="green" />
							We have built hospitals, arranged doctor.
						</li>
						<li>
							<FaCheck className="green" />
							We have built hospitals, arranged doctor.
						</li>
					</ul>
          <button>Learn More</button>
      
  </div>

  <div className="find_out">
	<img src={girl} alt="" />
  </div>

				</div>
			
			
    </Section>
    
  )
}

export default FindOut;

const Section = styled.section`
.section{
	display:flex;
	width:100%;
	flex-wrap:wrap;
	@media screen and (max-width: 958px) {
		flex-direction: column;
	}

	.find_more{

		margin-top: 10%;
		margin-left: 8%;

		     h1{
				font-family: 'Lato';
				font-style: normal;
				font-weight: 700;
				font-size: 40px;
				line-height: 139.9%;
				/* or 56px */
				color: #038C33;
				margin-left:40px;
			
			}

		p{
			font-family: 'Lato';
			font-style: normal;
			font-weight: 400;
			font-size: 16px;
			line-height: 24px;
			/* or 150% */
			color: #003412;
			margin-left:40px;
			}
			ul {
		list-style: none;
		line-height: 1.4rem;
		}
		li {
			color: #6c757d;
		}
		.green {
			background: #038c33;
			color: #ffffff;
			border-radius: 50%;
			margin-right: 0.5rem;
		}
		button{
		background: #038c33;
		color: #ffffff;
		border: none;
		outline: none;
		padding: 1rem 2rem;
		cursor: pointer;
		border-radius: 5px;
		margin-top: 2rem;
		margin-left:40px;
		&:hover {
		background: #02a63b;
		transition: ease-in;
	}
	}
	}

	
	

	.find_out{
		margin-left:10%;
		margin-top:7%; 
	@media screen and (max-width: 958px) {
		display: none;
	}
	
	}
}

`
