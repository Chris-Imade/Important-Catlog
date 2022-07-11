import React, { useState } from 'react';
import Curly from '../public/Group 23.png';
import BlurBg from '../public/blurBg.png';
import Google from '../public/google-logo.png';
import { Link } from 'react-router-dom';
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithRedirect, 
    signInWithPopup, 
    getRedirectResult 
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { allActions } from '../Redux/ActionCreators/action';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Signup.modules.css";
import EyeClosed from "../public/eye-closed.png";
import EyeOpened from "../public/eye-opened.png";

export const Signup = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [radio, setRadio] = useState("");
    const [resultMessage, setResultMessage] = useState("");
    
    const dispatch = useDispatch();

    const { setNewUser } = bindActionCreators(allActions, dispatch);
    const user = useSelector(state => state.reducer.user);
    console.log("user from redux: " + JSON.stringify(user));

    const googleSignUp = async() => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log("USER: " + user);
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
          // ...
        });
        
        // auth.useDeviceLanguage();
        
        // signInWithRedirect(auth, provider);


        // getRedirectResult(auth)
        // .then((result) => {
        //   // This gives you a Google Access Token. You can use it to access Google APIs.
        //   const credential = GoogleAuthProvider.credentialFromResult(result);
        //   const token = credential.accessToken;
      
        //   // The signed-in user info.
        //   const user = result.user;
        //   console.log("User" + JSON.stringify(user));
        //   console.log("Result" + JSON.stringify(result));
        //   setNewUser(user);
        // //   setSignUpComplete(true);
        //   setResultMessage(`Successfully created ${username}'s account`);
        // }).catch((error) => {
        //   // Handle Errors here.
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   // The email of the user's account used.
        //   const email = error.customData.email;
        //   // The AuthCredential type that was used.
        //   const credential = GoogleAuthProvider.credentialFromError(error);
        //   // ...
        //   setResultMessage(errorMessage);
        //   console.log(errorMessage);
        // });

    }



    // if(user) {
    //     if(radio) {
    //         let details = {
    //             name: username,
    //             password: password,
    //             email: email
    //         }

    //         window.localStorage.setItem("userDetails", details);
    //     }
        
    //     window.localStorage.setItem("username", username);
        
    //     setUsername("");
    //     setPassword("");
    //     setEmail("");
    // }

    const createUserAccount = (e) => {
        e.preventDefault();
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setNewUser(user);
            // setSignUpComplete(true);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log()
            console.log(error, `errorCode: ${errorCode}, errorMessage: ${errorMessage}`);
        });
        
    }


    return (
        <div className="flex bg-white flex-col lg:flex-row">
            <div className="login__left">
                <h4 className='font-extrabold text-3xl mb-4'>Signup</h4>
                <p className='mb-8'>Welcome! Sign up to  start shopping your <br />favourite collections.</p>
                <button onClick={() => googleSignUp()} className='btn__google flex justify-center items-center hover:shadow-lg'>
                    <img src={Google} alt='google' />
                    <span className='w-4'></span>Signup with google
                </button>
                <div className="hr my-4">
                    <hr />
                </div>
                <form onSubmit={(e) => createUserAccount(e)} className='border-0'>
                <div className="email mb-4">
                        <label htmlFor="email">Full Name</label>
                        <input onChange={(e) => setUsername(e.target.value)} id='name' type="name" placeholder='John Doe' name='name' />
                    </div>
                    <div className="email mb-4">
                        <label htmlFor="email">Email</label>
                        <input onChange={(e) => setEmail(e.target.value)} id='email' type="email" placeholder='example@domain.com' name='email' />
                    </div>
                    <div className="password mb-4 relative">
                        <label htmlFor="password">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} id='password' type={showPass ? "text" : "password"} placeholder='' name='password' />
                        <div className="absolute right-2 bottom-4">
                            <img onClick={() => setShowPass(!showPass)} src={showPass ? EyeOpened : EyeClosed} alt="pass_icon" width={20} />
                        </div>
                    </div> 
                    <div className="radio flex justify-between">
                        <div className="left">
                            <input onChange={(e) => setRadio(e.target.value)} type="radio" id='saved' name='saved' className='mr-2' />
                            <label htmlFor="saved">Remember me</label>
                        </div>
                        <div className="right">Forget password</div>
                    </div>
                    <div className="login__btn">
                        <button type='submit'>Sign Up</button>
                    </div>
                </form>
                <div className='flex justify-center items-center'>
                    <p className='signup_p'>Already have an account ? <span className="text-gray-800"><Link to="/login">Login</Link></span>
                        <img className='absolute right-[-2rem] top-0' src={Curly} alt="Curly" width={40} height={20} />
                    </p>
                </div>
            </div>
            <div className="login__right relative mb-[-20px]">
                <img className="hidden" placeholder="blur" width={395.07} height={420.04} src={BlurBg} alt="blur" />
            </div>
            {/* {user && setTimeout(() => {
                return (
                    <div className={`${styles.signupSuccess} absolute right-4 rounded-lg shadow-md bg-white p-9 top-2`}>
                        <p className='text-green-500 font-semibold text-2xl'>{resultMessage}</p>
                    </div>
                )
            }, 4000)} */}
        </div>
    )
};
export default Signup;