// import React, { useContext } from 'react'
// import logo from '../assets/logo.png'
// import { IoSearchCircleOutline } from 'react-icons/io5';
// import { FaCircleUser } from 'react-icons/fa6';
// import { MdOutlineShoppingCart } from 'react-icons/md';
// import { userDataContext } from '../context/UserContext';
// import { IoSearchCircleSharp } from 'react-icons/io5';
// import { useState , useNavigate} from 'react';
// import { authDataContext } from '../context/AuthContext';

// import {withCredentials} from "axios"

// const Nav = () => {
//   let {getCurrentUser, userData} = useContext(userDataContext)
//   let {serverUrl} = useContext(authDataContext)
//   let navigate = useNavigate();
//   let[showSearch, setShowSearch] = useState(false);
//   let {userData} = useContext(userDataContext);
//   let [showProfile, setShowProfile]  = useState(false);

//   const handleLogOut = async () => {
//     try{
//       const result = await axios.get(serverUrl + "/api/auth/logout", {withCredentials:true})
//       console.log(result.data)
//       getCurrentUser()
//     }catch(error){
//         console.log(error);
//     }
//   }

//   return (
//     <div className="w-[100vh] h-[70vh] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shawdow-md shadow-black">
//       <div className="w-[30%] flex items-center justify-start gap-[10px] ">
//         <img src={logo} alt="" className="w-[30px]" />
//         <h1 className="text-[25px] text-[black] font-sans"> NowShop </h1>
//       </div>
//       <div className='w-[40%]  hidden md:flex'>
//         <ul className="flex items-center justify-center gap-[19px] text-[white]">
//           <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
//             Home
//           </li>
//           <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
//             Collection
//           </li>
//           <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
//             About
//           </li>
//           <li className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl">
//             Contact
//           </li>
//         </ul>
//       </div>
//       <div className="w-[30px] flex items-center justify-end gap-[20px]">
//         {!showSearch && (
//           <IoSearchCircleOutline
//             className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
//             onClick={() => setShowSearch(prev => !prev)}
//           />
//         )}

//         {showSearch && (
//           <IoSearchCircleSharp
//             className="w-[38px] h-[38px] text-[#000000] cursor-pointer"
//             onClick={() => setShowSearch(prev => !prev)}
//           />
//         )}

//         {!userData && <FaCircleUser className="w-[38px] h-[38px] text-[#000000] cursor-pointer" onClick={()=>setShowSearch(prev=>! prev)}/>}
//         {userData && (
//           <div
//             className="w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full  flex items-center
//         justify-center cursor-pointer"
//             onClick={() => setShowProfile(prev => !prev)}
//           >
//             {userData?.name.slice(0, 1)}{' '}
//           </div>
//         )}
//         <MdOutlineShoppingCart className="w-[38px] h-[38px] text-[#000000] cursor-pointer hidden md:block" />
//         <p
//           className="absolute w-[18px] items-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px]
//         right-[23px] hidden "
//         >
//           {' '}
//           10
//         </p>
//       </div>
//       {showSearch && (
//         <div className="w-[100%] h-[80p] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center">
//           <input
//             type="text"
//             className="w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px]  placeholder:text-white
//       text-[white] text-[18px]"
//             placeholder="Search Here"
//           />
//         </div>
//       )}
//      { showProfile &&     <div
//         className="absolute w-[220px] h-[150px] bg-[#0000000d7] top-[110%] right-[4%] border-[1px]
//          border-[#aaa9a9] rounded-[10px] z-10"
//       > }

//         <ul className="w-[100%] h-[100%]  flex items-start justify-around flex-col text-[17px] y-[10px] stat-[white]">
//         { !userData &&  <li className=" w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
//          onClick={()=>{navigate("/login"); setShowProfile(false) }}>
//              Login
//           </li> }
//          { userData && <li className=" w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer" onClick={ ()=> {handleLogOut();}}>
//              LogOut
//           </li> }
//           <li className=" w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
//              Orders
//           </li>
//           <li className=" w-[100%] hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">
//             About
//           </li>
//         </ul>
//       </div>
//       <div >

//       </div>
//     </div>
//   );
// }

// export default Nav;

