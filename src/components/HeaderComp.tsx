import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderComp = () => {
  return (
      <Header>
          <nav>
              <p>Logo</p>
              <ul>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
              </ul>
          </nav>
    </Header>
  )
}

export default HeaderComp;

const Header = styled.header`
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin: 0;
    }
    ul {
        margin: 0;
        padding:0;
        list-style: none;
        display: flex;
        gap: 1rem;
        li{
            a {
                text-decoration: none;
            }
        }
    }
}
`