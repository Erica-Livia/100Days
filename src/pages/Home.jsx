import React from "react";
import Navbar from "../components/Navbar.jsx";
import AddNew from "../components/AddNew.jsx";
import { FaFire } from "react-icons/fa6";
import Card from "../components/Card.jsx";

function Home() {
    return <>
        <div className="text-light">
            {/* Navigation Bar */}
            <Navbar/>

            {/* Main content */}
            <div className="flex justify-center pt-16 pb-8">
                <FaFire className="text-strongGold text-9xl"/>
            </div>
            <div className="flex justify-center">
                <h1 className="text-4xl font-bold text-strongGold">20</h1>
            </div>

            {/* Card */}
            <Card />

            {/* Add New Goal Button */}
            <div className="fixed bottom-8 right-8 z-50"><AddNew/></div>
        </div>
    </>
}

export default Home;