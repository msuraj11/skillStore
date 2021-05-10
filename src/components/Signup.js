import React, {useState} from 'react';
import {isEmpty} from 'lodash';
import {Link} from 'react-router-dom';
import Card from './Card';
import { GrFacebook } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";

const Signup = ({history, setUsers, setAlert, openWindow}) => {
    const [formData, setFormData] = useState({
        fields:{
            username:'',
            email: '',
            mobileNumber: '',
            password: '',
            confirmPassword: ''
        },
        isErrorMessageOnMobNumb: false,
        isPasswordMatch: true,
        isEmailError: false,
        disableRegButton: false
    });

    const {fields, isErrorMessageOnMobNumb, isPasswordMatch, isEmailError, disableRegButton} = formData;
    const {username, email, mobileNumber, password, confirmPassword} = fields;

    const onFieldChange = e => {
        setFormData({...formData, fields: {...fields, [e.target.name]: e.target.value}});    
    };

    const onBlurFields = e => {
        if (!isEmpty(confirmPassword) && password !== confirmPassword) {
            setFormData({...formData, isPasswordMatch: false});
        } else {
            setFormData({...formData, isPasswordMatch: true});
        }
        if (e.target.name === 'mobileNumber') {
            const mobNum = `+91${e.target.value}`
            const mobRegX = /^((\+){1}91){1}[6-9]{1}[0-9]{9}$/;
            setFormData({...formData, isErrorMessageOnMobNumb: !mobRegX.test(mobNum)});            
        }
        if (e.target.name === 'email') {
            const emailRegX = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
            setFormData({...formData, isEmailError: !emailRegX.test(email)});
        }
    };

    const onSubmitForm = e => {
        e.preventDefault();
        setUsers({username, email, mobileNumber, password});
        setAlert('You have successfully signed up please navigate to login page', 'success');
        setTimeout(() => {
            history.push('/login');
            setAlert();
        }, 5000);
    };

    return (
        <div className="landing-register">
            <Card className="signup">
                <h3>Sign up to Skill Store</h3>
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
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={email}
                            onChange={e => onFieldChange(e)}
                            onBlur={e => onBlurFields(e)}
                        />
                        {isEmailError &&
                            <small className="form-danger">
                                Invalid E-Mail format.
                            </small>
                        }
                    </div>
                    <div className="form-group">
                        <input
                            type="tel"
                            placeholder="Mobile Number"
                            name="mobileNumber"
                            minLength="10"
                            value={mobileNumber}
                            onChange={e => onFieldChange(e)}
                            onBlur={e => onBlurFields(e)}
                        />
                        {isErrorMessageOnMobNumb &&
                            <small className="form-danger">
                                Mobile number entered is not valid.
                            </small>
                        }
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={e => onFieldChange(e)}
                            onBlur={e => onBlurFields(e)}
                            minLength="6"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={e => onFieldChange(e)}
                            onBlur={e => onBlurFields(e)}
                            minLength="6"
                        />
                        {!isEmpty(password) && !isEmpty(confirmPassword) && !isPasswordMatch &&
                            <small className="form-danger">
                                Passwords didnot match.
                            </small>
                        }
                    </div>
                    <button
                        type="submit"
                        className="init-button"
                        disabled={!isPasswordMatch || isErrorMessageOnMobNumb || isEmailError ||
                            isEmpty(username) || isEmpty(email) || isEmpty(mobileNumber) ||
                            isEmpty(password) || isEmpty(confirmPassword) || disableRegButton}
                    >
                        Sign up
                    </button>
                </form>
                <div className="icons-row">
                    <span onClick={() => openWindow('gmail')}><FcGoogle /></span>
                    <span onClick={openWindow}><GrFacebook /></span>
                </div>
                <p className="my-1">
                    Already have an account? <Link to='/login'>Sign In</Link>
                </p>
            </Card>
        </div>
    )
};

export default Signup;
