import React from "react";
import { Link } from "react-router-dom";
export default function Layout(props) {
  return (
    <div className="max-h-screen flex flex-col">
      <header className="py-4 shadow-lg h-20">
        <div className="flex items-center justify-between container mx-auto">
          <h1 className="text-3xl font-extrabold">Spyglass</h1>
          <ul className="flex items-center ">
            <li>
              <Link to={"/"}>
                <div className="text-gray-700 nav-link-wrapper text-base duration-200 px-3 py-2 rounded-md  font-medium">
                  <span className="nav-link-child px-1">Home</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to="/goals">
                <div className="text-gray-700 nav-link-wrapper text-base duration-200 px-3 py-2 rounded-md  font-medium">
                  <span className="nav-link-child px-1">Goals</span>
                </div>
              </Link>
            </li>
            {/* <li>
              <Link to={"/profile"}>
                <div className="text-gray-700 nav-link-wrapper text-base duration-200 px-3 py-2 rounded-md  font-medium">
                  <span className="nav-link-child px-1">Profiles</span>
                </div>
              </Link>
            </li> */}

            <li>
              <Link to={"/about-us"}>
                <div className="text-gray-700 nav-link-wrapper text-base duration-200 px-3 py-2 rounded-md  font-medium">
                  <span className="nav-link-child px-1">Contact us</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/faqs"}>
                <div className="text-gray-700 nav-link-wrapper text-base duration-200 px-3 py-2 rounded-md  font-medium">
                  <span className="nav-link-child px-1">FAQs</span>
                </div>
              </Link>
            </li>
            <li>
              <Link to={"/login"}>
                <div
                  onClick
                  className="text-gray-700 nav-link-wrapper text-base duration-200 px-3 py-2 rounded-md  font-medium"
                >
                  <span className="nav-link-child px-1">Login</span>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{props.children}</main>
    </div>
  );
}
