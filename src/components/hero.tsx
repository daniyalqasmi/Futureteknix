import { Mail } from "lucide-react";

import { FaBasketShopping } from "react-icons/fa6"



export default function Hero() {
    return (
        <div className="mb-[150px]">
            <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat" >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5 text-myblue  ">FUTURE <span className="text-myred ">TEKNIX</span></h1>
                        <p className="mb-5 scroll-m-20 text-lg font-semibold tracking-tight text-white">A powerhouse company at the forefront of cutting-edge technology, shaping the future through innovation and excellence.</p>
                        
                    </div>
                </div>
            </div></div>
    )

}