"use client";

import Image from "next/image";

export default function ServicesHero() {
    return (
        <section className="pb-24">

            {/* BG GLOW — UNCHANGED */}
            <img
                src="/Ellipse 604.svg"
                alt="bg-glow"
                className="absolute -bottom-25 left-0 w-[550px] md:w-[750px] opacity-90 pointer-events-none z-0"
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

                {/* TOP TEXT + BUTTON */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-14">

                    {/* LEFT TEXT */}
                    <div className="max-w-3xl">
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-3">
                            Lorem ipsum dolor sit{" "}
                            <span className="text-[#6F44FB]">amet consectetur</span>. kshi
                        </h2>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="flex flex-col gap-4">
                        <p className="text-gray-500 max-w-md">
                            Lorem ipsum dolor sit amet consectetur. kshi uemnamet consectetur. hello
                        </p>

                        <button className="px-7 py-3 w-fit rounded-full bg-gradient-to-r from-[#9616FB] to-[#3459FB] text-white font-medium shadow-md">
                            Btn1
                        </button>
                    </div>

                </div>

                {/* ================= MOBILE VIEW ================= */}
                <div className="grid grid-cols-1 gap-6 md:hidden">

                    {/* IMAGE 1 */}
                    <div className="rounded-[24px] overflow-hidden bg-white aspect-[548/292]">
                        <Image
                            src="/images/Service_Hero_Teams.svg"
                            alt="Team"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* STATS */}
                    <div className="rounded-[24px] bg-gradient-to-br from-[#D5BFFF] to-[#F4F4F4] p-4 flex flex-col justify-between h-[292px]"> 
                    <div> <p className="text-sm text-gray-600">Satisfied</p> 
                           <p className="text-sm text-gray-600">Customers</p> 
                    </div> 
                      <h3 className="text-3xl font-bold">200K+</h3> 
                        <img src="/images/Avatar Group.svg" 
                        alt="Avatars" 
                        className="h-8 " /> 
                    </div>

                    {/* IMAGE 2 */}
                    <div className="rounded-[24px] overflow-hidden bg-white aspect-[407/292]">
                        <Image
                            src="/images/Service_Hero_Meetings.svg"
                            alt="Meeting"
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>

                {/* ================= DESKTOP VIEW ================= */}
                <div className="hidden md:flex items-stretch justify-between gap-6">

                    {/* IMAGE CARD 1 */}
                    <div className="w-[548px] h-[292px] rounded-[24px] overflow-hidden bg-white shrink-0">
                        <Image
                            src="/images/Service_Hero_Teams.svg"
                            alt="Team"
                            width={548}
                            height={292}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                    {/* STATS CARD */}
                    <div className="w-[301px] h-[292px] rounded-[24px] bg-gradient-to-br from-[#D5BFFF] to-[#F4F4F4] p-4 flex flex-col justify-between shrink-0">
                        <div>
                            <p className="text-sm text-gray-600">Satisfied</p>
                            <p className="text-sm text-gray-600">Customers</p>
                        </div>

                        <h3 className="text-3xl font-bold">200K+</h3>

                        <img
                            src="/images/Avatar Group.svg"
                            alt="Avatars"
                            className="h-8 block self-start"
                        />
                    </div>

                    {/* IMAGE CARD 2 */}
                    <div className="w-[407px] h-[292px] rounded-[24px] overflow-hidden bg-white shrink-0">
                        <Image
                            src="/images/Service_Hero_Meetings.svg"
                            alt="Meeting"
                            width={407}
                            height={292}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
