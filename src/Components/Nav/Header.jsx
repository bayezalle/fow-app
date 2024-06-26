import React from 'react'
import easylogo from "../../images/easy.png"
import { BsTelephone } from "react-icons/bs";
import car from '../../images/blog/car.svg'
import { FiShoppingCart } from "react-icons/fi";


const Header = () => {
  return (
    <div>
        <nav class="bg-white mb-2 border-gray-200 dark:bg-gray-900 shadow rounded-lg max-w-full">
            <div class="flex flex-row flex-wrap justify-between items-center mx-auto max-w-screen-xl p-3 font-bolder">
                <div className="flex justify-between items-center gap-2 mb-3">
                    <img src={car} alt="Service" class="icon-svg-img"/>
                    <span>Service disponible 24h/24</span>
                </div>
                <div className="flex justify-between items-center gap-2 mb-3">
                    <BsTelephone />
                    <span>Livraison en 24h</span>
                </div>
                <div className="flex justify-between items-center gap-2 mb-3">
                    <img src={car} alt="Service" class="icon-svg-img"/>
                    <span>33 00 000 000</span>
                </div>
            </div>
        </nav>
        <nav class="bg-white border-gray-200 dark:bg-gray-900 max-w-full
            text-black bg-gradient-to-r from-white-500 via-white-600 to-white-700 hover:bg-gradient-to-br focus:ring-4 
            focus:outline-none focus:ring-white-300 dark:focus:ring-white-800 shadow-lg shadow-white-500/50 dark:shadow-lg 
            dark:shadow-white-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={easylogo} class="h-8" alt="" />
                </a>
                <div class="flex md:order-2">
                    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                    <div class="relative mt-3 md:hidden">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </div>
                        <input type="text" id="search-navbar" 
                        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50
                        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <div class="relative hidden md:block">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                        <input type="text" id="search-navbar" 
                        class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                        focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
                        dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
                    </div>
                    <ul class="flex flex-col p-4 md:p-0 mt-4 text-xl font-semibold text-black-600/100 
                    dark:text-black-500/100 border border-gray-100 rounded-lg bg-gray-50 
                    md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
                    md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                        md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 
                        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Se Connecter</a>
                        </li>
                        <li>
                        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
                        md:hover:text-orange-700 md:p-0 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 
                        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Mes Favoris</a>
                        </li>
                        <li>
                        <a href="#" class="block flex items-center gap-2 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent
                        md:hover:text-orange-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-gray-700 
                        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><FiShoppingCart />Panier</a>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Header
