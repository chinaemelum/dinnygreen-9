import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { students } from "../pages/CardArray";
import { BsCalendarDate } from "react-icons/bs";
import { MdPlayLesson } from "react-icons/md";




// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class InstuctorPage extends Component {
	render() {
		var settings = {
			dots: true,
			infinite: false,
			speed: 500,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 1100,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 1000,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		};
    return (
			<Section>
				<div className="section">
        <div className="Container">
					<div className="Porpular">
						<h1>Porpular Classes</h1>
						<p>
							We have built hospitals, arranged doctor appointments have the
							diagnose and treat <br></br> yourem ipsu r aol ad meniam, quis
							nostrud exercitation.
						</p>
					</div>
					<Slider {...settings} className="card__container--inner">
						{students.map((student, index) => {
							return (
								<div className="MapContainer" key={student.id}>
									<img src={`/images/Ellipse ${student.img}.png`} alt="" />
									<div className="TimeStamp">
										<p>
											<MdPlayLesson /> {student.less}
										</p>
										<p>
											<BsCalendarDate /> {student.date}
										</p>
									</div>
									<h5>{student.grade}</h5>
									<p>{student.para}</p>
									<div className="EnrollCont">
										<p className="enroll">{student.btn}</p>
									</div>
								</div>
							);
						})}
					</Slider>

					
				</div>

					<div>
						<button className="green-button">View all courses</button>
					</div>
					</div>

					
			</Section>
		);
	}
}

const Section = styled.section`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

      .section{
               width: 100%;
               height: 90vh;
              background: #f9fcfe;
              padding-top:5rem;
              overflow:hidden;
              
                  .Container{
                     padding: 1rem;
                     width:100%;

                     .Porpular{
                      margin-bottom: 2rem;
                      text-align: center;
	                          h1 {
		                            color: #038c33;
		                            margin-bottom: 1rem;
	                          }
	                          p {
		                            color: #1f6036;
		                            line-height: 1.6;
		                            font-size: 1.1rem;
	                          }
                     }
                
                    
                   }

                   .MapContainer{
                    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	                  padding: 1rem;
	                  text-align: center;
	                  background:#ffffff;
	                  gap: 1rem;
                      	img{
		                        	  margin-left: 7rem;
									
                              @media screen and (max-width: 1300px){
					                    margin-left: 6rem;
			                        }
		                        	@media screen and (max-width: 1200px){
			                        		margin-left: 5rem;
									}
				                      @media screen and (max-width: 1000px){
					                    margin-left: 3rem;
			                        }
				                      @media screen and (max-width: 900px){
				                      	margin-left: 2rem;
			                        }
				                      @media screen and (max-width: 800px){
				                    	margin-left: 13rem;
		                        	}

									@media screen and (max-width: 700px){

									}

									@media screen and (max-width: 600px){
											margin-left: 7rem;
									}
									

									@media screen and (max-width: 500px){
										margin-left: 4rem;

									}



									@media screen and (max-width: 400px){
										margin-left:3rem;

									}

									@media screen and (max-width: 300px){
						margin-left:0rem;

									}

                          }

                          .TimeStamp{
                            display: flex;
	                          margin-top: 1.5rem;
	                          align-items: center;
	                          color: #6c757d;
	                          justify-content: space-evenly;
                          }
                        }

                        .EnrollCont{
                          border-top: 1px solid #038c33;
	                        border-bottom: 5px solid #038c33;
	                        margin-top: 2rem;
	                        color: #ffffff;
	                            .enroll {
		                            margin-bottom: 1rem;
		                            color: #038c33;
                                padding-top:3px;
		                            &:hover {
			                              color: #ffffff;
	                              	}
                            	}
	                      &:hover {
	                        	background: #038c33;
	                        	transition: ease-in;
                          	}
                            
                          }
                          
                          
                          
                          .green-button{
                            background: #038c33;
                            color: #ffffff;
                            border: none;
                            outline: none;
                            padding: 0.7rem 1.5rem;
                            text-align: center;
                            cursor: pointer;
                            border-radius: 5px;
                            font-size: 1.2rem;
                            margin-left: 45%;
                            margin-top:3%;
                            &:hover {
                              background: #02a63b;
                              transition: ease-in;
                             }
                          } 
         }
    

      

`