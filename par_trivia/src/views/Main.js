import {Link} from "react-router-dom"

const Main = (props) => {

    return (
        <div className="pageContainer">
            <div className="links">
            <Link to="/register" className="signUp">Sign up</Link>
            <Link to="/login" className="login">Login</Link>
            </div>
            <h1 className="welcome">Welcome to TrivialParsuit!</h1>
        <div className="bodyContentMain">
            <img src="https://th.bing.com/th/id/OIP.I4pOa0jSEHXsSLcywlsmmwHaDk?w=350&h=168&c=7&r=0&o=5&pid=1.7" className="mainImg"/>
            <div className="creator">
                <h1>Created By:</h1>
                <img src="https://abingtonsports.com/images/2020/4/6/Nothdurft.jpg?width=942&quality=80&format=jpg" className="mattImg"/>
            </div>
        </div>
            <h1 className="about">TrivialParsuit is a golf themed trivia application that captures who I am <br/> and what I love, so please sign up or log in and have a great time! <br/>Hit em well!</h1>
        </div>
    );
};

export default Main;