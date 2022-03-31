import React from 'react'
import styled from 'styled-components';
import Guy from "../components/assests/Ellipse21.png"
import Girl from "../components/assests/girlwithlong.png"
import Boy from "../components/assests/boywithbag.jpeg"
import Success from "../components/assests/success.jpeg"

const SuccessPage = () => {
  return (
    <Section>
        <div className='SuccessContainer'>
			<div className='Container'>
				<div className='SucessContent'>
					<h1>Success Stories</h1>
					<div className='Sucessimg'>
						<div className="guy">
							<img src={Guy} alt="Boy with bag" />
						</div>
						<div className="girl">
							<img src={Girl} alt=" A girl" />
						</div>
						<div className="boy">
							<img src={Boy} alt="Boy with bag" />
						</div>
					</div>
					<p>
						We have built hospitals, arranged doctor appointments have the
						diagnose and treat yourem ipsu r aol ad <br />
						meniam, quis nostrud exercitation.We doctor appointments have the
						diagnose and treat yourem ipsu r <br />
						exercitatranged docts have the diagnose and treat ipsu r aol
					</p>
				</div>
			</div>
		</div>

    </Section>
  )
}

export default SuccessPage;

const Section = styled.section`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.SuccessContainer{
    background: url(${Success}) no-repeat center center/cover;
	background-position: right;
    width: 100%;

    .Container{
        width: 100%;
	    padding: 1%;

        .SucessContent{
            text-align: center;
	            h1 {
		            color: #d6e9f7;
                    padding:1%;
	            }

	        p {
		        color: #003412;
		        padding: 2.5% 0;
		        line-height: 2rem;
		        font-size: 1.1rem;
		        font-style: italic;
	        }
                }

                .Sucessimg{
                    display: flex;
	            justify-content: center;
                 align-items:flex-end;
	                .boy {
		                img {
			                    border-radius: 50%;
                         width:100%;
		                    }
	                    }
                    .guy{
                        img {
                        width:100%;
		                    }
                     }
	                    .girl {
		                    border: 3px dashed #ffffff;
		                    border-radius: 50%;
                                padding: 0.5%;
                             margin:0 1%;
		                    img {
			                border-radius: 50%;
                            width:100%;
		                }
	                }
                }
             }

        }

`