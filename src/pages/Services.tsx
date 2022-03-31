
import styled from 'styled-components';
import Dinny5 from "../components/assests/dinny5.png"
import eclipse from "../components/assests/Ellipse 8.png";



const ServicePage = () => {
  return (
    <Section>
      <div className='FeatureContainer'>
			<div className='FeatureOverlay'>
				<div className='Container'>
					<div className='FeatureContent'>
						<h1>Our Features</h1>
						<p>
							Dinny Green International School is nurtured in grace and truth,
							raising green, <br />
							flourishing and successful children.
						</p>
					</div>
					<div className='GridContainer'>
						<div className='FlexContainer'>
							<div className="dotted_border">
								<img src={eclipse} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Awesome Teachers</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</div>
						<div className='FlexContainer'>
							<div className="dotted_border">
								<img src={eclipse} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Global Recognition</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</div>
						<div className='FlexContainer'>
							<div className="dotted_border">
								<img src={eclipse} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Extra curricular activities</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</div>
						<div className='FlexContainer'>
							<div className="dotted_border">
								<img src={eclipse} alt="Red Dotted Circle" />
							</div>
							<div className="awsometeacher_content">
								<h4>Government Approved</h4>
								<p>
									Lorem ipsum dolor sit amet, consecte <br />
									tur adipisicing elit, sed do eiusmod <br />
									ukkf tempor incididunt u.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
     

      
</Section>
  )
}

export default ServicePage

const Section = styled.section`

.FeatureContainer{
  background: url(${Dinny5}) no-repeat center center/cover;

        .FeatureOverlay{
          background: rgba(3, 140, 51, 0.7);

            .Container{
              width: 100%;

                .FeatureContent{
                  color: #ffffff;
                  padding: 3rem;
                  text-align:center;
                  h1 {
                    font-size: 2.5rem;
                    font-weight: 500;
                    margin-bottom: 1rem;
                  }
                  p {
                    font-size: 1rem;
                    font-weight: 500;
                    line-height: 1.5;
                  }

                }

                  .GridContainer{
                    display: grid;
                    align-items: center;
                    margin-top: 3rem;
                    margin-left: 3rem;
                    grid-template-columns: repeat(2, 3fr);
                    @media screen and (max-width: 1000px) {
                      grid-template-columns: repeat(1, 1fr);
                    }


                          .FlexContainer{
                            display: flex;
                            align-items: center;
                            padding: 1.2rem;
                            border-radius: 5px;
                            gap: 1.5rem;
                            width: 90%;
                            background: #f2f2f2;
                            margin-bottom: 2.5rem;
                            img {
                              width: 100%;
                            }
                            .awsometeacher_content {
                              color: #038c33;
                              h4 {
                                font-size: 1.2rem;
                                font-weight: 500;
                              }
                              p {
                                font-size: 1.1rem;
                                color:#1F6036;
                              }
                          }
                    }

                  }
            }

        }

}


`