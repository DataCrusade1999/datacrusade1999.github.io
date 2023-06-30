import React from "react";

//  height={75} width={1310}
export default function Ribbon() {

    return (
        <div className='flex font-extrabold justify-center pt-[100px] pb-[100px] -space-x-[1535px]'>
            <div className="flex flex-row">
                <div className="bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400 h-[75px] w-[1310px]">
                </div>
                <div className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 h-[75px] w-[225px]">
                </div>
            </div>
            <div className="flex flex-row -rotate-[3deg]">
                <div className="flex space-x-5 text-xl justify-evenly pt-[20px]  bg-white h-[75px] w-[1310px] text-black">
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                    <span>DevOps</span>
                </div>
                <div className="flex space-x-5 text-xl justify-evenly pt-[20px]  bg-white h-[75px] w-[225px] text-black">
                    <span>DevOps</span>
                    <span>DevOps</span>
                </div>
            </div>
        </div>


    )
}
