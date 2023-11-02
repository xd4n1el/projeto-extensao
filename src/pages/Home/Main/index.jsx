import { useEffect, useMemo, useRef, useState } from 'react';
import useWindowSizes from 'hooks/useWindowSizes';
import styled from 'styled-components';
import tw from 'twin.macro';
import api from 'services/api';

import YearGraphic from 'components/YearGraphic';
import ImageSlider from 'components/ImageSlider';
import { Transition } from 'react-transition-group';

import { ReactComponent as ArrowIcon } from 'assets/arrow.svg';
import { getImage } from 'utils/Functions';
import CommentForm from 'components/CommentForm';
import CommentBox from 'components/CommentBox';

const Wrapper = styled.div`
  ${tw`flex flex-col w-full h-full overflow-auto`}

  &::-webkit-scrollbar {
    width: 5px !important;
  }

  &::-webkit-scrollbar-button {
    display: none !important;
  }

  &::-webkit-scrollbar-track {
    background: var(--theme-green);
  }

  &::-webkit-scrollbar-track-piece {
    background-color: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--basic-green);
    border-radius: 12px;
  }
`;

const SliderContainer = styled.div`
  ${tw`w-full flex relative [max-height: 650px]`}

  & > img {
    width: 100%;
  }
`;

const Main = styled.main`
  ${tw`w-full flex flex-col box-border pt-8 pb-28 px-10`}

  & > * {
    ${tw`mb-10 last:mb-0`}
  }
`;

const Section = styled.section`
  ${tw`flex flex-col w-full h-fit first:mt-2.5 box-border p-6 rounded-xl shadow-md bg-white border-2 border-themes-basic-green`}

  & > * {
    ${tw`mb-4 last:mb-0`}
  }
`;

const TitleBox = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${tw`absolute h-fit flex mt-4 md:mt-20 lg:mt-56 ml-6 overflow-hidden z-10`}
`;

const Title = styled.h1`
  ${tw`text-white font-inter font-bold pb-2 text-5xl
      [white-space: wrap] md:[word-break: keep-all] md:whitespace-nowrap`}
`;

const Subtitle = styled.h2`
  ${tw`text-themes-basic-black text-3xl font-black !font-inter mx-auto`}
`;

const Text = styled.h1`
  ${tw`text-themes-basic-black text-lg font-oswald`}
`;

const ImageContainer = styled.div`
  ${tw`w-fit h-fit flex relative [max-height: 700px]`}

  & > img {
    ${tw`rounded-xl`}
  }
`;

const Arrow = styled(ArrowIcon)`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${tw`absolute [transform: rotate(90deg)] [margin: 15% 0% 0% 24%]`}
`;

const Container = styled.div`
  ${tw`w-full h-fit flex flex-col md:grid md:[grid-template-columns: 40% 60%]`}

  & .add-comment-container {
    ${tw`w-full h-fit flex`}
  }

  & .list-comment-container {
    ${tw`w-full h-full flex flex-col`}

    & > * {
      ${tw`mb-8 last:mb-0 `}
    }
  }

  & > * {
    ${tw`mb-6 last:mb-0`}
  }
