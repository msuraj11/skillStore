import React, {useState} from 'react';
import {isEmpty, filter} from 'lodash';
import {Link} from 'react-router-dom';
import Card from './Card';
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Login = ({history, usersList, setAlert, openWindow}) => {
    const [formData, setFormData] = useState({
        username:'',
        password: ''
    });

    const {username, password} = formData;

    const onFieldChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value});    
    };

    const onSubmitForm = e => {
        e.preventDefault();
        console.log(filter(usersList, user => (user.username === username && user.password === password)));
        if (filter(usersList, user => (user.username === username && user.password === password)).length > 0) {
            setAlert('Welcome to Skill-Store!!!', 'success');
            setTimeout(() => {
                history.push(`/skillstore/${username}`);
            }, 1000);
        } else {
            setAlert('User not found!, Please sign-up before loggin in.', 'danger');
            setTimeout(() => {
                setAlert();
            }, 10000);
        } 
    };

    return (
        <div className="landing-background">
            <Card className="login">
                <h3>Sign in to Skill Store</h3>
                <form className="form" onSubmit={e => onSubmitForm(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Username"
                            name="username"
                            value={username}
                            onChange={e => onFieldChange(e)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onFieldChange(e)}
                            minLength="6"
                        />
                    </div>
                    <button
                        type="submit"
                        className="init-button"
                        disabled={isEmpty(password) || isEmpty(username)}
                    >
                        Login
                    </button>
                </form>
                <p>--------------OR---------------</p>
                <button onClick={() => openWindow('gmail')}>
                    <FcGoogle />  Sign in with Google
                </button>
                <button onClick={openWindow}>
                    <GrFacebook />  Sign in with Facebook
                </button>
                <p className="my-1">
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </p>
            </Card>
        </div>
    )
};

export default Login;
