import styled from 'styled-components';

import { ReactComponent as EarthIcon } from 'assets/earth.svg';

import { breakpoints } from 'helpers/breakpoints';
import { useRef } from 'react';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: var(--basic-green);
  box-sizing: border-box;
  padding: 2px 12px;

  @media (min-width: ${breakpoints['2xl']}px) {
    height: 95px;
    padding: 4px 20px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  width: fit-content;
  height: 100%;
  overflow: hidden;
  align-items: center;
`;

const Title = styled.h1`
  height: fit-content;
  width: fit-content;
  line-height: 100%;
  font-size: 16px;
  font-weight: 900;
  color: #ffffff;
  text-align: start;
  margin-left: 10px;
  font-family: 'Oswald', sans-serif;
  letter-spacing: 2px;

  @media (min-width: ${breakpoints['2xl']}px) {
    font-size: 20px;
    font-weight: 900;
  }
`;

const Header = () => {
  const iconRef = useRef(null);

  return (
    <Wrapper>
      <IconContainer ref={iconRef}>
        <EarthIcon width={70} height={70} fill="#FFFFFF" />

        <Title>
          Projeto <br />
          Conscientiza <br /> Aquecimento <br /> Global
        </Title>
      </IconContainer>
    </Wrapper>
  );
};

export default Header;
