import React, { useState } from "react";
import { Link } from "react-router-dom";

function IndexPage() {
    const [menu, setMenu] = useState(false);
    return (
        <>
            <div className="relative w-full h-full pb-10">
                <div className="hidden md:block">
                    <img className="absolute bg-cover bg-center w-full h-full inset-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Hero%2008.png" alt />
                </div>
                <nav className="lg:hidden relative z-50">
                    <div className="flex py-2 justify-between items-center px-4">
                        <div>
                            <img src="solüst logo" alt="logo" />
                        </div>
                        <div className="visible flex items-center">
                            <button id="open" onClick={() => setMenu(!menu)} className={` ${menu ? 'hidden' : ''} focus:outline-none focus:ring-2 focus:ring-black`}>
                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg2.svg" alt="menu" />
                            </button>
                            <ul id="list" className={` ${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-24`}>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold"><Link to="/hero">Ana Sayfa</Link></span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold"><Link to="/aboutus">Hakkımızda</Link></span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Fiyatlandırma</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Kaynak</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Giriş yap</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="xl:hidden">
                                <button id="close" className={` ${menu ? '' : 'hidden'} close-m-menu focus:ring-2 focus:ring-black focus:outline-none`} onClick={() => setMenu(!menu)}>
                                    <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg3.svg" alt="close" />
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav className="f-f-l relative z-10">
                    <div className="relative z-10 mx-auto container hidden w-full px-4 xl:px-0 lg:flex justify-between items-center py-11">
                        <div>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg4.svg" alt="logo" />
                        </div>
                        <div className="flex items-center text-white text-base font-medium">
                            <ul className="flex items-center pr-3 xl:pr-12">
                                <li className="cursor-pointer hover:text-gray-300 ease-in">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Ana Sayfa</a>
                                </li>
                                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Hakkımızda</a>
                                </li>
                                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white" alt = "./components/Pricing.jsx">Fiyatlandırma</a>
                                </li>
                                <li className="pl-3 lg:pl-5 xl:pl-8 cursor-pointer hover:text-gray-300 ease-in">
                                    <a href="javascript:void(0)" className="focus:outline-none focus:ring-2 focus:ring-white">Kaynak</a>
                                </li>
                            </ul>
                            <button className="px-6 py-3 bg-indigo-400 hover:bg-indigo-500 text-white text-base font-medium rounded-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700">
                                Giriş Yap
                                <img className="ml-4" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/large_typography_with_gradient_and_glass_effect_Svg5.svg" alt="arrow" />
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="relative px-4 xl:px-0 container mx-auto md:flex items-center gap-8">
                    <div className="text-color w-full md:w-1/3 pt-16 lg:pt-32 xl:pt-12">
                        <h1 className="text-4xl md:text-4xl lg:text-6xl w-11/12 lg:w-11/12 xl:w-full xl:text-6xl text-gray-900 font-extrabold f-f-l">Increase Sales using our Platform</h1>
                        <div className="f-f-r text-base lg:text-base pb-20 sm:pb-0 pt-10 xl:pt-6">
                            <h2>The next big thing starts here. Save time, effort, and automate your social media posting</h2>
                        </div>
                        <div className="lg:flex">
                            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start right now</button>
                            <button className="hidden md:block hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 lg:ml-2 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button>
                        </div>
                    </div>
                    <img className="w-full mt-8 md:mt-0 object-fill md:w-2/3 md:-ml-4 lg:-ml-4 xl:ml-0" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Graphic.png" alt="sample page" role="img" />
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-6/12 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Start right now</button>
                    <button className="md:hidden hover:opacity-90 text-base w-full xl:text-base xl:w-4/12 xl:ml-2 mt-4 xl:mt-8 f-f-r py-4  bg-indigo-200 text-indigo-600 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 rounded-lg">Try it out</button>
                </div>
            </div>


            <style>{`
        .top-100 {
            animation: slideDown .5s ease-in-out;
        }

        @keyframes slideDown {
            0% {
                top: -50%;
            }

            100% {
                top: 0;
            }
        }

        * {
            outline: none !important;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
        } `}</style>
        </>
    );
}

export default IndexPage;
