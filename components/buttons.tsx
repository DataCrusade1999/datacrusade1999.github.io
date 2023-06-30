import React from 'react';
import Link from 'next/link';
export const LetsTalkButton = () => {

    return (

        <div>
            <button className="bg-white rounded-full w-28 h-10 p-2">
                <Link href="/" as="/search" className="text-black font-extrabold">
                    LET&#39;S TALK
                </Link>
            </button>
        </div>

    )
}


export const GetInTouchButton = () => {

    return (

        <div>
            <button className="bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400 rounded-full w-44 h-12 p-2">
                <Link href="/" as="/search" className="text-white font-semibold">
                    GET IN TOUCH
                </Link>
            </button>
        </div>

    )
}


export const NewsletterButton = () => {

    return (

        <div>
            <button className="bg-black rounded-full w-52 h-12 p-2">
                <Link href="/" as="/search" className="text-white font-semibold">
                    Sign up for my newsletter
                </Link>
            </button>
        </div>

    )
}


