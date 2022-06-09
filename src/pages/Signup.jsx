import React from 'react';
import Curly from '../public/Group 23.png'
import BlurBg from '../public/blurBg.png'
import Google from '../public/google-logo.png'
import { Link } from 'react-router-dom'


export const signup = () => {
    return (
        <div className="login bg-slate-800">
            <div className="login__left">
                <h4 className='font-extrabold text-3xl mb-4'>Signup</h4>
                <p className='mb-8'>Welcome! Sign up to  start shopping your <br />favourite collections.</p>
                <button className='btn__google flex justify-center items-center'><img src={Google} alt='google' /><span className='w-4'></span>Signup with google</button>
                <div className="hr my-4">
                    <hr />
                </div>
                <form className='border-0'>
                <div className="email mb-4">
                        <label htmlFor="email">Full Name</label>
                        <input id='email' type="name" placeholder='John Doe' name='email' />
                    </div>
                    <div className="email mb-4">
                        <label htmlFor="email">Email</label>
                        <input id='email' type="email" placeholder='example@domain.com' name='email' />
                    </div>
                    <div className="password mb-4">
                        <label htmlFor="password">Password</label>
                        <input id='password' type="password" placeholder='' name='password' />
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
                    <p className='signup_p'>Don’t have an account ? <span className="text-gray-800"><Link to="/login">Login</Link></span><img className='curly__img' src={Curly} alt="Curly" width={40} height={20} /></p>
                </div>
            </div>
            <div className="login__right relative">
                <img placeholder="blur" width={395.07} height={420.04} src={BlurBg} alt="blur" />
            </div>
        </div>
    )
};
export default signup;