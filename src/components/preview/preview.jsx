import React from 'react'
import Img from '../../assets/Vector (4).png'
import Img1 from '../../assets/a.png'
import Img2 from '../../assets/Group 25.png'
import Img3 from '../../assets/Rectangle 12.png'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Preview = () => {
    const shadow = '4px 4px 4px 0px rgba(0, 0, 0, 0.25), -1px 4px 6.3px 0px rgba(255, 255, 255, 0.50), 0px -2px 4px 0px rgba(0, 0, 0, 0.25)';
    return (
        <>
            <div className="flex justify-center">
                <div className="container max-w-[1000px]">
                    <div className='button'>
                        <div className='max-w-[335px]'>
                            <div class="text-sm font-medium text-center ">
                                <ul class="flex flex-wrap gap-2 -mb-px">
                                    <li class="me-2">
                                        <a href="#" class="rounded py-2 px-5 bg-[#1F5E7C] text-[14px] font-semibold text-white ">
                                            House</a>
                                    </li>
                                    <li class="me-2">
                                        <a href="#" class="rounded py-2 px-5 bg-[white] border text-[14px] font-semibold" aria-current="page">
                                            Appartment</a>
                                    </li>
                                    <li class="me-2">
                                        <a href="#" class="rounded py-2 px-5 bg-[white] border text-[14px] font-semibold">
                                            Housing</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='flex justify-between mt-5 px-2 text-[12px]'>
                                <p className='text-[#1F5E7C] font-semibold'>59 Properties</p>
                                <div className='flex gap-2'>
                                    <button className='rounded border py-1 px-2 '> <i class="fa fa-bookmark mr-2 text-[#1F5E7C]" aria-hidden="true"></i>
                                        Save</button>
                                    <button className='rounded border py-1 px-2 '> <i class="fa fa-sort mr-2 text-[#1F5E7C]" aria-hidden="true"></i>
                                        Sort</button>
                                </div>
                            </div>
                            {/* Card */}

                            <div class="max-w-sm mt-4 rounded-xl"
                                style={{ boxShadow: shadow }}
                            >
                                <div className='px-2 py-2'>
                                    <Carousel showThumbs={false} showIndicators={true} showArrows={false} showStatus={false}>
                                        <div>
                                            <img src={Img3} />

                                        </div>
                                        <div>
                                            <img src={Img3} />
                                        </div>
                                        <div>
                                            <img src={Img3} />
                                        </div>
                                    </Carousel>
                                </div>
                                <div class="p-5">
                                    <h5 class="mb-1 text-[12px] font-semibold tracking-tight">
                                        Appartment</h5>
                                    <h5 class="mb-1 text-[14px] font-bold tracking-tight">
                                        1200$</h5>
                                    <h5 class=" text-[14px] font-bold tracking-tight text-[#B6B6B6]">
                                        1269 Lake Forest Drive</h5>
                                </div>
                                <div className='flex gap-2 px-5 mb-2'>
                                    <div><img src={Img} alt='abc' /></div>
                                    <p>1</p>
                                    <div><img src={Img1} alt='abc' /></div>
                                    <p>2</p>
                                    <div><img src={Img2} alt='abc' /></div>
                                    <p>60 m2</p>
                                </div>
                            </div>

                            <div class="max-w-sm mt-5 rounded-xl"
                                style={{ boxShadow: shadow }}
                            >
                                <div className='px-2 py-2'>
                                    <Carousel showThumbs={false} showIndicators={true} showArrows={false} showStatus={false}>
                                        <div>
                                            <img src={Img3} />

                                        </div>
                                        <div>
                                            <img src={Img3} />
                                        </div>
                                        <div>
                                            <img src={Img3} />
                                        </div>
                                    </Carousel>
                                </div>
                                <div class="p-5">
                                    <h5 class="mb-1 text-[12px] font-semibold tracking-tight">
                                        Villa</h5>
                                    <h5 class="mb-1 text-[14px] font-bold tracking-tight">
                                        1200$</h5>
                                    <h5 class=" text-[14px] font-bold tracking-tight text-[#B6B6B6]">
                                        1269 Lake Forest Drive</h5>
                                </div>
                                <div className='flex gap-2 px-5 mb-2'>
                                    <div><img src={Img} alt='abc' /></div>
                                    <p>1</p>
                                    <div><img src={Img1} alt='abc' /></div>
                                    <p>2</p>
                                    <div><img src={Img2} alt='abc' /></div>
                                    <p>60 m2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Preview