import image from "../../assets/contact.png";
import React from "react";
import User from "./User";

class Contact extends React.Component {

    constructor(props) {

        super(props);
    }

    componentDidMount() { }

    render() {
        return (
            <div className="main">
                <h1>Contact <span>Us</span></h1>
                {/* Class Based Component */}
                <div className="userContactContainer">
                    <User />
                </div>

                <div className="contact-container" id="contact">
                    <section>
                        <div className="left">
                            <img src={image} alt="" />
                        </div>
                        <div className="right">
                            <form>
                                <div>
                                    <label htmlFor="name"><i className="fa-solid fa-user"></i></label>
                                    <input type="text" placeholder="Name" id="name" name="name" required />
                                </div>
                                <div>
                                    <label htmlFor="email"><i className="fa-solid fa-envelope"></i></label>
                                    <input type="email" placeholder="Email" id="email" name="email" required />
                                </div>
                                <div>
                                    <label htmlFor="phone"><i className="fa-solid fa-phone"></i></label>
                                    <input type="tel" placeholder="Phone" id="phone" name="phone" pattern="[1-9]{1}[0-9]{9}"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="usertext"><i className="fa-solid fa-comment-dots"></i></label>
                                    <textarea placeholder="Message" name="usertext" cols="21" rows="3" id="usertext"
                                        required></textarea>
                                </div>
                                <button>Submit &nbsp;<i className="fa-sharp fa-solid fa-play fa-2xs"></i></button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Contact;