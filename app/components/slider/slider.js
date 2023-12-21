"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { Component } from "react";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css'

export default class Slider extends Component {
  render() {

    const data = [
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      },
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      },
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      },
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      },
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      },
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      },
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      },
      {
        image: '/offer.jpg',
        title: 'Article Title',
        desc: 'Lorem ipsum dolor sit amet consectetur elit'
      }
    ]

    const items = []
    let temparr = []
    let i = 1
    data.map((val) => {
      if(i%2 === 0) {
        temparr.push(val)
        items.push(temparr)
        temparr = []
      }else{
        temparr.push(val)
      }
      i++
    })
    
    items.map((val) => {
      val.map((v) => {
        console.log(v)
      })
    })

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Carousel {...settings}>
        {
        items.map((val) => {
          return (
            <div className='p-3'>
              {val.map((v) => {
                return (<div className='bg-white rounded-xl grid grid-cols-3 gap-3 p-3 mb-6'>
                  <Image
                    className='rounded-xl'
                    src='/offer.jpg'
                    alt='Banner'
                    width={600}
                    height={0}
                  />
                  <div className='col-span-2 flex flex-col justify-center'>
                    <p className='text-[#FFBD59] font-bold'>Article Title</p>
                    <p className='text-[#767676] text-[13px]'>Lorem ipsum dolor sit amet consectetur elit</p>
                    <Link className='text-[#2993DF] text-[12px] underline underline-offset-2' href='javascript:void(0);'>Read More</Link>
                  </div>
                </div>
                )
              })}
            </div>
          )
        })
        /* {
          data.map((value, index, array) => {
              index%2 === 0 ? (
                <div className='p-3'>
                        <div className='bg-white rounded-xl grid grid-cols-3 gap-3 p-3'>
                          <Image
                            className='rounded-xl'
                            src='/offer.jpg'
                            alt='Banner'
                            width={600}
                            height={0}
                          />
                          <div className='col-span-2 flex flex-col justify-center'>
                            <p className='text-[#FFBD59] font-bold'>Article Title</p>
                            <p className='text-[#767676] text-[13px]'>Lorem ipsum dolor sit amet consectetur elit</p>
                            <Link className='text-[#2993DF] text-[12px] underline underline-offset-2' href='javascript:void(0);'>Read More</Link>
                          </div>
                        </div>
              ) : (
                <div className='bg-white rounded-xl grid grid-cols-3 gap-3 p-3'>
                          <Image
                            className='rounded-xl'
                            src='/offer.jpg'
                            alt='Banner'
                            width={600}
                            height={0}
                          />
                          <div className='col-span-2 flex flex-col justify-center'>
                            <p className='text-[#FFBD59] font-bold'>Article Title</p>
                            <p className='text-[#767676] text-[13px]'>Lorem ipsum dolor sit amet consectetur elit</p>
                            <Link className='text-[#2993DF] text-[12px] underline underline-offset-2' href='javascript:void(0);'>Read More</Link>
                          </div>
                        </div>
                      </div>
              )
          })
        } */}
      </Carousel>
    );
  }
}