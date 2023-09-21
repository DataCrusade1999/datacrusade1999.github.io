import React from "react";
import Link from "next/link";
import { LetsTalkButton } from "./buttons";

export default function Navbar() {
    return (
        <>
            <div className="sticky m-5 flex">
                <div className="w-1/3">
                    <Link href="/" className="text-4xl font-extrabold">
                        Home
                    </Link>
                </div>
                <div className="pt-1 text-xl space-x-4 w-2/3 justify-center">
                    <Link href="/about-me">
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
