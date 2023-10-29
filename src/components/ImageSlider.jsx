import styled from 'styled-components';
import tw from 'twin.macro';

import SliderBase from 'react-slick';

import { useEffect, useRef } from 'react';
import { images } from 'utils/Constants';

const ImageContainer = styled.div`
  ${tw`w-full flex relative [max-height: 700px]`}

  & > img {
    width: 100%;
  }
`;

const Slider = styled(SliderBase)`
  ${tw`w-full h-full overflow-hidden`}

  & .slick-track {
    ${tw`w-full flex`}
  }

  & .slick-list {
    ${tw`w-full h-full flex`}
  }

  & .slick-track {
    ${tw`w-full h-full flex`}
  }

  & .slick-slide {
    ${tw`h-full w-full flex`}

    & > div {
      ${tw`w-full h-full flex`}
    }
  }
`;

const ImageSlider = () => {
  const ref = useRef(null);

  const settings = {
    fade: true,
    arrows: false,
    autoplay: false,
    draggable: false,
    touchMove: false,
    slidesToShow: 1,
    speed: 1000,
  };

  useEffect(() => {
    if (!ref?.current) return;

    setTimeout(() => {
      ref?.current?.slickGoTo(1);
    }, 2500);
  }, []);

  return (
    <ImageContainer>
      <Slider {...settings} ref={ref}>
        {images.map((image, index) => {
          return (
            <img
              key={`slider-img-${index}`}
              src={image.src}
              data-tooltip-id={image.id}
              alt="woods-image"
              style={{ maxHeight: '650px' }}
            />
          );
        })}
      </Slider>
    </ImageContainer>
  );
};

export default ImageSlider;
