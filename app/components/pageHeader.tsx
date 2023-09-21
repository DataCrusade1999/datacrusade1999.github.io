import React from "react";
import { Suspense } from 'react'

interface PageHeaderProps {
    heading: string,
    text?: string,
    style: string,
}

export default function PageHeader({ heading, text, style }: PageHeaderProps) {
    return (
        <div className="my-16 w-full text-center">
            {text && <span className="bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400 bg-clip-text
             text-transparent font-bold">{text}</span>}
            <Suspense fallback={<><span>Sorry Try again!</span></>}>
                <h1 className={style}>{heading}</h1>
            </Suspense>
        </div>
    );
}
