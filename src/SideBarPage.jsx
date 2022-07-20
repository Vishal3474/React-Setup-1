import React from "react";
import { Link } from "react-router-dom";
import { IoMdWallet } from "react-icons/io";
import { MdManageAccounts } from "react-icons/md";
import { BiUser } from "react-icons/bi";

function SideBarPage() {
  return (
    <div className=" bg-indigo-500 flex   ">
      <div className="flex  ml-4  ">
        <h1 className="text-white font-extrabold text-4xl text-center items-center pt-6 mb-2">
          InternShip
        </h1>
        <div className=" ml-8 flex text-center space-x-8">
          <Link
            to="/Courses"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            Courses
          </Link>

          <Link
            to="/About"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            About
          </Link>

          <Link
            to="/Contact"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            Contact Us
          </Link>
        </div>

        <div className="ml-96 flex text-center space-x-8">
          <Link
            to="/Login"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1 "
          >
            {" "}
            <BiUser />
            <span className="mr-2"></span>
            Login
          </Link>
          <Link
            to="/Signup"
            className="text-white font-medium text-lg flex items-center hover:bg-blue-700 hover:rounded-md hover:py-1"
          >
            {" "}
            <MdManageAccounts />
            <span className="mr-2"></span>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBarPage;
