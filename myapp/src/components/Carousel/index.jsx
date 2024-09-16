import "./style.scss"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import FirstBigImg from "../../assets/images/firstBgImg.jpg"

function CarouselComponet() {
  return (
    <>
      <Carousel>
        <div className="car">
          <h1>this is carousel</h1>
          <img src={FirstBigImg} alt="" />
        </div>
        <div className="car">
        <h1>this is carousel</h1>

          <img src={FirstBigImg} alt="" />

        </div>
        <div className="car">
        <h1>this is carousel</h1>

          <img src={FirstBigImg} alt="" />

        </div>
        <div className="car">
        <h1>this is carousel</h1>

          <img src={FirstBigImg} alt="" />
        </div>
      </Carousel>
    </>
  );
}

export default CarouselComponet;
