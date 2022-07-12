import React, { useState } from 'react';
import Curly from '../public/Group 23.png'
import BlurBg from '../public/blurBg.png'
import Google from '../public/google-logo.png'
import { Link } from 'react-router-dom';
import styles from '../styles/login.module.css'
import '../styles/login.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allActions } from '../Redux/ActionCreators/action';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { setNewUser } = bindActionCreators(allActions, dispatch);

    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            setNewUser(user);
            window.history.back();
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });

    }

    return (
        <div className="login bg-slate-800">
            <div className="login__left">
                <h4 className='font-extrabold text-3xl mb-4'>Login</h4>
                <p className='mb-8'>Welcome back! login with your data you<br /> entered during registration.</p>
                <button className='btn__google flex justify-center items-center'><img src={Google} alt='google' /><span className='w-4'></span>Login with google</button>
                <div className={`${styles.hr} my-4`}>
                    <hr className={styles.hr__main} />
                </div>
                <form className='border-0' onSubmit={(e) => handleLogin(e)}>
                    <div className="email mb-4">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} id='email' type="email" placeholder='example@domain.com' name='email' />
                    </div>
                    <div className="password mb-4">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} id='password' type="password" placeholder='' name='password' />
                    </div> 
                    <div className="radio flex justify-between">
                        <div className="left">
                            <input type="radio" id='saved' name='saved' className='mr-2' />
                            <label htmlFor="saved">Remember me</label>
                        </div>
                        <div className="right">Forget password</div>
                    </div>
                    <div className="login__btn">
                        <button type='submit'>Login</button>
                    </div>
                </form>
                <div className='flex justify-center items-center'>
                    <p className='signup_p'>Don’t have an account ? <span className="text-gray-800"><Link to="/signup">Sign up</Link></span><img className='curly__img' src={Curly} alt="Curly" width={40} height={20} /></p>
                </div>
            </div>
            <div className="login__right relative">
                <img placeholder="blur" width={395.07} height={420.04} src={BlurBg} alt="blur" />
            </div>
        </div>
    )
};
export default Login;