`;

const MainPage = () => {
  const [inProp, setInProp] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [comments, setComments] = useState([]);

  const nodeRef = useRef(null);

  const { width } = useWindowSizes();

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, 300);

    const getComments = async () => {
      try {
        const { data, status } = await api.get('/comments');

        if (status !== 200) throw new Error();

        const usersComments = data.comments.map(comment => ({
          id: comment?._id,
          message: comment?.message,
          createdAt: new Date(comment?.createdAt),
        }));

        setComments(usersComments);
      } catch {
        return;
      }
    };

    getComments();
  }, []);

  const renderComments = useMemo(() => {
    return comments.map(comment => {
      return <CommentBox key={comment._id} {...comment} />;
    });
  }, [comments]);

  const duration = 700;

  const defaultStyle = {
    transition: `all ${duration}ms linear`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1, width: 0, position: 'absolute' },
    entered: {
      opacity: 1,
      width: width <= 600 ? '320px' : '670px',
    },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Wrapper>
      <SliderContainer>
        <ImageSlider />

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
      </SliderContainer>

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
            - Dificuldade nos setores agrícolas de irregularidades climáticas;
          </Text>
        </Section>

        <Section>
          <Subtitle>Quais as Consequências dos Oceanos Aquecidos?</Subtitle>

          <Text>
            &nbsp;&nbsp;&nbsp;Quando as temperaturas dos oceanos elevam, há mais
            ocorrências de catástrofes naturais, como furações, enchentes.
          </Text>

          <ImageContainer>
            <img src={getImage('hurricane').src} />
          </ImageContainer>
        </Section>

        <Section>
          <Subtitle>
            O que Acontece Com o Derretimento das Calotas Polares?
          </Subtitle>

          <Text>
            &nbsp;&nbsp;&nbsp;As calotas polares são responsáveis por manter o
            equilibrio ambiental, o seu derretimento eleva o nivel do mar, assim
            gerando consequências para o planeta causando acumulação de grandes
            quantidades de gases do efeito estufa na atmosfera, o qual retém a
            radiação solar, aprisionando o calor na superfície terrestre e
            resultando no aumento da temperatura média do planeta, causando
            assim o fenomeno do DEGELO. <br />
            &nbsp;&nbsp;&nbsp;Alguns problemas relacionados são:
          </Text>

          <Text> - Inundacões pelo aumento do nivel do mar;</Text>

          <Text> - Aumento de temperaturas;</Text>

          <Text> - Mais doenças respiratorias e doenças epidemiologicas;</Text>

          <ImageContainer>
            <img src={getImage('ice-layer').src} />
          </ImageContainer>
        </Section>

        <YearGraphic />

        <Section>
          <Subtitle>O que é a Camada de Ozônio?</Subtitle>

          <Text>
            &nbsp;&nbsp;&nbsp;Se trata de uma camada a qual é responsável pela
            proteção de tudo o que há dentro da Terra, protegendo de raios
            ultravioleta, chuvas ácidas, dentre outros fatores extremamente
            prejudiciais à vida. É composta por gases (O³) e é afetada pela
            desestabilição a qual o aquecimento global causa sobre os gases
            naturais do planeta.
          </Text>

          <ImageContainer
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}>
            <img src={getImage('ozone-layer').src} />

            {isHovering && (
              <Arrow id="target-arrow" width={90} height={90} fill="red" />
            )}
          </ImageContainer>
        </Section>

        <Section>
          <Subtitle>Quais são os Principais Causadores?</Subtitle>

          <Text>
            - Emissões descontroladas de gases; (indústrias, veículos,
            utilizadores de combustíveis fósseis)
          </Text>
          <Text>- Desmatamento;</Text>
          <Text>- Poluição;</Text>

          <Subtitle>Meios de Combate</Subtitle>

          <Text>- Replantio de Árvores;</Text>
          <Text>- Fontes de energia sustentáveis;</Text>
          <Text>- Descarte correto de lixo tóxico;</Text>
          <Text>- Utilização de veículos apenas quando necessário;</Text>
        </Section>

        <Section>
          <Subtitle>Conclusão</Subtitle>

          <Text>
            &nbsp;&nbsp;&nbsp;É necessário preservar o meio ambiente da melhor
            maneira possível, pois essa é a melhor solução para o aquecimento
            global e se for não controlado, prejudicará o futuro do planeta.
            <br />
            &nbsp;&nbsp;&nbsp; O primeiro passo é conscientizar, entender que há
            um problema acontecendo por debaixo dos panos e em seguida entender
            como tudo funciona. Será necessário desenvolver e seguir padrões de
            sustentabilidade, reduzindo a emissão de gases e lixos tóxicos para
            o planeta, assim evitando de o prejudicar. Descartar corretamente os
            lixos tóxicos; no topo da lista: eletrônicos, normalmente esses
            materiais tem elevadas taxa de decomposição. Evitar também
            desmatamentos, contribuindo para que o meio-ambiente tenha um
            sistema estável (influência direta nas temperatuas).
          </Text>
        </Section>

        <Section>
          <Subtitle>Comentários</Subtitle>

          <Container>
            <div className="add-comment-container">
              <CommentForm
                afterSubmit={value => {
                  setComments(list => {
                    list.push({
                      name: value?.name,
                      message: value?.message,
                      id: value?.id,
                    });

                    return [...list];
                  });
                }}
              />
            </div>

            <div className="list-comment-container">{renderComments}</div>
          </Container>
        </Section>
      </Main>
    </Wrapper>
  );
};

export default MainPage;
