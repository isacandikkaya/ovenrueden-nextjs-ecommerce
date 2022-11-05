import React, {useState} from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div>
             <nav className="lg:hidden relative z-50">
                    <div className="flex py-2 justify-between items-center px-4">
                        <div>
                            <img src="#solüstlogo" alt="logo" />
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
                                        <span className="font-bold"><Link to="/feature">Hakkımızda</Link></span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Ödeme</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Kaynak</span>
                                    </a>
                                </li>
                                <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none" onclick="dropdownHandler(this)">
                                    <a href="javascript: void(0)" className="ml-2 focus:outline-none focus:ring-2 focus:ring-black">
                                        <span className="font-bold">Giriş Yap</span>
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


        
    </div>
  )
}

export default Navbar