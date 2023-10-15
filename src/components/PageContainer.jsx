import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const PageContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageContainer;
