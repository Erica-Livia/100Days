import React from "react";
import { FaFire } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    return <>
        <div className="bg-darker flex text-light justify-between px-4 py-6">
            {/* Burger Menu */}
            <div className="text-xl"><GiHamburgerMenu /></div>

            {/* Logo in the Center */}
            <div className="text-2xl font-bold">100 Days</div>

            {/* Streak Number */}
            <div className="flex items-center space-x-1">
                {/*<h3 className="text-strongGold font-bold text-lg">20</h3>  <FaFire className="text-strongGold"/>*/}
                <h3 className="text-gray-400 font-bold text-lg">20</h3>  <FaFire className="text-gray-400"/>
            </div>
        </div>
    </>
}

export default Navbar;