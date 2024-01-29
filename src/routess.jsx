import Signup from "./components/signUp/signUp";
import Login from "./components/login/login";
import Drawer from "./components/sidebarDrawer/sideBarDrawer";
import Wallet from "./components/wallet/wallet";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
export default () => {
    return (
        <>
            {/* <Signup /> */}
            <Drawer />
           
            {/* <Login /> */}
        </>
    )

};