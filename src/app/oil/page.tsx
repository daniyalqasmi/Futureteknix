import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Oil = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image src={"/assest/oil-02.jpg"}
                        alt="sandwich"
                        width={600}
                        height={600}
                        className="rounded-xl duration-500 group-hover:scale-125"
                    />

                    <div className="text-center  mt-16  ">
                        <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl  md:text-3xl  sm:text-xl text-4xl text-mylogo capitalize text-center text-myblue">
                            OUR PRODUCTS
                        </h1>
                        <div className="flex mt-2 justify-center mb-12">
                            <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                                Instrument Air Supply & Process
                                Hook up Material
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Air Headers & Distribution Manifolds</Link></li>
                                <li><Link href={'/contactus'}>• Condensate Seal Parts</Link></li>
                                <li><Link href={'/contactus'}>• Enclosures & Sunshades</Link></li>
                                <li><Link href={'/contactus'}>• Filters & Regulators</Link></li>
                                <li><Link href={'/contactus'}>• Siphones & Accessories</Link></li>
                                <li><Link href={'/contactus'}>• Tube & Pipe Fitting & Support</Link></li>
                                <li><Link href={'/contactus'}>• Valves & Manifolds</Link></li>

                            </ul>
                        </div>


                        <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 text-myred text-center justify-center ">
                                Mechanical Products
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Pressure Regulators</Link></li>
                                <li><Link href={'/contactus'}>• Steam Traps</Link></li>
                                <li><Link href={'/contactus'}>• Strainers</Link></li>
                            </ul>

                        </div>

                        <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                                Valves & Actuators
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Ball Valves</Link></li>
                                <li><Link href={'/contactus'}>• Butterfly Valves</Link></li>
                                <li><Link href={'/contactus'}>• Cryogenic</Link></li>
                                <li><Link href={'/contactus'}>• Diaphragm Valves</Link></li>
                                <li><Link href={'/contactus'}>• Gate Globe & Check Valves</Link></li>
                                <li><Link href={'/contactus'}>• Pinch Valve</Link></li>
                                <li><Link href={'/contactus'}>• Plug Valves</Link></li>
                                <li><Link href={'/contactus'}>• Force Sensor</Link></li>
                                <li><Link href={'/contactus'}>• Pressure Sensor</Link></li>
                                <li><Link href={'/contactus'}>• Torque Sensor</Link></li>
                            </ul>

                        </div>
                        <div className="xl:w-1/2 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                                Instrumentation & Control
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Digital Water Meter</Link></li>
                                <li><Link href={'/contactus'}>• Flow Meters</Link></li>
                                <li><Link href={'/contactus'}>• Flow Totalizers</Link></li>
                                <li><Link href={'/contactus'}>• HART Handheld Communications</Link></li>
                                <li><Link href={'/contactus'}>• Level Controllers & Switches</Link></li>
                                <li><Link href={'/contactus'}>• Level Guages</Link></li>
                                <li><Link href={'/contactus'}>• Magnetic Flow Meter</Link></li>
                                <li><Link href={'/contactus'}>• Manometers</Link></li>
                                <li><Link href={'/contactus'}>• Orifice Plates</Link></li>
                                <li><Link href={'/contactus'}>• Pressure Regulators</Link></li>
                                <li><Link href={'/contactus'}>• Pressure Guages & Switches</Link></li>
                                <li><Link href={'/contactus'}>• Paperless Recorder</Link></li>
                                <li><Link href={'/contactus'}>• PLCs</Link></li>
                                <li><Link href={'/contactus'}>• PID Controller</Link></li>
                                <li><Link href={'/contactus'}>• Pitot Tubes</Link></li>
                                <li><Link href={'/contactus'}>• Relief Valves</Link></li>
                                <li><Link href={'/contactus'}>• Radar Lavel Meters</Link></li>
                                <li><Link href={'/contactus'}>• RTD</Link></li>
                                <li><Link href={'/contactus'}>• Recorders</Link></li>
                                <li><Link href={'/contactus'}>• Solenoid Valve</Link></li>
                                <li><Link href={'/contactus'}>• Thermocouples</Link></li>
                                <li><Link href={'/contactus'}>• Ultrasonic Level Meters</Link></li>
                                <li><Link href={'/contactus'}>• Ultrasonic Flaw Detectors</Link></li>
                            </ul>

                        </div>
                    </div>

                </div>

            </section>

            
            <div>
                <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl mb-4 md:text-3xl  sm:text-xl text-4xl text-mylogo uppercase text-center text-myblue">
                    OUR Partners
                </h1>
                <div className="flex mt-2 justify-center mb-12">
                    <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                </div>
                <Image src={'/assest/logo-02.jpg'} alt='' width={1500} height={1500} className='items-center justify-center text-center' />
            </div>

            <br /><br />


        </div>
    )
}

export default Oil