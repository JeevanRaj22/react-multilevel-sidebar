import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { BsArrowLeftCircle } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { SiFuturelearn } from "react-icons/si";
import { SiOpenaccess } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { IoArrowForward } from "react-icons/io5";
import Submenu from "./Submenu.js";
import Logo from "../assets/images/logo.svg";
import HamburgerButton from "./HamburgerMenuButton/HamburgerButton";

const Sidebar = (MenuObj) => {
  const [openSubmenu, setSubMenu] = useState(-1);
  const [open, setOpen] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const Menus = [
    { title: "Dashboard", path: "/dashboard", src: <AiFillPieChart /> },
    { title: "Course", path: "/course", src: <SiFuturelearn /> },
    { title: "Profile", path: "/profile", src: <CgProfile /> },
    { title: "Signin", path: "/login", src: <SiOpenaccess />, gap: "true" },
  ];

  const getLabelForCurrentPath = (menu) => {
    for (const smenu of menu.children) {
      if (smenu.children) {
        for (const i of smenu.children) {
          if (i.path === location.pathname) {
            return i.label;
          }
        }
      } else {
        if (smenu.path === location.pathname) {
          return smenu.label;
        }
      }
    }
    return null;
  };
  return (
    <>
      <div
        className={`${
          open ? "w-60" : "w-fit"
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && "rotate-180"
          } absolute text-3xl bg-white fill-slate-800  rounded-full cursor-pointer top-2 -right-4 dark:fill-gray-400 dark:bg-gray-800`}
          onClick={() => setOpen(!open)}
        />
        <Link to="/">
          <div className={`flex ${open && "gap-x-4"} items-center relative`}>
            <img src={Logo} alt="" className="pl-2" />
            {open && (
              <span className="text-xl font-medium whitespace-nowrap dark:text-white">
                Side bar
              </span>
            )}
          </div>
        </Link>

        <ul className="relative pt-6">
          {MenuObj.Menu.map((menu, index) =>
            !menu.children ? (
              <Link to={menu.path} key={index}>
                <li
                  className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span>{menu.icon}</span>
                  <span
                    className={`${
                      !open && "hidden"
                    } origin-left duration-300 hover:block`}
                  >
                    {menu.label}
                  </span>
                </li>
              </Link>
            ) : (
              <>
                <li
                  key={index}
                  className={`${
                    menu.children.length < 2 ? "relative" : ""
                  } p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                    ${menu.gap ? "mt-9" : "mt-2"} ${
                    location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  }`}
                  onMouseEnter={() => {
                    setSubMenu(index);
                  }}
                  onMouseLeave={() => {
                    setSubMenu(-1);
                  }}
                >
                  <div className="flex items-center gap-x-6">
                    <span>{menu.icon}</span>
                    <span
                      className={`${
                        !open && "hidden"
                      }  origin-left duration-300 hover:block`}
                    >
                      {menu.label}

                      <span>
                        <Submenu
                          menu={menu.children}
                          location={location}
                          open={open}
                          openSubmenu={openSubmenu}
                          keyNum={index}
                        />
                      </span>
                    </span>
                    <IoArrowForward
                      className={`${!open && "hidden"} ml-auto`}
                    />
                  </div>
                  {getLabelForCurrentPath(menu) && (
                    <span className="block mt-4 p-3 text-center rounded-lg bg-gray-200 dark:bg-gray-700">
                      {getLabelForCurrentPath(menu)}
                    </span>
                  )}
                </li>
              </>
            )
          )}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      {/* <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  "bg-gray-200 dark:bg-gray-700"
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div> */}
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? "flex" : "hidden"
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-slate-800 drop-shadow md rounded-xl`}
        >
          <Link className="w-full" to="/" onClick={() => setMobileMenu(false)}>
            <div className={`flex justify-center items-center relative`}>
              <img src={Logo} alt="" className="pl-2 mr-1" />
              {open && (
                <span className="text-xl font-medium whitespace-nowrap dark:text-white">
                  Side bar
                </span>
              )}
            </div>
          </Link>

          <ul className="relative w-full px-1">
            {MenuObj.Menu.map((menu, index) =>
              !menu.children ? (
                <Link to={menu.path} key={index} onClick={() => setMobileMenu(false)}>
                  <li
                    className={`flex items-center gap-x-6 p-2 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                      location.pathname === menu.path &&
                      "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <span>{menu.icon}</span>
                    <span
                      className={`${
                        !open && "hidden"
                      } origin-left duration-300 hover:block`}
                    >
                      {menu.label}
                    </span>
                  </li>
                </Link>
              ) : (
                <>
                  <li
                    key={index}
                    className={`${
                      menu.children.length < 2 ? "relative" : ""
                    } p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                    ${menu.gap ? "mt-9" : "mt-2"} ${
                      location.pathname === menu.path &&
                      "bg-gray-200 dark:bg-gray-700"
                    }`}
                    onClick={() => {
                      (openSubmenu===index)?setSubMenu(-1):setSubMenu(index);
                    }}
                   
                  >
                    <div className="flex items-center gap-x-6">
                      <span>{menu.icon}</span>
                      <span
                        className={`${
                          !open && "hidden"
                        }  origin-left duration-300 hover:block`}
                      >
                        {menu.label}

                        
                      </span>
                      <IoArrowForward
                        className={`ml-auto ${openSubmenu===index?"rotate-90":""}`}
                      />
                    </div>
                    <span>
                          <Submenu
                            menu={menu.children}
                            location={location}
                            open={open}
                            openSubmenu={openSubmenu}
                            keyNum={index}
                            mobileMenu = {mobileMenu}
                            setMobileMenu={setMobileMenu}
                          />
                        </span>
                    {getLabelForCurrentPath(menu) && (
                      <span className="block mt-4 p-3 text-center rounded-lg bg-gray-200 dark:bg-gray-700">
                        {getLabelForCurrentPath(menu)}
                      </span>
                    )}
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
