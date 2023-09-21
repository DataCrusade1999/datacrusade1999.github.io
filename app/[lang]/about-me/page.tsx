import Link from "next/link";
import React from "react";
import Gradient from "@/app/components/gradient";
import { Metadata } from "next";
import PageHeader from "@/app/components/pageHeader";

export const metadata: Metadata = {
    title: 'About-Me',
    description: 'About me page of Ashutosh Pandey',
}

export default function about() {
    return (
        <div className="
        mobile-sm:max-mobile-sm:flex-col
        mobile-md:max-mobile-md:flex-col
        mobile-lg:max-mobile-lg:flex-col
        tablet:max-tablet:flex-col
        laptop:flex flex-row items-center space-y-3
        ">
            <div className="items-end w-[650px]">
                <PageHeader style="text-[110px] font-bold" heading="/about-me" />
            </div>
            <div className="w-[650px] pt-[100px] pb-[100px] text-[18px] text-justify">
                <p className="pt-[10px] pb-[10px]">
                    I&#39;m Ashutosh Pandey, thanks for checking out my website!
                </p>
                <p className="pt-[10px] pb-[10px]">
                    I&#39;m currently a front-end engineer at Remote. I enjoy working on React and all
                    things JavaScript/TypeScript and am a big believer in the functional programming
                    paradigm — lately, I&#39;ve been interested in learning Elixir.
                </p>
                <p className="pt-[10px] pb-[10px]">
                    I&#39;m a self-taught developer with a degree in CSE  from ABESIT,
                    Ghaziabad (psst, my alma mater&#39;s was the first big website I worked on!). I&#39;ve
                    been fascinated by computers and the internet from around 8th grade when I used Google
                    for the first time.
                </p>
                <p className="pt-[10px] pb-[10px]">
                    In the past, I&#39;ve worked extensively with Python and the Google Cloud Platform, and
                    been responsible for python and UI rewrites. I&#39;ve continued working with React and
                    TypeScript since then and love the experiece, along with a bunch of other tooling — I
                    firmly believe in developer tooling which allows one to become a 1.1x developer . 😉
                </p>
                <p className="pt-[10px] pb-[10px]">
                    Outside of the world of programming, I am also a quizzer and was the lead at my
                    college&#39;s Quiz Club. Having played a lot of CS in my childhood and college, I also
                    love following the CS:GO esports scene. I enjoy using mechanical keyboards and lurk r/mk
                    pretty much daily. I enjoy just about all genres of music and <Link className="font-extrabold
                    bg-gradient-to-r from-fuchsia-400 via-red-500 to-orange-400 bg-clip-text text-transparent"
                        href="/podcasts">podcasts</Link> and I&#39;m always
                    looking for more ways to consume information from around the world. <Gradient LinkData={{
                        LinkText: "Feel free to reach out to me",
                        href: "/",
                    }} />

                </p>
            </div>
        </div>
    )
}
