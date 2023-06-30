import React from "react";
import Link from "next/link";
import { LetsTalkButton } from "./buttons";
export default function Navbar() {
    return (
        <>
            <div className="m-5 sticky flex flex-row">
                <div className="w-1/3">
                    <Link href="/" as="/home" className="text-4xl font-extrabold">
                        Ashutosh
                    </Link>
                </div>
                <div className="text-xl space-x-4 w-2/3 justify-center">
                    <Link href="/" as="/about-me" className="">
                        about-me
                    </Link>
                    <Link href="/" as="/blogs" className="">
                        blogs
                    </Link>
                    <Link href="/" as="/my-newsletters" className="">
                        newsletter
                    </Link>
                    <Link href="/" className="">
                        categories
                    </Link>
                    <Link href="/" as="/uses" className="">
                        uses
                    </Link>
                </div>
                <LetsTalkButton />
            </div>
        </>
    );
}
