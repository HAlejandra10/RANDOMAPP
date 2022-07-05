import React from 'react'
import styled from 'styled-components'
import Navebar from '../layout/navbar';
import Analitycs from './analitycs';
import Earning from './earning';
import FAQ from './FAQ';
import Profile from './profile';
import Transfers from './transfers';

const Dashboard = () => {
  return (
    <Section>
    <Navebar />
    <div className="grid">
      <div className="row__one">
        <Analitycs />
        <FAQ />
      </div>
      <div className="row__two">
        <Earning />
       <Transfers />
       <Profile/>
      </div>
    </div>
    </Section>
  )
}

export default Dashboard;
const Section = styled.section`
margin-left: 18vw;
padding: 2rem;
height: 100%;
.grid {
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin-top: 2rem;
  .row__one {
    display: grid;
    grid-template-column: repeat(2, 1fr);
    height: 50%;
    gap: 1rem;
  }
  .row__two {
    display: grid;
    grid-template-column: repeat(3, 1fr);
    height: 50%;
    gap: 1rem;
  }
}
`;