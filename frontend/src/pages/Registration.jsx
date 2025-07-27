import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import google from '../assets/google.png';
import { IoEyeOutline, IoEye } from 'react-icons/io5';
import { authDataContext } from '../context/AuthContext';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../utils/Firebase';
import Logo from '../assets/logo.png';
import axios from 'axios';

const Registration = () => {
  let navigate = useNavigate();
  let [show, setShow] = useState(false);
  let { serverUrl } = useContext(authDataContext);
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let { getCurrentUser } = useContext(authDataContext);

  const handleSignup = async e => {
    e.preventDefault();
    if (!name || !email || !password) {
      alert('All fields are required!');
      return;
    }
    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/registration`,
        { name, email, password },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Error in registration. Please try again.');
    }
  };

  const googleSignup = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      let user = response.user;
      let name = user.displayName;
      let email = user.email;
      const result = await axios.post(
        `${serverUrl}/api/auth/googleLogin`,
        { name, email },
        { withCredentials: true }
      );
      console.log(result.data);
      getCurrentUser();
      navigate('/');
    } catch (error) {
      console.log(error);
      alert('Error in Google signup. Please try again.');
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col items-center justify-start">
      <div
        className="w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img className="w-[40px]" src={Logo} alt="" />
        <h1 className="text-[22px] font-sans">NowShop</h1>
      </div>
      <div className="w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]">
        <span className="text-[25px] font-semibold"> Registration Page </span>
        <span className="text-[16px]"> Welcome to NowShop</span>
      </div>
      <div className="max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center relative">
        <form
          onSubmit={handleSignup}
          className="w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]"
        >
          <div
            className="w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer"
            onClick={googleSignup}
          >
            <img src={google} alt="Google" className="w-[20px]" /> Register with Google
          </div>
          <div className="w-[100%] h-[20px] flex items-center justify-center gap-[10px]">
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
            OR
            <div className="w-[40%] h-[1px] bg-[#96969635]"></div>
          </div>

          <div className="w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]">
            <input
              type="text"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="UserName"
              required
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <input
              type="email"
              className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
              placeholder="Email"
              required
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <div className="relative w-[100%]">
              <input
                type={show ? 'text' : 'password'}
                className="w-[100%] h-[50px] border-[2px] border-[#96969635] backdrop:blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-[20px] font-semibold"
                placeholder="Password"
                required
                onChange={e => setPassword(e.target.value)}
                value={password}
              />
              <div
                className="absolute right-[5%] top-[30%] cursor-pointer"
                onClick={() => setShow(prev => !prev)}
              >
                {show ? (
                  <IoEye className="w-[20px] h-[20px]" />
                ) : (
                  <IoEyeOutline className="w-[20px] h-[20px]" />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold"
            >
              Create Account
            </button>
            <p className="flex gap-[10px]">
              You have an Account?{' '}
              <span
                className="text-[#5555f6cf] text-[17px] font-semibold cursor-pointer"
                onClick={() => navigate('/login')}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
