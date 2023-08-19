import { useRef } from 'react';
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import slider2 from "../assets/slider2.png";
import slider3 from "../assets/slider3.png";
import slider4 from "../assets/slider4.png";
import './SliderComponent.css';

export function SliderComponent  ()  {
  const sliderRef = useRef(null);
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: (
      <button className="slider-button slider-button-right" onClick={() => sliderRef.current.slickNext()}>
        <FaChevronRight />
      </button>
    ),
    prevArrow: (
      <button className="slider-button slider-button-left" onClick={() => sliderRef.current.slickPrev()}>
        <FaChevronLeft />
      </button>
    ),
  };

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...sliderSettings} style={{ width: '100%', height: 'auto' }}>
        <div>
          <img src={slider2} alt="Slider 2" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={slider3} alt="Slider 3" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div>
          <img src={slider4} alt="Slider 4" style={{ width: '100%', height: 'auto' }} />
        </div>
      </Slider>

      <div className="slider-buttons">
        <button className="slider-button slider-button-left" onClick={() => sliderRef.current.slickPrev()}>
          <FaChevronLeft />
        </button>
        <button className="slider-button slider-button-right" onClick={() => sliderRef.current.slickNext()}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default SliderComponent;
