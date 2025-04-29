import React from "react";
import Navbar from "../components/Navbar.jsx";
import { FaFire } from "react-icons/fa6";

function Home() {
    return <>
        <div className="text-light">
            <Navbar />

            {/* Main content */}
            <div className="flex justify-center pt-16 pb-8">
                <FaFire className="text-strongGold text-9xl"/>
            </div>
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold">20</h1>
            </div>

        </div>
    </>
}

export default Home;