import { useRef } from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import { ReactComponent as EarthIcon } from 'assets/earth.svg';

import { breakpoints } from 'helpers/breakpoints';
import { BIBLIOGRAPHY, HOME } from 'utils/Constants';
import tw from 'twin.macro';

const Wrapper = styled.div`
  background-color: var(--basic-green);
  ${tw`flex w-full [height: 70px] box-border [padding: 2px 12px]`}

  & > * {
    font-family: 'Oswald', sans-serif !important;
  }

  @media (min-width: ${breakpoints['2xl']}px) {
    height: 95px;
    padding: 4px 20px;
    ${tw`[height: 95px] [padding: 4px 20px]`}
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

  letter-spacing: 2px;

  @media (min-width: ${breakpoints['2xl']}px) {
    font-size: 20px;
    font-weight: 900;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin: auto 0 auto auto;

  & > * {
    margin-right: 10px;
  }

  & > *:last-child {
    margin-right: 0;
  }
`;

const Link = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 1px;
  font-size: 20px;

  &.active {
    text-decoration: overline;
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

      <LinksContainer>
        <Link to={HOME}>Início</Link>
        <Link to={BIBLIOGRAPHY}>Bibliográfia</Link>
      </LinksContainer>
    </Wrapper>
  );
};

export default Header;
