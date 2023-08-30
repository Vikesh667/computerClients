import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./SlideShow.module.css"

function SlideShow() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?computer+dark"
          alt="First slide"
        />
        <Carousel.Caption className={style.Caption}>
          <h3>Martin Fowler</h3>
          <p>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?programer"
          alt="Second slide"
        />

        <Carousel.Caption className={style.Caption}>
          <h3>John Johnson</h3>
          <p>“First, solve the problem. Then, write the code.” </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?computer-dark"
          alt="Third slide"
        />

        <Carousel.Caption className={style.Caption}>
          <h3>Oscar Wilde</h3>
          <p>
          “Experience is the name everyone gives to their mistakes.”
          </p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?coder"
          alt="Third slide"
        />

        <Carousel.Caption className={style.Caption} >
          <h3>Coco Chanel</h3>
          <p>
          “ In order to be irreplaceable, one must always be different”
          </p>
        </Carousel.Caption>
      </Carousel.Item>


    </Carousel>
  );
}

export default SlideShow;