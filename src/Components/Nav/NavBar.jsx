import React from 'react'
import easylogo from "../../images/easy.png"
import { BsTelephone } from "react-icons/bs";
import car from '../../images/blog/car.svg'

const NavBar = () => {
  return (
<div className='max-w-full mb-5'>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 shadow rounded-lg">
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
<nav class="bg-white p-5 dark:bg-gray-900  w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center mt-3 justify-between mx-auto p-4">
  <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={easylogo} class="h-8" alt="Flowbite Logo"/>
      {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
  </a>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      {/* <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
      focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 
      dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Get started
      </button> */}
      <form class="max-w-md mx-auto">   
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input type="search" id="default-search" 
              class="block  p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
              focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 
              dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search" required />
              {/* <button type="submit" 
              class="text-white absolute end-2.5 bottom-1 bg-blue-700 hover: focus:ring-4 
              focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 
              dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Search
              </button> */}
          </div>
      </form>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-colshadow p-4 md:p-0 mt-5 font-bold border border-gray-100 rounded-lg bg-gray-50
     md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 
     md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 
        md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
        md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">A propos</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
        md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Produit</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
        md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
        md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent 
        md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 
        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Nous Contacter</a>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>
  )
}

export default NavBar
