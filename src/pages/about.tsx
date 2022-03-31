import styled from "styled-components";
import frame from "../components/assests/Frame 3.png"
import mask from "../components/assests/Mask Group (6).png"


const AboutPage = () => {
  return (
    <Section>

        <div className="AboutContainer">
			<div className="Container">
				<div className="AboutImgContainer">
					<img className="AboutImg" src={frame} alt="A girl Smiling" />
				</div>
				<div className="AboutContent">
					<img src={mask} alt="" />
					<h2>
						Advance Learning System <br></br> Around The World
					</h2>
					<p>
						We have made a collaborative effort in bringing together <br></br>
						scientific expertise from other countries, steered jointly <br></br>
						by the government on the basis of shared, <br></br> policy-driven
						interests.
					</p>
					<div className="about-content-cont">
						<div className="teacher">
							<p className="sup">
								25K<sup>+</sup>
							</p>
							<p>Teacher</p>
						</div>
						<div className="Active-courses">
							<p className="sup">
								74K<sup>+</sup>
							</p>
							<p>Active Courses</p>
						</div>
						<div className="Extra-Curriular">
							<p className="sup">
								250<sup></sup>
							</p>
							<p>Extra Curriular</p>
						</div>
					</div>
					<button>Learn more</button>
				</div>
			</div>
		</div>
     

    </Section>
  
  )
}

export default AboutPage;

const Section = styled.section`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

      .AboutContainer{
        width: 100%;
        max-width: 100%;
        padding: 4rem;
        background: #ffffff;


            .Container{
              max-width: 100%;
              margin: 0 auto;
              padding: 3rem;
              display: grid;
              justify-content: space-evenly;
              align-items: center;
              grid-template-columns: repeat(2, 1fr);
              @media screen and (max-width: 1100px) {
                grid-template-columns: repeat(1, 1fr);
              }

                    .AboutImgContainer{
                      padding: 1rem;
                      .AboutImg {
                        @media screen and (max-width: 1300px) {
                              width: 100%;
                        }
                      }
                      
                    }
                    .AboutContent{
                      color: #038c33;
                      img {
                        position: absolute;
                        top: 140%;
                        right: 0%;
                      }
                      h2 {
                        font-size: 2.5rem;
                        font-style: normal;
                        font-weight: 500;
                      }
                      p {
                        font-size: 1rem;
                        line-height: 1.5;
                        font-weight: 500;
                        color: #1f6036;
                      }
                      @media screen and (max-width: 1300px) {
                        h2 {
                          font-size: 2rem;
                        }
                      }
                    }


                    .about-content-cont{
                      display: grid;
                      justify-content: space-around;
                      align-items: center;
                      grid-template-columns: repeat(3, 1fr);
                      .Active-courses {
                        border-right: 1px solid #d6d6d6;
                        margin-right: 3rem;
                        .sup {
                          color: #038c33;
                          font-size: 2.5rem;
                        }
                        p {
                          color: #1f6036;
                        }
                      }
                      .teacher {
                        border-right: 1px solid #d6d6d6;
                        margin-right: 3rem;
                        .sup {
                          color: #038c33;
                          font-size: 2.5rem;
                        }
                        p {
                          color: #1f6036;
                        }
                      }
                      .Extra-Curriular {
                        .sup {
                          color: #038c33;
                          font-size: 2.5rem;
                        }
                        p {
                          color: #1f6036;
                        }
                      }
                      @media screen and (max-width: 1300px) {
                        .Active-courses {
                          margin-right:1rem;
                          .sup {
                            font-size: 2rem;
                          }
                        }
                        .Extra-Curriular {
                          .sup {
                            font-size: 2rem;
                          }
                        }
                        .teacher {
                          .sup {
                            font-size: 2rem;
                          }
                        }
                      }

                      
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
                      &:hover {
                        background: #02a63b;
                        transition: ease-in;
                      }
                    }

            }


      }


`
