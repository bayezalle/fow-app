import React from 'react'

const Card = (props) => {
  return (
    <div>
        <div class="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 
        dark:border-gray-700">
            <div class="p-5">
                <img class="rounded-t-lg mb-3" src={props.img} alt="" />
                <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
                <p class="mb-4 font-normal text-gray-700 dark:text-gray-400">{props.poid}</p>
                <span>dfgh</span>

                <div className="flex justify-between items-center">
                    <p className="font-bold text-green-600">{props.prix}</p>
                    <a href="#" class="inline-flex font-bold items-center px-3 py-2 text-lg text-center border border-green-700
                    text-green-500 bg-white-700 rounded-lg hover:bg-white-800 focus:ring-4 focus:outline-green 
                    focus:ring-white-300 dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800">
                        Add
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
