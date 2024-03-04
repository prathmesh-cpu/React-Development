import React from 'react';
import { Link } from "react-router-dom";

// Class based Component => It is a normal JS class which contains render methods that returns some piece of JSX.
// React.Component comes from React library.
class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "",
                location: "",
                login: "",
                avatar_url: ""
            }
        }
    }

    async componentDidMount() {
        // API Calls
        const data = await fetch("https://api.github.com/users/prathmesh-cpu");
        const json = await data.json();
        console.log(json);
        this.setState({
            userInfo: json
        });
    }

    render() {

        const { name, location, login, avatar_url, html_url } = this.state.userInfo;

        return (
            <div className="userCard">
                <img src={avatar_url} alt="userLogo" />
                <h2>{name}</h2>
                <p><b>Location:</b> {location}</p>
                <p><b>GitHub Id:</b> <Link to={html_url} target='_blank'> @{login} </Link></p>
            </div>
        )
    }
}

export default User;