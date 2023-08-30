import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./CourseVideo.module.css"


function CourseVideo() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?computer+dark"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?programer"
          alt="Second slide"
        />

     
      </Carousel.Item>


      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?computer-dark"
          alt="Third slide"
        />

       
      </Carousel.Item>


      <Carousel.Item>
        <img
          className={style.img}
          src="https://source.unsplash.com/random/700*500/?coder"
          alt="Third slide"
        />

      </Carousel.Item>


    </Carousel>
  );
}

export default CourseVideo;