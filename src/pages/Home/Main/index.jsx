import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Tooltip } from 'react-tooltip';

import WOODS_WALLPAPER from 'assets/woods.jpg';
import YearGraphic from 'components/YearGraphic';
import { Transition } from 'react-transition-group';

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
  ${tw`w-full flex flex-col box-border pt-6 pb-28 px-8`}

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

const TitleBox = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${tw`absolute h-fit flex mt-56 ml-6 overflow-hidden`}
`;

const Title = styled.h1`
  ${tw`text-white text-5xl font-inter font-bold pb-2 [word-break: keep-all] whitespace-nowrap`}
`;

const Subtitle = styled.h2`
  ${tw`text-themes-basic-black text-3xl font-black !font-inter mx-auto`}
`;

const Text = styled.h1`
  ${tw`text-themes-basic-black text-lg font-oswald`}
`;

const duration = 1000;

const defaultStyle = {
  transition: `all ${duration}ms linear`,
  // opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1, width: 0 },
  entered: { opacity: 1, width: '670px' },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const MainPage = () => {
  const [inProp, setInProp] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 600);
  }, []);

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

        <Transition nodeRef={nodeRef} in={inProp} timeout={duration}>
          {state => (
            <TitleBox
              ref={nodeRef}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}>
              <Title>Artigo: Aquecimento Global</Title>
            </TitleBox>
          )}
        </Transition>
      </ImageContainer>

      <Main>
        <Section>
          <Subtitle>O que é?</Subtitle>

          <Text>
            &nbsp;&nbsp;&nbsp;O aquecimento global eleva as ondas de calor no
            planeta, causado por diversos fatores negativos, tanto por
            causadores naturais quanto intervenções humanas, um dos principais
            agentes causadores é o aumento de emissão de gases poluentes. Vem
            sendo um assunto bem popular nos últimos tempos, pois, se não
            controlado, prejudicará exponencialmente o futuro do planeta. <br />
            &nbsp;&nbsp;&nbsp; Dentre as principais preocupações está o
            derretimento das calotas polares, as quais tem sido muito atingidas
            por conta do aumento de temperatura, levando A Terra a perder ainda
            mais a sua estabilidade climática.
          </Text>
        </Section>

        <Section>
          <Subtitle>Quais as Consequências?</Subtitle>

          <Text> - Oceanos com temperaturas elevadas;</Text>
          <Text> - Inundações de terrítório por elevação dos oceanos; </Text>
          <Text>
            - Aumento dos raios solares, por rompimento da camada de Ozônio;
          </Text>
          <Text>
            - Mais catástrofes climáticas (furações, enchentes, secas, etc.);{' '}
          </Text>
          <Text>
            - Espécies em extinção mais rápidamente por conta dos ambientes
            impróprios;
          </Text>
          <Text>
            - Dificuldade nos setores agrícolas por conta de irregularidades
            climáticas;
          </Text>
        </Section>

        <Section>
          <Subtitle>Quais são os Causadores?</Subtitle>

          <Text>- Emissões descontroladas de gases;</Text>
          <Text>- Desmatamento;</Text>
          <Text>- Poluição;</Text>
          <Text>Dentre outros...</Text>
        </Section>

        <Section>
          <Subtitle>Algumas Medidas</Subtitle>

          <Text>- Replantio de Árvores;</Text>
          <Text>- Fontes de energia o menos poluente possível;</Text>
          <Text>- Descarte correto de lixo tóxico;</Text>
          <Text>- Utilização de veículos apenas quando necessário;</Text>

          <YearGraphic />
        </Section>
      </Main>
    </Wrapper>
  );
};

export default MainPage;
