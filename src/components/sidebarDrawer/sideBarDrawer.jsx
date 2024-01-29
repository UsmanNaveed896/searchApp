import React, { useEffect, useState } from 'react';
import Img from '../../assets/Ellipse3.png'
import Img1 from '../../assets/Group 48095771.png'
import Img2 from '../../assets/Vector (1).png'
import Img3 from '../../assets/Group 48095777.png'
import Img4 from '../../assets/Calendar.png'
import Img5 from '../../assets/Group 48095772.png'
import Img6 from '../../assets/Group 48095779 (2).png'
import Img7 from '../../assets/Settings.png'
import Img8 from '../../assets/Union.png';
import Img9 from '../../assets/Group 1000000829.png';
import Header from '../header/header';
import './style.css'
import Profile from '../profile/profile';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Wallet from '../wallet/wallet';
import AddPosting from '../addPosting/addPosting';
import SplashScreen from '../splashScreen/splashScreen';
import Chats from '../chatss/chats'
import Notifications from '../notifications/notifications';
import Stories from '../storiess/stories';
import FeatureAdds from '../FeatureAdds/featureAdds';
import Preview from '../preview/preview';
import CreateVirtualOffice from '../createVirtualOffice/createVirtualOffice';
import ViewVirtualOfiice from '../viewVirtualOffice/viewVirtualOfiice';
const Drawer = () => {
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [loading, setLoading] = useState(true);
const [showDropdown,setShowDropdown]=useState(false);
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handlePageSwitch = () => {
    console.log('Switching pages...');
  };

  return (
    <>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className={`flex h-screen ${drawerOpen ? 'overflow-y-scroll' : ''}`}>
          {/* Drawer */}
          <div
            className={`fixed top-0 left-0 h-full shadow-xl overflow-y-scroll  text-white w-64 transition-transform transform ${drawerOpen ? 'translate-x-0' : '-translate-x-full'
              }`}
          >
            <div className=" px-6 pb-3 pt-5 ">
              <div className='flex justify-center items-center gap-2'>
                <img src={Img} alt='profile' />
                <div className=''>
                  <h1 className='text-[14px] text-[#757575]'>LRome ipusm</h1>
                  <h1 className='text-[14px] font-bold text-black'>Melissa peters</h1>
                </div>
              </div>
              <h1 className="text-[14px] mb-4 text-[#757575]  mt-4">Main</h1>
              <ul>
                <Link to="/">
                  <li className="cursor-pointer text-black font-bold mb-4" onClick={handlePageSwitch}>
                    <i class="fa fa-user mr-3 text-black text-[16px]" aria-hidden="true"></i> Profile
                  </li>
                </Link>
                <Link to="/wallet">
                  <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                    <div className='flex justify-start items-center gap-4'>
                      <img src={Img1} alt='profile' />
                      <h1 className='text-[#757575] text-[16px]'>Wallet</h1>
                    </div>
                  </li>
                </Link>
                <Link to="/adposting">
                  <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                    <div className='flex justify-start items-center gap-4'>
                      <img src={Img2} alt='profile' />
                      <h1 className='text-[#757575] text-[16px]'>Add Posting</h1>
                    </div>
                  </li>
                </Link>
                <Link to="/chats">
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img3} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Messages</h1>
                  </div>
                </li>
                </Link>
               
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img4} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Schedules</h1>
                  </div>
                </li>
             
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img5} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Subscriptions</h1>
                  </div>
                </li>
                <Link to="/notifications">
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img6} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Notification</h1>
                  </div>
                </li>
                </Link>
                <Link to="/stories">
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img6} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Stories</h1>
                  </div>
                </li>
                </Link>
                <Link to="/preview">
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img6} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Preview</h1>
                  </div>
                </li>
                </Link>
                <Link to="/featureAd">
                <li className="cursor-pointer text-[#757575] mb-2" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img6} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Feature Add</h1>
                  </div>
                </li>
                </Link>
                <Link to="/featureAd">
                <li className="cursor-pointer text-[#757575] mb-2" 
                onClick={()=>setShowDropdown(!showDropdown)}>
                <div className='flex justify-between items-center'>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img9} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Virtual Office</h1>
                    </div>
                    {showDropdown ? 
                    <i className='fa fa-angle-up' />
                    : <i className='fa fa-angle-down' />
                  }
                    
                    </div>                
                </li>
                </Link>
                {showDropdown &&
                <>
                <Link to="/viewvirtualoffice">
                <li className="cursor-pointer text-[#757575] mb-2" onClick={handlePageSwitch}>
                  <div className='flex justify-center items-center gap-4'>
                    <h1 className='text-[#757575] text-[16px]'>View Virtual Office</h1>
                    </div>                     
                </li>
                </Link>
                <Link to="/createvirtualoffice">
                <li className="cursor-pointer text-[#757575] mb-2" onClick={handlePageSwitch}>
                  <div className='flex justify-center items-center gap-4'>
                    <h1 className='text-[#757575] text-[16px] ml-3'>Create Virtual Office</h1>
                    </div>                     
                </li>
                </Link>
                </>
}
                {/* Add more items */}
              </ul>
            </div>
            <div className='px-6'>
              <h1 className="text-[14px] mb-2 text-[#757575]">Settings</h1>
              <ul>
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img7} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Settings</h1>
                  </div>
                </li>
                <li className="cursor-pointer text-[#757575] " onClick={handlePageSwitch}>
                  <label class="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" />
                    <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    <span class="text-[#757575] text-[16px] ml-3">Dark</span>
                  </label>
                </li>
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img7} alt='profile' />
                    <h1 className='text-[#757575] text-[16px]'>Help</h1>
                  </div>
                </li>
                <li className="cursor-pointer text-[#757575] mb-4" onClick={handlePageSwitch}>
                  <div className='flex justify-start items-center gap-4'>
                    <img src={Img8} alt='profile' />
                    <h1 className='text-[#D55F5A] text-[16px]'>Logout Account</h1>
                  </div>
                </li>
              </ul>

            </div>
          </div>

          {/* Main Content */}

          <div className={`flex-1 ${drawerOpen ? 'ml-64' : ''} transition-all duration-300`}>
            <button
              className="fixed top-4 p-2 bg-white text-black shadow-xl font-bold rounded-full focus:outline-none"
              style={{ left: drawerOpen ? '15rem' : '2rem' }}
              onClick={handleDrawerToggle}
            >
              {drawerOpen ? '<' : '>'}
            </button>

            {/* page content */}


            <div className="p-1">
              <Header />
              <Routes>
                <Route exact path='/' element={<Profile />} />
                <Route exact path='/wallet' element={<Wallet />} />
                <Route exact path='/adposting' element={<AddPosting />} />
                <Route exact path='/chats' element={<Chats />} />
                <Route exact path='/notifications' element={<Notifications />} />
                <Route exact path='/stories' element={<Stories />} />
                <Route exact path='/featureAd' element={<FeatureAdds />} />
                <Route exact path='/preview' element={<Preview />} />
                <Route exact path='/createvirtualoffice' element={<CreateVirtualOffice/>} />
                <Route exact path='/viewvirtualoffice' element={<ViewVirtualOfiice/>} />
              </Routes>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;