import { format } from 'date-fns';
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.div`
  ${tw`flex flex-col rounded-lg h-fit box-border p-4 bg-themes-basic-green w-full [min-width: 300px]`}

  & .name-container {
    ${tw`flex w-fit h-fit items-center`}
  }

  & .message-container {
    ${tw`w-fit h-fit flex [background-color: #f2f2f2] rounded-xl box-border p-4 [min-width: 200px] [min-height: 40px]`}
  }

  & .date-container {
    ${tw`w-full h-fit flex items-end justify-end`}
  }

  & > * {
    ${tw`mb-4 last:mb-0`}
  }
`;

const Text = styled.p`
  ${tw`w-fit h-fit p-0 !m-0 [line-height: 100%] [white-space: wrap] text-themes-basic-black`}

  ${props =>
    props.$isName
      ? tw`font-black text-xl tracking-wide`
      : tw`font-medium text-lg`}

  ${props => props.$isDate && tw`font-medium text-sm ml-auto`}
`;

const CommentBox = ({
  name = 'Teste',
  message = 'Teste Teste',
  createdAt = new Date(),
}) => {
  const formatDate = () => {
    const date = format(createdAt, 'dd/MM/yyyy - HH:mm');

    return date;
  };

  return (
    <Wrapper>
      <div className="name-container">
        <Text>Enviado por:&nbsp;&nbsp;</Text>
        <Text $isName>{name}</Text>
      </div>

      <div className="message-container">
        <Text>{message}</Text>
      </div>

      <div className="date-container">
        <Text $isDate>{formatDate()}</Text>
      </div>
    </Wrapper>
  );
};

export default CommentBox;
