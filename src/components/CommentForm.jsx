import { useState } from 'react';
import { useFormik } from 'formik';
import styled, { keyframes } from 'styled-components';
import tw from 'twin.macro';
import api from 'services/api';

import { toast } from 'react-toastify';

import * as yup from 'yup';

const fadeIn = keyframes`
    from {
        opacity: 0
    }

    to {
        opacity: 1;
    }
`;

const Form = styled.form`
  ${tw`w-full h-fit box-border p-4 bg-white border-2 border-themes-basic-green rounded-lg [max-width: 600px] flex flex-col`}
`;

const InputBox = styled.div`
  ${tw`w-full h-fit box-border py-2 flex flex-col relative mb-2 last:mb-0`}
`;

const Label = styled.label`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  ${tw`font-bold mb-2 text-base ml-2 absolute [transition: all 250ms ease-in-out] 
        bg-white [line-height: 100%] m-0 py-0 px-2 w-fit h-fit pointer-events-none`}

  ${props => (props.$error ? tw`text-red-600` : tw`text-themes-basic-black `)} 

  ${props =>
    props.$isFocused
      ? tw`[transform: translate(10px, -12px)]`
      : tw`[transform: translate(0, 7px)]`}
`;

const Input = styled.input`
  ${tw`bg-transparent border text-themes-basic-green rounded-lg w-full h-10 [max-width: 400px] box-border pl-2
            font-bold text-lg`}

  ${props =>
    props.$error ? tw`border border-red-600` : tw`border-themes-basic-black`} 

  &:focus {
    ${tw`outline-0`}
  }
`;

const TextArea = styled.textarea`
  ${tw`bg-transparent border text-themes-basic-green  rounded-lg w-full h-32 box-border p-2 font-bold text-lg resize-none`}

  ${props =>
    props.$error ? tw`border border-red-600` : tw`border-themes-basic-black`} 

  &:focus {
    ${tw`outline-0`}
  }
`;

const ErrorText = styled.p`
  ${tw`text-red-600 font-bold text-sm m-0 p-0 w-fit h-fit mb-2`}

  animation: ${fadeIn} 700ms linear;
`;

const Button = styled.button`
  ${tw`bg-themes-basic-green rounded-lg border-none h-9 w-full [max-width: 150px] text-white font-bold [transition: 30ms ease-in-out] mb-2 last:mb-0`}

  &:active {
    ${tw`[filter: contrast(150%)] text-themes-basic-black`}
  }
`;

const validationSchema = yup.object({
  name: yup
    .string()
    .min(3, 'Deve ter no mínimo 3 caracteres')
    .required('Campo NOME deve ser preenchido.'),
  message: yup
    .string()
    .min(3, 'Deve ter no mínimo 3 caracteres')
    .required('Campo COMENTÁRIO deve ser preenchido.'),
});

const CommentForm = ({ afterSubmit = () => {} }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);

  const onSubmit = async values => {
    try {
      const { status, data } = await api.post('/comments', values);

      if (status !== 201) throw new Error();

      toast.success('Comentário salvo com sucesso!');

      afterSubmit(data?.comment);
      handleReset();
    } catch {
      toast.error('Falha ao salvar comentário.');
    }
  };

  const { values, errors, touched, handleChange, handleSubmit, handleReset } =
    useFormik({
      initialValues: {
        name: '',
        message: '',
      },
      onSubmit,
      validationSchema,
    });

  const onFocusInput = () => {
    setIsInputFocused(true);
  };
  const onBlurInput = () => {
    if (values.name.length > 0) return;

    setIsInputFocused(false);
  };

  const onFocusTextArea = () => {
    setIsTextAreaFocused(true);
  };

  const onInputChange = event => {
    const value = event.target.value;

    // eslint-disable-next-line no-useless-escape
    if (!value[value.length - 1]?.match(/[a-zA-Z\s]+/) && value !== '') return;

    handleChange(event);
  };

  const onBlurTextArea = () => {
    if (values.message.length > 0) return;

    setIsTextAreaFocused(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputBox>
        <Label
          htmlFor="name"
          $isFocused={isInputFocused}
          $error={errors.name && touched.name}>
          Nome
        </Label>

        <Input
          id="name"
          autoComplete="off"
          onFocus={onFocusInput}
          onBlur={onBlurInput}
          onChange={onInputChange}
          value={values.name}
          $error={errors.name && touched.name}
        />
      </InputBox>

      <InputBox>
        <Label
          htmlFor="message"
          $isFocused={isTextAreaFocused}
          $error={errors.message && touched.message}>
          Comentário
        </Label>

        <TextArea
          id="message"
          autoComplete="off"
          onChange={handleChange}
          onFocus={onFocusTextArea}
          onBlur={onBlurTextArea}
          value={values.message}
          $error={errors.message && touched.message}
        />
      </InputBox>

      {errors.name && touched.name && <ErrorText>{errors.name}</ErrorText>}
      {errors.message && touched.message && (
        <ErrorText>{errors.message}</ErrorText>
      )}

      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default CommentForm;
