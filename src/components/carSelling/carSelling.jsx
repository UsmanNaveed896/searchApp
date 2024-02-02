import React, { useRef } from 'react'
import Img from '../../assets/Shape.png'
import Img1 from '../../assets/Shape11.png'
import Img2 from '../../assets/Shape33.png'
import Productview from '../productview/productview'

const CarSelling = () => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
 
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <div className='usedCars rounded-lg px-3 py-6 mt-12'
                        style={{ boxShadow: shadow }}
                    >
                        <div className="mt-4  flex justify-between items-center">
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Title</h1>
                                <input className='pr-12 pl-2  py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Title' />
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Condition</h1>
                                <label className="inline-flex items-center ">
                                    <input
                                        type="radio"
                                        value="new"
                                        className="form-radio h-4 w-4 text-blue-600"
                                    />
                                    <span className="mr-2 ml-2 text-gray-700 text-[12px] font-semibold ">New</span>
                                </label>
                                <label className="inline-flex items-center ">
                                    <input
                                        type="radio"
                                        value="used"
                                        className="form-radio h-4 w-4 text-blue-600"
                                    />
                                    <span className="ml-2 text-gray-700 text-[12px] font-semibold">Used</span>
                                </label>
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Year</h1>
                                <input className='pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Year' />
                            </div>
                        </div>
                    </div>
                    <div className='usedCars rounded-lg px-3 py-6 mt-6'
                        style={{ boxShadow: shadow }}
                    >
                        <div className="mt-4  flex justify-between items-start">
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Brand</h1>
                                <select className='px-6 py-3 rounded-xl bg-[#F5F4F8] text-[14px] text-[#8C9199]'>
                                    <option>Select Brand</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                            </div>
                            <div>
                                <div>
                                    <h1 className='text-[#252B5C] font-bold mb-2'>Model</h1>
                                    <select className='px-6 py-3 rounded-xl bg-[#F5F4F8] text-[12px] text-[#8C9199]'>
                                        <option>Select Model</option>
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Features</h1>
                                <input className='pr-12 pl-2 py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Search' />
                                <div className="flex flex-col space-y-4 text-[12px] mt-6">
                                    <div className="flex space-x-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Alarm</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Cruise Control</span>
                                        </label>
                                    </div>
                                    <div className="flex space-x-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Bluetooth</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="checkbox"
                                                className="form-checkbox h-4 w-4 text-blue-600"
                                            />
                                            <span className="ml-2 text-gray-700 font-semibold">Front Parking Sensor</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='usedCars rounded-lg px-3 py-6 mt-12 '
                        style={{ boxShadow: shadow }}
                    >
                        <div className="mt-4  flex justify-between items-start">
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Location</h1>
                                <input className='px-3 py-3 rounded-xl bg-[#F5F4F8] text-[12px] ' placeholder='Search Location' />
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Price</h1>
                                <input className='px-3 py-3 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Price' />
                            </div>
                            <div>
                                <h1 className='text-[#252B5C] font-bold mb-2'>Description</h1>
                                <textarea className='px-3 w-64 h-32 rounded-xl bg-[#F5F4F8] text-[12px]' placeholder='Enter Year' />
                            </div>
                        </div>
                    </div>

                    <div className='usedCars rounded-lg px-3 py-6 mt-12 '
                        style={{ boxShadow: shadow }}
                    >
                        <h1 className='text-[#252B5C] font-bold mb-2'>Upload Photos</h1>
                        <div className='flex items-end justify-between mt-4'>
                            <div className='flex flex-wrap  mt-6'>
                                <div className='relative '>
                                    <div className='rounded-full absolute right-[4px]  bg-[#1e50b2] h-6 w-6 top-[2px] cursor-pointer'>
                                        <i className='fa fa-close  absolute text-white right-[6px]  top-[3px] font-thin' />
                                    </div>
                                    <img src={Img} alt='abc' />

                                </div>
                                <div className='relative '>
                                    <div className='rounded-full absolute right-[4px]  bg-[#1e50b2] h-6 w-6 top-[2px] cursor-pointer'>
                                        <i className='fa fa-close  absolute text-white right-[6px]  top-[3px] font-thin' />
                                    </div>
                                    <img src={Img1} alt='abc' />
                                    <p className='text-[8px] font-bold text-center'>2/21</p>
                                </div>
                                <div className='relative '>
                                    {/* <Clients/> */}
                                    <div className='rounded-full absolute right-[4px]  bg-[#1e50b2] h-6 w-6 top-[2px] cursor-pointer'>
                                        <i className='fa fa-close  absolute text-white right-[6px]  top-[3px] font-thin' />
                                    </div>
                                    <img src={Img2} alt='abc' />
                                    <p className='text-[8px] font-bold text-center'>3/21</p>
                                </div>

                                <div>
                                    <button className='bg-[#F5F4F8] py-3 px-6 rounded-full '>+</button>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="bg-gradient-to-b from-blue-500 to-indigo-600  hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Add 360
                                </button>
                            </div>
                            <div>
                                <button
                                    className="bg-gradient-to-b from-blue-400 via-blue-500 to-blue-900 text-white text-[14px] font-semibold py-4 px-12 rounded-lg focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Sell Your Car
                                </button>
                            </div>
                            <div>
                             <Productview/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarSelling