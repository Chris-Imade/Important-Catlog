import React, { useState } from 'react';
import Curly from '../public/Group 23.png'
import BlurBg from '../public/blurBg.png'
import Google from '../public/google-logo.png'
import { Link } from 'react-router-dom';
import styles from '../styles/login.module.css'
import '../styles/login.css'
import { getAuth, getRedirectResult, GoogleAuthProvider, signInWithEmailAndPassword, signInWithRedirect } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { allActions } from '../Redux/ActionCreators/action';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const dispatch = useDispatch();
    const { setNewUser, setTrigger, setSharp } = bindActionCreators(allActions, dispatch);
    const trigger = useSelector(state => state.reducer.trigger);
    const sharp = useSelector(state => state.reducer.sharp);

    if(trigger) {
        setTimeout(() => {
            setTrigger(false);
        }, 4000)
    }

    const checkStatus = (action) => {
        switch (action.type) {
            case "SUCCESSFUL_LOGIN": {
                return setSharp({ message: `action.payload`, color: "text-green-500" })
            }
            case "UNSUCCESSFUL_LOGIN": {
                return setSharp({ message: action.payload, color: "text-red-500"})
            }
            default:
                return;
        }
    }



    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                window.localStorage.setItem("user", user);
                setNewUser(user);
                setTimeout(() => {
                    window.location.push("/");
                }, 4000)
                setUsername("");
                setPassword("");
                setEmail("");
                setTrigger(true);
                checkStatus({
                    type: "SUCCESSFUL_LOGIN",
                    payload: "Signed In successfully"
                })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setTrigger(true);
                checkStatus({
                    type: "UNSUCCESSFUL_LOGIN",
                    payload: `${errorMessage}`
                })
            });

    }


    const handleSigninWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithRedirect(auth, provider);
        getRedirectResult(auth)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                window.localStorage.setItem("user", user);
                setNewUser(user);
                setTimeout(() => {
                    window.location.push("/");
                }, 4000)
                setTrigger(true);
                checkStatus({
                    type: "SUCCESSFUL_LOGIN",
                    payload: "Signed In successfully"
                })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                setTrigger(true);
                checkStatus({
                    type: "UNSUCCESSFUL_LOGIN",
                    payload: `${errorCode}`
                })
            });
        // ...
    }




    return (
        <div className="login bg-slate-800">
            <div className="login__left">
                <h4 className='font-extrabold text-3xl mb-4'>Login</h4>
                <p className='mb-8'>Welcome back! login with your data you<br /> entered during registration.</p>
                <button onClick={() => handleSigninWithGoogle()} className='btn__google flex justify-center items-center'><img src={Google} alt='google' /><span className='w-4'></span>Login with google</button>
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
            {trigger && (
                <div className={`${styles.signupSuccess} absolute right-4 rounded-lg shadow-md bg-white p-9 top-2`}>
                    <p className={`${sharp.color} font-semibold text-2xl`}>{sharp.message}</p>
                </div>
            )}
        </div>
    )
};
export default Login;