import "./ourService.scss"

function OurServices() {
    return (
        <>
            <div className="main-4">
                <div className="ask-question">
                <h1>Want to know more? Ask us a question:</h1>
                <br /><br />
                    <div className="texts">
                        <label htmlFor="">Your Name</label>
                        <label htmlFor="">Your Number</label>
                        <label htmlFor="">Your Message</label>
                    </div>
                    <div className="input">
                        <input type="text" placeholder=" Your Name" />
                        <input type="number" placeholder=" Your number" />
                        <input type="text" placeholder=" Your message" />
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurServices;