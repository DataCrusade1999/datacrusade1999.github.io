import React from "react";
import Link from "next/link";
import { LetsTalkButton } from "./buttons";

export default function Navbar() {
    return (
        <>
            <div className="m-5 sticky flex flex-row">
                <div className="w-1/3">
                    <Link href="/" className="text-4xl font-extrabold">
                        Ashutosh
                    </Link>
                </div>
                <div className="text-xl space-x-4 w-2/3 justify-center">
                    <Link href="/about">
                        about-me
                    </Link>
                    <Link href="/blogs">
                        blogs
                    </Link>
                    <Link href="/newsletter">
                        newsletter
                    </Link>
                    <Link href="/">
                        categories
                    </Link>
                    <Link href="/uses">
                        uses
                    </Link>
                </div>
                <LetsTalkButton />
            </div>
        </>
    );
}
