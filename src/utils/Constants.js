export const ROUTES = ['/', '/bibliografia'];
export const [HOME, BIBLIOGRAPHY] = ROUTES;

import WOODS_WALLPAPER from 'assets/woods.jpg';
import ICE_WALLPAPER from 'assets/ice.jpeg';
import DEAD_WOODS_WALLPAPER from 'assets/dead_woods.jpg';
import OZONE_LAYER_WALLPAPER from 'assets/ozone_layer.jpeg';
import HURRICANE_WALLPAPER from 'assets/hurricane.webp';

export const BIBLIOGRAPHIES = [
  {
    url: 'https://www.wwf.org.br/natureza_brasileira/reducao_de_impactos2/clima/mudancas_climaticas2/',
    name: 'WWF',
    accessDate: '15/10/2023',
    description:
      'informações completas sobre o aquecimento global e seus agentes causadores',
    article: 'As Mudanças Climáticas',
  },
  {
    url: 'https://pt.wikipedia.org/wiki/Lista_de_recordes_meteorol%C3%B3gicos',
    name: 'Wikipédia',
    accessDate: '23/10/2023',
    description: 'Informações sobre ranking meteorólogicos',
    article: 'Lista de recordes meteorológicos',
  },
  {
    url: 'https://umsoplaneta.globo.com/clima/noticia/2021/04/04/como-o-aquecimento-global-afeta-a-vida-das-pessoas.ghtml',
    name: 'O Planeta',
    accessDate: '23/10/2023',
    description:
      'Informações sobre o impacto do aquecimento global na vida das pessoas',
    article: 'Como o aquecimento global afeta a vida das pessoas?',
  },
  {
    url: 'https://www.ibflorestas.org.br/aquecimento-global',
    name: 'IBF (Instituto Brasileiro de Florestas)',
    accessDate: '23/10/2023',
    description: 'Informações sobre os causadores do aquecimento global',
    article: 'Aquecimento Global: Reflexos do Desmatamento',
  },
  {
    url: 'https://www.wwf.org.br/natureza_brasileira/questoes_ambientais/camada_ozonio/',
    name: 'WWF',
    accessDate: '23/10/2023',
    description: 'Informações sobre a camada de ozônio',
    article: 'O Que é a Camada de Ozônio?',
  },
  {
    url: 'https://www.ecycle.com.br/calotas-polares/',
    name: 'eCycle',
    accessDate: '28/10/2023',
    description: 'Informações sobre Calotas Polares',
    article: 'Calotas polares: o que são e importância',
  },
  {
    url: 'https://brasilescola.uol.com.br/geografia/aquecimento-global.htm',
    name: 'Brasil Escola',
    accessDate: '28/10/2028',
    description: 'Informações sobre aquecimento global',
    article: 'Aquecimento Global',
  },
];

export const images = [
  {
    src: WOODS_WALLPAPER,
    id: 'woods-wallpaper',
    name: 'woods',
    url: 'https://br.pinterest.com/pin/848858229741480484/',
  },
  {
    src: DEAD_WOODS_WALLPAPER,
    id: 'dead-woods-wallpaper',
    name: 'dead-woods',
    url: 'https://f.i.uol.com.br/fotografia/2020/10/23/16034632245f92e8388819a_1603463224_3x2_rt.jpg',
  },
  {
    src: HURRICANE_WALLPAPER,
    id: 'hurricane',
    name: 'hurricane',
    url: 'https://iagjunior.files.wordpress.com/2019/10/tornado1-e1571610397717.jpg?w=1920',
  },
  {
    src: ICE_WALLPAPER,
    id: 'ice-wallpaper',
    name: 'ice-layer',
    url: 'https://observatorio3setor.org.br/wp-content/uploads/2023/02/AdobeStock_450205811.jpeg',
  },
  {
    src: OZONE_LAYER_WALLPAPER,
    id: 'ozone-layer-wallpaper',
    name: 'ozone-layer',
    url: 'https://fatorrrh.com.br/wp-content/uploads/2023/01/Terra-248814087018e199c4bddadd4ebafeede13897d1.jpeg',
  },
];
