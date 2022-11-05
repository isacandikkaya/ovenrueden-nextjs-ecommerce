import React from "react";
function IndexPage() {
    return (
        <>
            <div className=" bg-linear-pink-invert pb-12">
                <div className="mx-auto container pt-20 lg:pt-72 flex flex-col items-center justify-center">
                    
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        
                        <div className="md:flex items-center mt-5 md:mt-10 text-base text-color f-f-l">
                            <h2 className=" md:mr-6 pb-4 md:py-0 cursor-pointer">Download Now</h2>
                            <h2 className="cursor-pointer">License</h2>
                        </div>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">Features</li>
                                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">Pricing</li>
                                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">Careers</li>
                                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 Prodify. All rights reserved</p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </>
    );
}

export default IndexPage;
