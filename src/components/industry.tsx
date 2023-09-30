import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Industry = () => {
    return (
        <div>
            <div className="mb-[100px] mt-[100px]" id="Product">
                <div className="text-center mb-15 mt-16  ">
                    <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl mb-4 md:text-3xl  sm:text-xl text-4xl text-mylogo capitalize text-center text-myblue">
                        industrial solutions
                    </h1>
                    <div className="flex mt-2 justify-center mb-12">
                        <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 mr-20 ml-20">
                    {/* Telecom */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/telecom-01.jpg"}
                                alt="sandwich"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Telecom Operators</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Telecom Operators</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Defence */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/defence-1.jpg"}
                                alt="sandwich"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Defence</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Defence</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Oil & Gas */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/oil-01.jpg"}
                                alt="sandwich"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Oil & Gas</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Oil & Gas</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Non-Government Organisations */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/non-gove-01.jpg"}
                                alt="desserts"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Non-Government</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Non-Government</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Power Generation*/}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/solar-01.jpg"}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 lg:text-xl sm:md font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Power Generation</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Power Generation</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Financial Services */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/financial-01.jpg"}
                                alt="family size"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Financial Services</h1>
                            </div>
                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Financial Services</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Federal & Local Government */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/gove-01.jpg"}
                                alt="sandwich"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Federal & Local Government</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Federal & Local Government</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Health Care */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/health-01.jpg"}
                                alt="desserts"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Health Care</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Health Care</h1>
                            </div>
                        </Link>
                    </div>
                    {/* Broadcasting */}
                    <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
                        <Link href={"/contactus"}>
                            <Image src={"/assest/broad-01.jpg"}
                                alt="maincourse"
                                width={350}
                                height={350}
                                className="rounded-xl duration-500 group-hover:scale-125"
                            />

                            <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 lg:text-xl sm:md font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Broadcasting</h1>
                            </div>
                            <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                                <h1 className="uppercase">Broadcasting</h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Industry