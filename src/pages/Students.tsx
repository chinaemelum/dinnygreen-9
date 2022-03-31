import React from 'react'
import styled from 'styled-components';
import frame15 from "../components/assests/Frame15.png"

const Students = () => {
  return (
    <Section>

<div>
			<div className='Container'>
				<div className='StudentContent'>
					<h1>Find Out How We Help Students</h1>
					<p>
						authentic ‘voice and choice’ matter and a big part of this is
						leaving ‘room for interpretation’ in the assignment. Those gray
						areas <br />
						can confuse students unaccustomed to agency and choice, but once
						they become comfortable with it, it can be a significant <br />
						factor in helping them show what their ‘best’ actually is.
					</p>
					<img src={frame15} alt="A girl reading" />
				</div>
			
			</div>
		</div>
    </Section>
  )
}

export default Students;

const Section = styled.section`

.Container{
  max-width: 100%;
	padding: 2%;

  .StudentContent{
  text-align: center;
	padding: 4%;
	h1 {
		color: #038c33;
		margin-bottom: 1rem;
	}
	p {
		line-height: 1.5rem;
		font-size: 1.1rem;
		color: #6c757d;
	}
  img{
    width: 100%;
  }
}
}

`