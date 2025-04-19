import React from "react";
import pngwing from "../../assets/pngwing 1.png";

const Banner = () => {
    return (
        <div className="hero mt-10 mb-10 bg-gray-100 rounded-2xl p-20">
            <div className="flex justify-around items-center">
                <div className="space-y-12">
                    <h1 className="text-6xl font-bold">Books to freshen up your bookshelf</h1>
                    <button className="btn bg-[#23BE0A] text-xl font-semibold text-white">View The List</button>
                </div>
                <div className="flex-1/2 justify-items-center">
                  <img src={pngwing} />
                </div>
            </div>
        </div>
    )
};

export default Banner;