import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import { IoSearchCircleOutline, IoSearchCircleSharp } from 'react-icons/io5';
import { FaCircleUser } from 'react-icons/fa6';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { userDataContext } from '../context/UserContext';
import { authDataContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdHome } from 'react-icons/io';
import { HiOutlineCollection } from 'react-icons/hi';
import { MdContacts } from 'react-icons/md';

const Nav = () => {
  const { getCurrentUser, userData } = useContext(userDataContext);
  const { serverUrl } = useContext(authDataContext);
  const navigate = useNavigate();

  const [showSearch, setShowSearch] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleLogOut = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/auth/logout`, { withCredentials: true });
      console.log(result.data);
      getCurrentUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-[100vh] h-[70vh] bg-[#ecfafaec] fixed top-0 flex items-center justify-between px-[30px] shadow-md z-10">
      {/* Logo */}
      <div className="w-[30%] flex items-center gap-[10px]">
        <img src={logo} alt="Logo" className="w-[30px]" />
        <h1 className="text-[25px] text-black font-sans"> NowShop </h1>
      </div>

      {/* Nav Links */}
      <div className="w-[40%] hidden md:flex">
        <ul className="flex gap-[19px] text-white">
          {['Home', 'Collection', 'About', 'Contact'].map(item => (
            <li
              key={item}
              className="text-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-[20px]">
        {showSearch ? (
          <IoSearchCircleSharp
            className="w-[38px] h-[38px] text-black cursor-pointer"
            onClick={() => setShowSearch(false)}
          />
        ) : (
          <IoSearchCircleOutline
            className="w-[38px] h-[38px] text-black cursor-pointer"
            onClick={() => setShowSearch(true)}
          />
        )}

        {!userData && (
          <FaCircleUser
            className="w-[38px] h-[38px] text-black cursor-pointer"
            onClick={() => navigate('/login')}
          />
        )}

        {userData && (
          <div
            className="w-[30px] h-[30px] bg-black text-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={() => setShowProfile(prev => !prev)}
          >
            {userData.name?.slice(0, 1)}
          </div>
        )}

        <MdOutlineShoppingCart className="w-[38px] h-[38px] text-black cursor-pointer hidden md:block" />
      </div>

      {/* Search Input */}
      {showSearch && (
        <div className="w-full bg-[#d8f6f9dd] absolute top-full flex justify-center py-2">
          <input
            type="text"
            className="w-[50%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-white text-[18px]"
            placeholder="Search Here"
          />
        </div>
      )}

      {/* Profile Menu */}
      {showProfile && (
        <div className="absolute w-[220px] h-[150px] bg-[#0000000d7] top-[110%] right-[4%] border border-[#aaa9a9] rounded-[10px] z-10">
          <ul className="w-full h-full flex flex-col text-[17px] text-white">
            {!userData && (
              <li
                className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={() => {
                  navigate('/login');
                  setShowProfile(false);
                }}
              >
                Login
              </li>
            )}
            {userData && (
              <li
                className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer"
                onClick={handleLogOut}
              >
                LogOut
              </li>
            )}
            <li className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">Orders</li>
            <li className="hover:bg-[#2f2f2f] px-[15px] py-[10px] cursor-pointer">About</li>
          </ul>
        </div>
      )}
      <div className="w-[100vw] h-[90px] flex items-center justify-between px-[20px] fixed bottom-0 left-0 bg-[#191818] md:hidden">
        <button className="text-[white]  flex items-center justify-center flex-col gap-[2px]">
          <IoMdHome className="w-[30px] h-[30px] text-[white] md:hidden" /> Home
        </button>
        <button className="text-[white]  flex items-center justify-center flex-col gap-[2px]">
          <HiOutlineCollection className="w-[30px] h-[30px] text-[white] md:hidden" /> Collection
        </button>
        <button className="text-[white]  flex items-center justify-center flex-col gap-[2px]">
          <MdContacts className="w-[30px] h-[30px] text-[white] md:hidden" /> Contact
        </button>
        <button className="text-[white]  flex items-center justify-center flex-col gap-[2px]">
          <IoMdHome className="w-[30px] h-[30px] text-[white] md:hidden" /> Cart
        </button>
      </div>
    </div>
  );
};

export default Nav;
