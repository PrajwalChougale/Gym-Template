import Carousel from 'react-bootstrap/Carousel';
import Featureimg1 from '../images/featureimg1.jpg';
import Featureimg2 from '../images/featureimg2.jpg'
import Featureimg3 from '../images/featureimg3.jpg'
import Featureimg4 from '../images/featureimg4.jpg'
function Featureimg() {
  return (
    <Carousel>
      
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={Featureimg4}
          alt="First slide"
          height={750}
        />
        <Carousel.Caption>
          <h1>ELITE PERSONAL TRAINING SERVICES</h1>
          <p>MAKE IT SHAPE</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={Featureimg1}
          alt="First slide"
          height={750}
        />
        <Carousel.Caption>
          <h1>Strength Training</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={Featureimg2}
          alt="Second slide"
          height={750}
        />
        <Carousel.Caption>
          <h1>Weight Gain</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Featureimg3}
          alt="Third slide"
          height={750}
        />
        <Carousel.Caption>
          <h1>Weight Loss</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Featureimg;