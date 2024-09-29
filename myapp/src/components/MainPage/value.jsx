import "./value.scss";
import IcHand from "../../assets/images/icons/ic-hand.png";
import IcSlippers from "../../assets/images/icons/ic-slippers.png";
import Like from "../../assets/images/icons/like.png";



function Value() {
    return ( 
        <>
            <div className="main-3">
                <div className="text">
                    <h1>Our core values</h1>
                    <p>Our mission is to set the highest standards for construction sphere.</p>
                </div>
                <div className="main-div">
                    <div className="divs">
                        <img src={Like} alt="" /><br /> <br />
                        <h2>Quality</h2><br />
                        <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                    </div>
                    <div className="divs">
                        <img src={IcHand} alt="" /><br /> <br />
                        <h2>Quality</h2><br />
                        <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                    </div>
                    <div className="divs">
                        <img src={IcSlippers} alt="" /><br /> <br />
                        <h2>Quality</h2><br />
                        <p>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
                    </div>

                </div>

            </div>
        </>
     );
}

export default Value;