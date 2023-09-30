import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <div className="ml-4 mr-4">
            <footer className="text-myred body-font">
                <div className="container mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                QUICK LINKS
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Home</Link>
                                </li>
                                <li>
                                    <Link href={"/about"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">About</Link>
                                </li>
                                <li>
                                    <Link href={"/contactus"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Contact Us</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                Page Links
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"#industry"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Industry Solutions</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-xl font-bold  tracking-tight text-myorange mb-3">
                                CONTACT US
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-bold  tracking-tight">CALL US</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-sm font-normal  tracking-tight"><span className="capitalize font-medium mr-4 text-myred">telephone:- </span>+44 (0) 208 1443 090</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-sm font-normal  tracking-tight"><span className="capitalize font-medium mr-9 text-myred">Mobile:- </span>+44 (0) 785 2122 339</Link>
                                </li>

                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-base font-bold  tracking-tight">EMAIL US</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-myblue hover:text-myorange scroll-m-20 text-sm font-normal  tracking-tight">Info@futureteknix.com</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <Link href={"/home"} className="flex title-font font-medium items-center md:justify-start justify-center text-myorange ">
                                <Image src={'/assest/FXlogo-01.png'} alt="logo" width={200} height={200} />

                            </Link>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <Link href={"/home"} className="flex title-font font-medium items-center md:justify-start justify-center text-myorange">
                            <Image src={'/assest/FXlogo-01.png'} alt="logo" width={150} height={150} />

                        </Link>
                        <p className="text-sm text-myblue sm:ml-6 sm:mt-0 mt-4">
                            © 2023 FUTURETEKNI | Powered by<span className="ml-3 text-sm text-myorange">FUTURETEKNI</span>
                        </p>
                        {/* <span className="inline-flex sm:ml-auto sm:mt-7 mt-4 justify-center sm:justify-start ">
                            <p className="text-myblue p-500">
                                <Link href="https://www.facebook.com/Daniyalqasmi5327">
                                    <FaFacebookF className="text-3xl hover:text-blue-700" />
                                </Link>
                            </p>
                            <p className="ml-3 text-myblue p-500">
                                <Link href="https://www.instagram.com/muhammaddaniyalqasmi5327">
                                    <FaInstagram className="text-3xl ml  hover:text-red-700  " />

                                </Link>
                            </p>
                        </span> */}
                    </div>
                </div>
            </footer >

        </div >
    )
}