import React from 'react';

const Card = () => {
    return <>
        {/* Card 1 */}
        <div className="bg-card mx-6 my-6 py-5 px-3 rounded-xl flex justify-between items-center">
            <div>
                {/* Title  */}
                <div className="text-xl">Coding Challenge</div>
                {/* Description */}
                <div className="text-gray-400">100 Days of C Coding</div>
            </div>
            <div className="font-bold text-darkGold">
                <h2>20/100</h2>
            </div>

        </div>

        {/* Card 2 */}
        <div className="bg-card mx-6 my-6 py-5 px-3 rounded-xl flex justify-between items-center">
            <div>
                {/* Title  */}
                <div className="text-xl">Spanish</div>
                {/* Description */}
                <div className="text-gray-400">Duolingo </div>
            </div>
            <div className="font-bold text-gray-400">
                <h2>98/100</h2>
            </div>

        </div>

        {/* Card  */}
        <div className="bg-card mx-6 my-6 py-5 px-3 rounded-xl flex justify-between items-center">
            <div>
                {/* Title  */}
                <div className="text-xl">Spanish</div>
                {/* Description */}
                <div className="text-gray-400">Duolingo </div>
            </div>
            <div className="font-bold text-gray-400">
                <h2>98/100</h2>
            </div>

        </div>
    </>
}

export default Card;