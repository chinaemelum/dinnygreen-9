import React from 'react'
import styled from 'styled-components'

const ContactPage = () => {
  return (
    <Section>
      <div className='ContactContainer'>
			<div className='Container'>
				<div className='ContactContent'>
					<h1>Contact Us</h1>
					<div className='ContactGrid'>
						<input type="text" required placeholder="Name"  />
						<input type="email" required placeholder="Email"  />
						<input type="text" required placeholder="Phone" />
						<input type="text" required placeholder="Subject" />
					</div>
					<textarea required placeholder="Message"></textarea>
					<div className="btnCOnt">
						<button>Send now</button>
					</div>
				</div>
			</div>
		</div>

    </Section>
  )
}

export default ContactPage

const Section = styled.section`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

    .ContactContainer{
      padding: 1%; 
	    background:#ffffff;
      max-width: 100%;


      .Container{
			max-width: 1400px;
			margin: 0 auto;
			padding: 2rem;
			
			

        .ContactContent{
			padding: 2rem;
	          h1 {
		          text-align: center;
		          color: #038c33;
		          font-size: 2.5rem;
		          font-weight: 500;
	          }
	          textarea {
		          margin-top: 2%;
		          padding: 5%;
		          width: 80%;
	          }
	          .btnCOnt {
		          text-align: center;
				  button{
					background: #038c33;
					color: #ffffff;
					border: none;
					outline: none;
					margin-top: 3rem;
					padding: 0.7rem 1.5rem;
					cursor: pointer;
					border-radius: 5px;
					font-size: 1.2rem;
					margin-right: 1.5rem;
					&:hover {
					background: #02a63b;
					transition: ease-in;
						}
				}
			 }

          .ContactGrid{
			grid-template-columns: repeat(2, 1fr);
			display: grid; 
			padding-top: 3.5rem;
			 row-gap: 2rem;
			
	            input{
	            	  padding:1rem;
		              width: 80%;
		              outline:none;
            		}

          	}

          

        }

      }
    }

`