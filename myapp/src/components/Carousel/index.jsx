import "./style.scss"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel'
import FirstBigImg from "../../assets/images/firstBgImg.jpg"

function CarouselComponet() {
  return (

    <div className="main">
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
      >

        <div className="car">
          <div className="text">
            <h1>CREATEX</h1>
            <h1>CONSTRUCTION</h1>
            <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
            <div className="btns">
              <button className="first-btn">LEARN MORE ABOUT US</button>
              <button className="second-btn">SUBMIT REQUEST</button>
            </div>

          </div>
          <img height={900} src={FirstBigImg} alt="" />
        </div>
        <div className="car">
          <div className="text">
            <h1>CREATEX</h1>
            <h1>CONSTRUCTION</h1>
            <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
            <div className="btns">
              <button className="first-btn">LEARN MORE ABOUT US</button>
              <button className="second-btn">SUBMIT REQUEST</button>
            </div>

          </div>

          <img height={900} src={FirstBigImg} alt="" />

        </div>
        <div className="car">
          <div className="text">
            <h1>CREATEX</h1>
            <h1>CONSTRUCTION</h1>
            <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
            <div className="btns">
              <button className="first-btn">LEARN MORE ABOUT US</button>
              <button className="second-btn">SUBMIT REQUEST</button>
            </div>

          </div>
          <img height={900} src={FirstBigImg} alt="" />

        </div>
        <div className="car">
          <div className="text">
            <h1>CREATEX</h1>
            <h1>CONSTRUCTION</h1>
            <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed. Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis. </p>
            <div className="btns">
              <button className="first-btn">LEARN MORE ABOUT US</button>
              <button className="second-btn">SUBMIT REQUEST</button>
            </div>

          </div>

          <img height={900} src={FirstBigImg} alt="" />
        </div>
      </Carousel>
    </div>

  );
}

export default CarouselComponet;
