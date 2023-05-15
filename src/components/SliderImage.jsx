import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sliderImage.css';


function SliderImage(props) {
  const {img} = props;
  const {slide} = props;

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: slide, //props.slide also correct when use it remove line 9. same way to img in line 24.
    slidesToScroll: 1,    //{} are used only in html tags
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };

  return (
    <Slider {...settings}>
      {img.map((image, index) => (
        <div key={index} className={props.class}>
          <img src={image.url} alt={`slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  )
}


export default SliderImage