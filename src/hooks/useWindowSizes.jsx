import { useState, useEffect } from 'react';

const useWindowSizes = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Função de tratamento do evento de redimensionamento da janela
    const onResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Adicionar um ouvinte de evento de redimensionamento da janela
    window.addEventListener('resize', onResize);

    // Remover o ouvinte de evento quando o componente for desmontado
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []); // O segundo argumento vazio garante que o efeito seja executado apenas uma vez

  return { width: windowSize?.width, height: windowSize?.height };
};

export default useWindowSizes;
