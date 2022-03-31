 import styled from 'styled-components';

const FooterHead = () => {

  return (
      <Footer>
	  <div className="Container">
	  <div className="footer-info">
		  <div className="footer-contacts">
			  <li className="footer-content">
				  <span className="info">Call:</span> +234 9012624162
			  </li>
			  <li className="footer-content">
				  <span className="info">Support:</span>
				  <a href="*">info@yourcompany.com</a>
			  </li>
		  </div>
		  <div className="footer-btn-container">
			  <a href="*" className="footer-nav-link">
				  Login
			  </a>
			  <button className="green-btn">Register</button>
		  </div>
	  </div>
  </div>
        
         
    </Footer>
  )
}

export default FooterHead;

const Footer = styled.footer`
width: 100%;
	max-width: 100%;
	height: 8vh;
	padding: 1rem;
	background: #ffffff;
	.Container {
		max-width: 100%;
		margin: 0 auto;
		padding: 0 2rem;
		font-size: 1.2rem;
		.footer-info {
			display: flex;
			justify-content: space-between;
			align-items: center;
			.footer-contacts {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.footer-content {
					list-style: none;
					margin-left: 1rem;
					color: #003412;
					span {
						font-weight: 550;
					}
					a {
						text-decoration: none;
						color: #000000;
					}
				}
			}
		}
		.footer-btn-container {
			.footer-nav-link {
				margin-right: 1rem;
				padding: 1rem;
				text-decoration: none;
				color: #038c33;
				&:hover {
					background: #e5e5e5;
					border-radius: 5px;
				}
			}
			.green-btn {
				background: #038c33;
				color: #ffffff;
				border: none;
				outline: none;
				font-size: 1.1rem;
				padding: 0.7rem 1rem;
				border-radius: 5px;
				cursor: pointer;
				transition: ease-in-out;
				&:hover {
					background: #02a63b;
				}
			}
		}
		@media (max-width: 850px) {
			font-size: 0.7rem;
			.footer-nav-container {
				.green-btn {
					font-size: 1rem;
					padding: 0.5rem 1.5rem;
				}
			}
		}
		@media (max-width: 750px) {
			font-size: 0.8rem;
			.footer-btn-container {
				.footer-nav-link {
					font-size: 0.7rem;
				}
				.green-btn {
					font-size: 0.7rem;
					padding: 0.5rem 1.5rem;
				}
			}
		}
		@media (max-width: 575px) {
			font-size: 0.6rem;
			.footer-btn-container {
				display: none;
			}
		}
		@media (max-width: 575px) {
			.footer-contacts{
				display:block;
			}
		}
	}



`