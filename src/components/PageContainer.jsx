import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`h-screen [width: 100%] flex flex-col`}
`;

const PageContainer = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default PageContainer;
