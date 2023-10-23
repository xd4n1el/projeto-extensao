import styled from 'styled-components';
import { BIBLIOGRAPHIES } from 'utils/Constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 16px;
`;

const TextContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;
`;

const Text = styled.p`
  color: #000000;
  line-height: 100%;
  margin: 0;
  padding: 0;
  margin-right: 6px;
  font-weight: 400;
`;

const Link = styled.a`
  color: #000000;
  line-height: 100%;
  margin: 0;
  padding: 0;
  margin-right: 6px;
`;

const Bibliography = () => {
  const renderBibliographies = () => {
    return BIBLIOGRAPHIES.map(site => (
      <TextContainer key={site.name}>
        <Text>
          <b>{site.article}</b> - {site.desription}
        </Text>

        <Link href={site.url} target="blank" about="global warming">
          AQUI
        </Link>
      </TextContainer>
    ));
  };

  return <Wrapper>{renderBibliographies()}</Wrapper>;
};

export default Bibliography;
