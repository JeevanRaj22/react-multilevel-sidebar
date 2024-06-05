import React from "react";
import { Link } from "react-router-dom";

function Submenu(props) {
  return (
    <>
      <div
        className={`${
          props.openSubmenu === props.keyNum
            ? "w-full sm:w-60 pt-3  sm:absolute sm:-top-2 sm:-right-60  sm:block duration-300  sm:bg-gray-100 sm:border-r sm:border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800"
            : "hidden"
        } `}
      >
        <ul>
          {props.menu.map((menu, index) =>
            !menu.children ? (
              <Link to={menu.path} key={index} onClick={() => props.setMobileMenu(false)}>
                <li
                  className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                    props.location.pathname === menu.path &&
                    "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span>{menu.icon}</span>
                  <span
                    className={`${
                      !props.open && "hidden"
                    } origin-left duration-300 hover:block`}
                  >
                    {menu.label}
                  </span>
                </li>
              </Link>
            ) : (
              <>
                <li
                  className={
                    "items-center text-black font-normal rounded-lg cursor-default mt-2 "
                  }
                >
                  <div className="border-b-2 border-solid border-black">
                    <span>{menu.icon}</span>
                    <span
                      className={`${
                        !props.open && "hidden"
                      } ml-2 origin-left duration-300 `}
                    >
                      {menu.label}
                    </span>
                  </div>
                  <span>
                    <ul>
                      {menu.children.map((menu, index) => (
                        <Link to={menu.path} key={index} onClick={() => props.setMobileMenu(false)}>
                          <li
                            className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                              props.location.pathname === menu.path &&
                              "bg-gray-200 dark:bg-gray-700"
                            }`}
                          >
                            <span>{menu.icon}</span>
                            <span
                              className={`${
                                !props.open && "hidden"
                              } origin-left duration-300 hover:block`}
                            >
                              {menu.label}
                            </span>
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </span>
                </li>
              </>
            )
          )}
        </ul>
      </div>
      {/* Mobile menu */}
      {/* <div className="">
        <div
          className={`${
            props.openSubmenu === props.keyNum
              ? "w-60 pt-6 absolute -top-2 -right-60 hidden sm:block duration-300 bg-gray-100 border-r border-gray-200 dark:border-gray-600 p-5 dark:bg-slate-800"
              : "hidden"
          } `}
        >
          <>hii</>
          <ul>
            {props.menu.map((menu, index) =>
              !menu.children ? (
                <Link to={menu.path} key={index}>
                  <li
                    className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                      props.location.pathname === menu.path &&
                      "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <span>{menu.icon}</span>
                    <span
                      className={`${
                        !props.open && "hidden"
                      } origin-left duration-300 hover:block`}
                    >
                      {menu.label}
                    </span>
                  </li>
                </Link>
              ) : (
                <>
                  <li
                    className={
                      "items-center text-black font-normal rounded-lg cursor-default mt-2 "
                    }
                  >
                    <div className="border-b-2 border-solid border-black">
                      <span>{menu.icon}</span>
                      <span
                        className={`${
                          !props.open && "hidden"
                        } ml-2 origin-left duration-300 `}
                      >
                        {menu.label}
                      </span>
                    </div>
                    <span>
                      <ul>
                        {menu.children.map((menu, index) => (
                          <Link to={menu.path} key={index}>
                            <li
                              className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700
                        ${menu.gap ? "mt-9" : "mt-2"} ${
                                props.location.pathname === menu.path &&
                                "bg-gray-200 dark:bg-gray-700"
                              }`}
                            >
                              <span>{menu.icon}</span>
                              <span
                                className={`${
                                  !props.open && "hidden"
                                } origin-left duration-300 hover:block`}
                              >
                                {menu.label}
                              </span>
                            </li>
                          </Link>
                        ))}
                      </ul>
                    </span>
                  </li>
                </>
              )
            )}
          </ul>
        </div>
      </div> */}
    </>
  );
}

export default Submenu;
