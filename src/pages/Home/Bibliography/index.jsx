import styled from 'styled-components';
import tw from 'twin.macro';
import { BIBLIOGRAPHIES, images } from 'utils/Constants';

const Wrapper = styled.div`
  ${tw`flex flex-col w-full h-full box-border p-4 overflow-y-auto`}
`;

const Container = styled.div`
  ${tw`w-full h-fit box-border p-4 border-2 border-themes-basic-green rounded-lg flex flex-col mb-32`}
`;

const TextContainer = styled.div`
  ${tw`w-fit h-fit flex justify-center items-center border border-themes-basic-black
      box-border p-2 rounded-lg shadow-lg mb-4 last:mb-0`}

  & .text-container {
    ${tw`w-full flex h-fit`}
  }
`;

const Text = styled.p`
  ${tw`text-black [line-height: 100%] m-0 p-0 mr-1.5 font-normal h-fit w-fit`}

  &.name {
    ${tw`ml-auto mt-2 [font-size: 13px] font-black text-themes-basic-black`}
  }
`;

const Link = styled.a`
  ${tw`text-themes-nature-green font-bold m-0 p-0 mr-1.5 h-fit w-fit [line-height: 100%]`}
`;

const Bibliography = () => {
  const renderBibliographies = () => {
    return BIBLIOGRAPHIES.map(site => (
      <TextContainer key={site.name} style={{ flexDirection: 'column' }}>
        <div className="text-container">
          <Text>
            <b>{site.article}</b> - {site.description}
          </Text>

          <Link href={site.url} target="blank" about="global warming">
            AQUI.
          </Link>
        </div>

        <Text className="name">{site.name}</Text>
      </TextContainer>
    ));
  };

  const renderImages = () => {
    return images.map((image, index) => (
      <TextContainer key={image.name}>
        <Text>
          <b>Imagem {index + 1}</b> disponível
        </Text>

        <Link href={image.url} target="blank" about={image.name}>
          AQUI.
        </Link>
      </TextContainer>
    ));
  };

  return (
    <Wrapper>
      <Container>
        {renderBibliographies()}
        {renderImages()}
      </Container>
    </Wrapper>
  );
};

export default Bibliography;
