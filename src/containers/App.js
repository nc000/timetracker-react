import React from 'react';
import styled from 'styled-components';
import TrackersList from "./TrackersList";
import DoughnutChart from "../components/DoughnutChart";

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  padding: 0;
  width: 60%;
  height: 1000px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const App = () => (
  <Wrapper>
    <TrackersList />
    <DoughnutChart />
  </Wrapper>
);

export default App;
