import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faGlobe,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

import SignModal from "../signin/SignModal";
import Nbutton from "../Nbutton";
import { MenuItemProps } from "../../core/interfaces/pages";
import { menuItems } from "../../core/data/menu";
import { signInClass } from "../../core/style/homepage";
import defaultAvatar from "../../assets/images/user/default-sm.png";
import useAuth from "../../hooks/useAuth";

const Header = () => {  

  const [userLogined, setUserLogined] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const { user } = useAuth();
  const { signOutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      setModalShow(false)
    }
  }, [user])
  
  const showModal = () => {
    setModalShow(true);
  };
  const openSidebar = () => {
    // dispatch(toggleSidebar())
  };
  const setMenuToggle = () => {
    if (menuShow) setMenuShow(false);
    else setMenuShow(true);
  };

  const handleSignOut = () => {
    signOutUser();
    navigate('/');
  }


  const menuItemClass: string =
    "font-Rajdhani  lg:my-20 primary:mx-17 lg:mx-12 sm:mx-8  cursor-pointer text-davygrey text-16 border border-white hover:border-davygrey flex";

  return (
    <div className="w-full" style={{opacity:"0.5"}}>
      <div className="fixed top-0 msm:ml-16p md:ml-66p md:w-[calc(100%-132px)] msm:w-[calc(100%-32px)] bg-white  rounded-b-20 flex h-45 justify-between bg-desertStorm bg-opacity-60 rounded-b-20 shadow-menu">
        <button
          className="block medium:hidden ml-20p"
          onClick={() => setMenuToggle()}
        >
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </button>
        <div className="ml-40 lg:ml-80 flex items-center hidden medium:flex">
          {menuItems.map((item: MenuItemProps, index: any) => {
            return (
              // item.content === 'HOME' ? item.url : '/stay'
              <Link to={item.url} key={index} className={menuItemClass}>
                {<img src={item.icon} className="mx-3p" />} {item.content}
              </Link>
            );
          })}
        </div>
        <div className="md:mr-40 lg:mr-80 flex items-center font-Rajdhani text-16">
          {!user?.email && (
            <button className={signInClass} onClick={() => showModal()}>
              SIGN IN
            </button>
          )}
          {user?.email && (
            <div className="flex items-center mr-10p">
              <p>Welcome, {user?.name}</p>
              <img
                src={user?.photoURL ? user?.photoURL:defaultAvatar}
                alt=''
                className="w-26p h-26p rounded-full mx-10p border-1 border-texasRose"
              />
            </div>
          )}
          {
            user.email &&
            <div>
              <button className={signInClass} onClick={() => handleSignOut()}>
                Logout
              </button>
            </div>
          }
          <Link to="shopcart">
            <FontAwesomeIcon
              icon={faShoppingBag}
              className="text-davygrey hover:text-primary mr-27"
            />
          </Link>
          
        </div>
      </div>
      {menuShow == true && (
        <div className="bg-desertStorm w-full pt-40 block medium:hidden">
          <div className="ml-40p flex justify-between">
            <div className="">
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setMenuShow(false)}
                className="cursor-pointer"
              ></FontAwesomeIcon>
              <label className="ml-10p text-texasRose font-semibold text-18">
                GRANDORA
              </label>
            </div>
            <div>
             
            </div>
          </div>
          <div className="border-b-2 border-dashed mx-40p border-davygrey">
            {menuItems.map((item: MenuItemProps, index: any) => {
              return (
                <Link
                  to={item.url}
                  key={index}
                  className="cursor-pointer text-davygrey text-12 p-10p flex hover:text-texasRose"
                >
                  {<img src={item.icon} className="mx-3p" />} {item.content}
                </Link>
              );
            })}
          </div>
          <div className="p-20p flex justify-center">
            <Nbutton class="bg-texasRose text-default hover:bg-white hover:text-texasRose border-texasRose w-160 mr-22p">
              sign in
            </Nbutton>
            <Nbutton
              bgcolor="friarGrey"
              class="mr-10 hover:bg-default hover:text-friarGrey bg-friarGrey text-default border-friarGrey w-160"
            >
              log in
            </Nbutton>
          </div>
        </div>
      )}
      <SignModal show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Header;
