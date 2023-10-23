import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Home = () => {
  return (
    <PageContainer>
      <Header />

      <Content>
        <Outlet />
      </Content>
    </PageContainer>
  );
};

export default Home;
