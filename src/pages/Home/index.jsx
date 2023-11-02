import styled from 'styled-components';

import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import PageContainer from '../../components/PageContainer';
import { ToastContainer } from 'react-toastify';
import tw from 'twin.macro';

import 'react-toastify/dist/ReactToastify.css';

const Content = styled.div`
  ${tw`flex flex-col w-full h-full`}
`;

const Home = () => {
  return (
    <PageContainer>
      <Header />

      <Content>
        <Outlet />

        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          draggable={false}
          newestOnTop={false}
          pauseOnHover={false}
          hideProgressBar={false}
          pauseOnFocusLoss={false}
          closeButton={false}
          closeOnClick
          rtl={false}
          theme="light"
          bodyStyle={{}}
        />
      </Content>
    </PageContainer>
  );
};

export default Home;
