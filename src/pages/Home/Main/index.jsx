import { useEffect, useRef, useState } from 'react';
import useWindowSizes from 'hooks/useWindowSizes';
import styled from 'styled-components';
import tw from 'twin.macro';

import { Tooltip } from 'react-tooltip';
import { Transition } from 'react-transition-group';

import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';

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

  ${tw`absolute h-fit flex mt-4 md:mt-20 lg:mt-56 ml-6 overflow-hidden`}
`;

const Title = styled.h1`
  ${tw`text-white font-inter font-bold pb-2 [white-space: wrap] md:[word-break: keep-all] md:whitespace-nowrap
      text-5xl`}
`;

const Subtitle = styled.h2`
  ${tw`text-themes-basic-black text-3xl font-black !font-inter mx-auto`}
`;

const Text = styled.h1`
  ${tw`text-themes-basic-black text-lg font-oswald`}
`;

const OzoneContainer = styled.div`
  ${tw`w-fit h-fit flex relative`}
`;

const Arrow = styled(ArrowIcon)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${tw`absolute [transform: rotate(90deg)] [margin: 24% 0% 0% 25%]`}
`;

const MainPage = () => {
  const [inProp, setInProp] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const nodeRef = useRef(null);

  const { width } = useWindowSizes();

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 300);
  }, []);

  const duration = 700;

  const defaultStyle = {
    transition: `all ${duration}ms linear`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, width: 0 },
    entered: {
      opacity: 1,
      width: width <= 600 ? '320px' : '670px',
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

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
              <Title>Aquecimento Global</Title>
            </TitleBox>
          )}
        </Transition>
      </ImageContainer>

      <Main>
        <Section>
          <Subtitle>O que é?</Subtitle>

          <Text>
            &nbsp;&nbsp;&nbsp;O aquecimento global é caracterizado por mudanças
            climáticas as quais elevam as ondas de calor no planeta, causado por
            diversos fatores negativos, principalmente por intervenções humanas
            na natureza, um dos principais agentes causadores é o aumento de
            emissão de gases poluentes, a exemplo: fumaça das queimadas,
            liberação dos gases de veículos e gases produzidos por industrias,
            principalmente as que fazem o uso de combustíveis fósseis.
            {/* Se não controlado, prejudicará o futuro do planeta. */}
          </Text>
        </Section>

        <Section>
          <Subtitle>Quais as Consequências?</Subtitle>

          <Text> - Oceanos com temperaturas elevadas;</Text>
          <Text> - Derretimento das calotas polares;</Text>
          <Text> - Inundações de terrítório por elevação dos oceanos; </Text>
          <Text>
            - Aumento dos raios solares, por rompimento da camada de Ozônio;
          </Text>
          <Text>
            - Mais catástrofes climáticas (furações, enchentes, secas, etc.);
          </Text>
          <Text>
            - Aumento das espécies em extinção por conta dos ambientes
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
          <Subtitle>Meios de Combate</Subtitle>

          <Text>- Replantio de Árvores;</Text>
          <Text>- Fontes de energia sustentáveis;</Text>
          <Text>- Descarte correto de lixo tóxico;</Text>
          <Text>- Utilização de veículos apenas quando necessário;</Text>
        </Section>

        <Section style={{ marginBottom: '48px' }}>
          <Subtitle>Os problemas na Camada de Ozônio</Subtitle>

          <Text>
            Primeiramente é necessário entender o que é: se trata de uma camada
            a qual é responsável pela proteção de tudo o que há dentro da Terra,
            protegendo de raios ultravioleta, chuvas ácidas, dentre outros
            fatores extremamente prejudiciais à vida.
          </Text>

          <OzoneContainer
            data-tooltip-id="ozonio"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <img src="https://fatorrrh.com.br/wp-content/uploads/2023/01/Terra-248814087018e199c4bddadd4ebafeede13897d1.jpeg" />

            {isHovering && (
              <Arrow id="target-arrow" width={90} height={90} fill="red" />
            )}
          </OzoneContainer>

          <Tooltip
            id="ozonio"
            content="Disponível em: https://fatorrrh.com.br/wp-content/uploads/2023/01/Terra-248814087018e199c4bddadd4ebafeede13897d1.jpeg"
          />
        </Section>

        <YearGraphic />
      </Main>
    </Wrapper>
  );
};

export default MainPage;
