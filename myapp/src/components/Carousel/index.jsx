import "./style.scss"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import FirstBigImg from "../../assets/images/firstBgImg.jpg"

function CarouselComponet() {
  return (
    <>
     <div className="main">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
      >
       
        <div className="car">
          <h1>CREATEX</h1>
          <h1>CONSTRUCTION</h1>
          <img height={900} src={FirstBigImg} alt="" />
        </div>
        <div className="car">
        <h1>CREATEX</h1>
        <h1>CONSTRUCTION</h1>

          <img  height={900} src={FirstBigImg} alt="" />

        </div>
        <div className="car">
        <h1>CREATEX</h1>
        <h1>CONSTRUCTION</h1>

          <img height={900} src={FirstBigImg} alt="" />

        </div>
        <div className="car">
        <h1>CREATEX</h1>
        <h1>CONSTRUCTION</h1>

          <img height={900} src={FirstBigImg} alt="" />
        </div>
      </Carousel>
      </div>

    </>
  );
}

export default CarouselComponet;
