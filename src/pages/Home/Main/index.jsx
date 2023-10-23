import styled from 'styled-components';
import tw from 'twin.macro';

import { Tooltip } from 'react-tooltip';

import WOODS_WALLPAPER from 'assets/woods.jpg';
import YearGraphic from 'components/YearGraphic';

const Wrapper = styled.div`
  ${tw`flex flex-col w-full h-full overflow-auto`}
`;

const ImageContainer = styled.div`
  ${tw`w-full flex relative`}

  & > img {
    width: 100%;
  }
`;

const Main = styled.main`
  ${tw`w-full flex flex-col box-border p-4 px-8 bg-themes-basic-green`}

  & > * {
    ${tw`mb-6 last:mb-0`}
  }
`;

const Section = styled.section`
  ${tw`flex flex-col w-full h-fit first:mt-2.5`}

  & > * {
    ${tw`mb-4 last:mb-0`}
  }
`;

const Title = styled.h1`
  ${tw`text-themes-basic-black text-3xl font-black !font-inter mx-auto`}
`;

const Text = styled.h1`
  ${tw`text-white text-lg font-oswald font-light`}
`;

const MainPage = () => {
  return (
    <Wrapper>
      <ImageContainer
        data-tooltip-id="woods-wallpaper"
        data-tooltip-content="Disponível em: https://br.pinterest.com/pin/848858229741480484/">
        <img
          src={WOODS_WALLPAPER}
          style={{ maxHeight: '650px' }}
          alt="woods-image"
        />

        <Tooltip id="woods-wallpaper" place="bottom" />
      </ImageContainer>

      <Main>
        <Section>
          <Title>Por Que É Preocupante?</Title>

          <Text>Teste de desenvolvimento, visualizacao do texto.</Text>
        </Section>

        <Section>
          <Title>Como Acontece?</Title>

          <Text>Teste de desenvolvimento, visualizacao do texto.</Text>
        </Section>

        <Section>
          <Title>Quais São As Consequências?</Title>

          <Text>Teste de desenvolvimento, visualizacao do texto.</Text>
        </Section>

        <Section>
          <Title>Medidas A Serem Tomadas</Title>

          <Text>Teste de desenvolvimento, visualizacao do texto.</Text>

          <YearGraphic />
        </Section>
      </Main>
    </Wrapper>
  );
};

export default MainPage;
