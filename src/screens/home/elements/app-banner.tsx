import React from 'react';

function AppBanner() {
    return (
        <div
            className="w-full h-[500px] bg-cover bg-center relative flex items-center justify-end"
            style={{
                backgroundImage: "url('/images/bg-img.png')",
            }}
        >
            <div className="relative z-10 w-full max-w-md bg-orange-100 p-6 shadow-lg mr-20">
                <h4 className="text-xs text-gray-800 font-medium">New Arrival</h4>
                <h1 className="text-4xl font-bold text-[#b88e2f] mt-2">
                    Discover Our <br />
                    New Collection
                </h1>
                <p className="text-xm text-gray-800 mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </p>
                <button className="mt-10 px-10 py-3 bg-[#b88e2f] text-white font-semibold">
                    BUY NOW
                </button>
            </div>
        </div>
    );
}

export default AppBanner;
