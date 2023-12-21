"use client"
import Image from 'next/image'
import React from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
    {
        image: '/testimonial.png',
        title: 'Title Heading Will Go Here',
        desc: 'Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit.'
    },
    {
        image: '/testimonial.png',
        title: 'Title Heading Will Go Here',
        desc: 'Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit.'
    },
    {
        image: '/testimonial.png',
        title: 'Title Heading Will Go Here',
        desc: 'Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit.'
    },
    {
        image: '/testimonial.png',
        title: 'Title Heading Will Go Here',
        desc: 'Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit.'
    },
    {
        image: '/testimonial.png',
        title: 'Title Heading Will Go Here',
        desc: 'Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit. Lorem ipsum dolor sit amet, onsectetur adipiscing elit.'
    }
]

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
}
const Testimonials = () => {
    return (
        <Carousel {...settings}>
            {
                data.map((val) => {
                    return (
                        <div className='pt-14'>
                            <div className='bg-white md:w-[550px] h-[220px] m-auto p-6 rounded-[30px] flex flex-col justify-end'>
                                <Image
                                    className='rounded-[30px] m-auto relative bottom-4'
                                    src={val.image}
                                    alt={val.title}
                                    width={100}
                                    height={100}
                                />
                                <p className='text-[#0B7342] text-[20px] font-bold capitalize text-center mb-2'>{val.title}</p>
                                <p className='text-[#0C3A51] font-medium text-center mb-0'>{val.desc}</p>
                            </div>
                        </div>
                    )
                })
            }
        </Carousel>
    );
}

export default Testimonials;