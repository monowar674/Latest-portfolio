"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import tahsan from "../../../public/Tahsan.jpg";
import sajjad from "../../../public/download.jpg";
import zisan from "../../../public/download.jpg";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules";

export default function ClientReviews() {
    const clientrevew = [
        {
            name: 'Tahsan Hossain Alim',
            position: 'CEO, Fx Design Shop',
            image: tahsan,
            description: '“This is our second time working with them, and again we’re very satisfied. We’ll definitely come back for future projects.”',
            id: 1,

        },
        {
            name: 'Md Sajjad Hossain',
            position: 'CEO, ',
            image: sajjad,
            description: '"I didn’t expect to receive such excellent service on our first project. I’m definitely looking forward to working with them again in the future."',
            id: 1,

        },
        {
            name: 'Tahsan Hossain Alim',
            position: 'CEO, Fx Design Shop',
            image: zisan,
            description: '“This is our second time working with them, and again we’re very satisfied. We’ll definitely come back for future projects.”',
            id: 1,

        },
    ]
    return (
        <section className="py-10">
            <h2 className="text-white text-3xl text-center font-extrabold mb-8">
                My Clients are saying
            </h2>

            <Swiper
                cssMode
                navigation
                pagination={{ clickable: true }}
                mousewheel
                keyboard
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
                // 🟢 breakpoints for responsiveness
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                }}
            >


                {clientrevew.map(({ name, position, image, description, id }) => {

                    return (
                        <SwiperSlide id={id} className="w-full flex items-center justify-center ">
                            <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center text-center lg:text-left gap-2 bg-[#333] rounded-2xl p-5 ">
                                <Image
                                    className="rounded-2xl"
                                    src={image}
                                    alt="Client photo"
                                    width={160}
                                    height={160}
                                    priority
                                />
                                <div className="max-w-[350px] flex items-center flex-col justify-center ">
                                    <h2 className="text-2xl text-[#ff9100]">{name}</h2>
                                    <p className="text-sm text-[#aaa]">{position}</p>
                                    <p className="text-base text-white mt-2">
                                        {description}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

                {/* আরও SwiperSlide যোগ করো */}
            </Swiper>
        </section>
    );
}
