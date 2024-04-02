import React from 'react';
import img1 from '../../images/ad1.png';
import img2 from '../../images/ad2.png';
import img3 from '../../images/ad3.png';
import c1 from "../../images/category/c1.jpg"
import c2 from '../../images/category/c2.jpg';
import c3 from '../../images/category/c3.jpg';
import c4 from '../../images/category/c4.jpg';
import c5 from '../../images/category/c5.png';
import c6 from '../../images/category/c6.png';
import im1 from "../../images/products/img-2.jpg"
import im2 from '../../images/products/img-3.jpg';
import im3 from '../../images/products/img-4.jpg';
import im4 from '../../images/products/img-5.jpg';
import im5 from '../../images/products/img-6.jpg';
import im6 from '../../images/products/img-7.jpg';
import im7 from '../../images/products/img-8.jpg';
import im8 from '../../images/products/img-9.jpg';
import im9 from '../../images/products/img-11.jpg';
import im10 from '../../images/products/img-12.jpg';
import im11 from '../../images/products/img-14.jpg';
import im12 from '../../images/products/img-15.jpg';
import iconic from '../../images/blog/Main-about6.svg';
import organic from '../../images/organic.jpg';


import Card from './Card';

const Home = () => {
    const listCard =[
        {
            id:1,
            img: im1,
            description:'Description 1',
            poid:"bvjhvjh",
            prix:'Prix 1',
        },
        {
            id:2,
            img: im2,
            description:'Description 2',
            poid:"bvjhvjh",
            prix:'Prix 2',
        },
        {
            id:3,
            img: im3,
            description:'Description 3',
            poid:"bvjhvjh",
            prix:'Prix 3',
        },
        {
            id:4,
            img: im4,
            description:'Description 4',
            poid:"bvjhvjh",
            prix:'Prix 4',
        },
        // {
        //     id:5,
        //     img: im5,
        //     description:'Description 5',
        //     poid:"bvjhvjh",
        //     prix:'Prix 5',
        // },
        // {
        //     id:6,
        //     img: im6,
        //     description:'Description 6',
        //     poid:"bvjhvjh",
        //     prix:'Prix 6',
        // },
    ];

    return (
        <div className="py-6 mt-6">
            <section className="section1 mt-5 py-5">
                <div id="custom-controls-gallery" class="relative max-w-full" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div class="w-[100%]  h-[100%] relative z-[5] overflow-hidden rounded-lg md:h-96">
                        {/* <!-- Item 1 --> */}
                        <div class="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src={img1}
                            class="absolute block  h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 
                            top-1/2 left-1/2" alt=""/>
                        </div>
                        {/* <!-- Item 2 --> */}
                        <div class="hidden duration-300 ease-in-out" data-carousel-item="active">
                            <img src={img2}
                            class="absolute block  h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 
                            left-1/2" alt=""/>
                        </div>
                        {/* <!-- Item 3 --> */}
                        <div class="hidden duration-300 ease-in-out" data-carousel-item>
                            <img src={img3}
                            class="absolute block  h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 top-1/2 
                            left-1/2" alt=""/>
                        </div>
                    </div>
                    <div class="flex justify-end items-center pt-4">
                        <button type="button" class="flex justify-center items-center me-4 bg-lime-900 h-full 
                        cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                                <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="flex justify-center items-center bg-lime-900 h-full 
                        cursor-pointer group focus:outline-none" data-carousel-next>
                            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white 
                                group-focus:text-gray-900 dark:group-focus:text-white">
                                <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <div class="mt-5">
                    <div className="py-5 mt-5">
                        <h4 className='text-lime-800 font-3 font-bold'>CATEGORY</h4>
                        <h2 className='text-lg font-bold'>Shop by Category</h2>
                    </div>
                    <div class="flex justify-between items-center mt-3 py-5 mb-5">
                        <div className='font-5 items-center'>
                            <img class="h-auto max-w-full rounded-lg" 
                            src={c1} alt=""/>
                            <span>Vegitables - (12)</span>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" 
                            src={c2} alt=""/>
                            <span>Agriculture Items - (12)</span>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" 
                            src={c3} alt=""/>
                            <span>Milk Products - (12)</span>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" 
                            src={c4} alt=""/>
                            <span>Frozen Items - (10)</span>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" 
                            src={c5} alt=""/>
                            <span>Frozen Items - (10)</span>
                        </div>
                        <div>
                            <img class="h-auto max-w-full rounded-lg" 
                            src={c6} alt=""/>
                            <span>Frozen Items - (10)</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-5'>
            <div className="mb-5 mt-5">
                    <h4 className='text-lime-900 font-bold font-3'>OUR SHOP</h4>
                    <h2 className='text-lg font-5 font-bold'>Popular Products</h2>
                </div>
                <div id="custom-controls-gallery" class="relative w-full py-5" data-carousel="slide">
                    {/* <!-- Carousel wrapper --> */}
                    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div class="hidden duration-200 ease-in-out" data-carousel-item>
                             <div className="flex justify-between items-center">
                                {listCard.map((card) => (
                                    <Card key={card.id}
                                    img={card.img} 
                                    description={card.description}
                                    poid={card.poid}
                                    prix={card.prix} 
                                    />
                                ))}
                            </div>
                        </div>
                        <div class="hidden duration-700 ease-in-out" data-carousel-item>
                            <div className="flex justify-between items-center w-[100%] h-[100%]">
                                {listCard.map((card) => (
                                    <Card key={card.id}
                                    img={card.img} 
                                    description={card.description}
                                    poid={card.poid}
                                    prix={card.prix} 
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end items-center pt-4">
                        <button type="button" class="flex justify-center items-center me-4 bg-lime-900 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                                <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                                </svg>
                                <span class="sr-only">Previous</span>
                            </span>
                        </button>
                        <button type="button" class="flex justify-center items-center bg-lime-900 h-full cursor-pointer
                         group focus:outline-none" data-carousel-next>
                            <span class="text-gray-400 hover:text-gray-900 dark:hover:text-white 
                            group-focus:text-gray-900 dark:group-focus:text-white">
                                <svg class="rtl:rotate-180 w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                                <span class="sr-only">Next</span>
                            </span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-silver-700">
                <div className="py-5 text-start">
                    <h2 className="text-green-700 font-bold">HOW IT WORKS</h2>
                </div>
                <div className="flex gap-5 items-center">
                    <div className="text-start">
                        <div className="py-5">
                            <div className="mb-6">
                                <img src={iconic} className=" mb-4" alt="" />
                                <h4 className='font-bold'>Pick the Right Box Style for You</h4>
                                <span>Fusce viverra convallis commodo. Aenean iaculis urna ac urna </span><br />
                                <span>bibendum pharetra. Pellentesque habitant</span>
                            </div>
                            <div className="mb-6">
                                <img src={iconic} className="w-20 mb-4" alt="" />
                                <h4 className='font-bold'>Pick the Right Box Style for You</h4>
                                <span>Fusce viverra convallis commodo. Aenean iaculis urna ac urna </span><br />
                                <span>bibendum pharetra. Pellentesque habitant</span>
                            </div>
                            <div className="mb-5">
                                <img src={iconic} className="w-20 mb-4" alt="" />
                                <h4 className='font-bold'>Pick the Right Box Style for You</h4>
                                <span>Fusce viverra convallis commodo. Aenean iaculis urna ac urna </span><br />
                                <span>bibendum pharetra. Pellentesque habitant</span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="py-5 max-w-full">
                            <div className="font-bold text-5xl mb-3">
                                <h1>Organic Produce
                                Deliver to your Door
                                </h1>
                            </div>
                            <div className="">
                                <img src={organic} className='' alt="" />
                            </div>
                        </div>
                    </div>
                </div>                   
            </section>
        </div>
    );
};

export default Home;
