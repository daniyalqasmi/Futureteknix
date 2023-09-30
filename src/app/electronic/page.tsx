import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Electronic = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <Image src={"/assest/electronic-02.jpg"}
                        alt="sandwich"
                        width={600}
                        height={600}
                        className="rounded-xl duration-500 group-hover:scale-125"
                    />
                    <div className="text-center lg:w-2/3 w-full">
                        <br />
                        <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl mb-4 md:text-3xl  sm:text-xl text-4xl text-mylogo capitalize text-center text-myblue">
                            Overview
                        </h1>
                        <div className="flex mt-2 justify-center mb-12">
                            <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                        </div>
                        <p className="mb-8 leading-relaxed">
                            Futureteknix is a high-service distribution partner of technology products, services and solutions for electronic system design, maintenance and repair. Bringing together
                            the latest products, services, and development software, all connected to an innovative online engineering community where purchasers and engineers can access peers
                            an experts, a wide range of independent technical information and helpful tools. Whether researching a new technology, designing an electronic product, or looking for
                            parts to repair an existing system, we are the trusted source to find the answers and parts you need to keep your project on the fast track, right from the start.
                        </p>
                    </div>
                    <div className="text-center  mt-16  ">
                        <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl  md:text-3xl  sm:text-xl text-4xl text-mylogo capitalize text-center text-myblue">
                            OUR PRODUCTS
                        </h1>
                        <div className="flex mt-2 justify-center mb-12">
                            <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                                Development Tools
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Data Acquisition</Link></li>
                                <li><Link href={'/contactus'}>• DSP Solution</Link></li>
                                <li><Link href={'/contactus'}>• Embedded Computing Design</Link></li>
                                <li><Link href={'/contactus'}>• Embedded Processing Designs</Link></li>
                                <li><Link href={'/contactus'}>• Embedded System Designs</Link></li>
                                <li><Link href={'/contactus'}>• FPGAs & CPLDs</Link></li>
                                <li><Link href={'/contactus'}>• In-Circuit Debugger</Link></li>
                                <li><Link href={'/contactus'}>• In-circuit Emulator</Link></li>
                                <li><Link href={'/contactus'}>• Instruments Control</Link></li>
                                <li><Link href={'/contactus'}>• Programmable Automation & Control</Link></li>

                            </ul>
                        </div>


                        <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 text-myred text-center justify-center ">
                                Furnaces
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Chamber Furnace</Link></li>
                                <li><Link href={'/contactus'}>• Equipment for Heating Heat Treatment</Link></li>
                                <li><Link href={'/contactus'}>• Equipment for Induction Melting</Link></li>
                                <li><Link href={'/contactus'}>• Equipment for Tube Pipe Welding</Link></li>
                                <li><Link href={'/contactus'}>• Tube Furnace</Link></li>
                                <li><Link href={'/contactus'}>• Vacuum Tube Furnace</Link></li>
                            </ul>

                        </div>

                        <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                                Sensors
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Accelerometer</Link></li>
                                <li><Link href={'/contactus'}>• Force Sensor</Link></li>
                                <li><Link href={'/contactus'}>• Pressure Sensor</Link></li>
                                <li><Link href={'/contactus'}>• Torque Sensor</Link></li>
                            </ul>

                        </div>
                        <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                                LaboratoryS
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Calibration Equipment</Link></li>
                                <li><Link href={'/contactus'}>• Component Testing</Link></li>
                                <li><Link href={'/contactus'}>• Environmental Monitoring</Link></li>
                                <li><Link href={'/contactus'}>• Frequency Counters</Link></li>
                                <li><Link href={'/contactus'}>• Measuring Instruments</Link></li>
                                <li><Link href={'/contactus'}>• Multimeters</Link></li>
                                <li><Link href={'/contactus'}>• Oscilloscopes</Link></li>
                                <li><Link href={'/contactus'}>• Protective Equipment</Link></li>
                                <li><Link href={'/contactus'}>• Signal Generation Analysis</Link></li>
                                <li><Link href={'/contactus'}>• Test Equipment</Link></li>
                            </ul>

                        </div>
                        <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center ">
                                Electronic Components
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Adhesives & Sealent</Link></li>
                                <li><Link href={'/contactus'}>• Audio Visual Equipment</Link></li>
                                <li><Link href={'/contactus'}>• Automation & Process Contro</Link></li>
                                <li><Link href={'/contactus'}>• Batteries & Chargers</Link></li>
                                <li><Link href={'/contactus'}>• Books</Link></li>
                                <li><Link href={'/contactus'}>• Buzzer & Sounders</Link></li>
                                <li><Link href={'/contactus'}>• Capacitors</Link></li>
                                <li><Link href={'/contactus'}>• Circuit Breakers</Link></li>
                                <li><Link href={'/contactus'}>• Connectors</Link></li>
                                <li><Link href={'/contactus'}>• DC to DC Converters</Link></li>
                                <li><Link href={'/contactus'}>• Diodes</Link></li>
                                <li><Link href={'/contactus'}>• EMC, Filter & Suppression</Link></li>
                                <li><Link href={'/contactus'}>• Enclosures - Boxes & Racking </Link></li>
                                <li><Link href={'/contactus'}>• Encoders</Link></li>
                                <li><Link href={'/contactus'}>• Fans & Blowers </Link></li>
                                <li><Link href={'/contactus'}>• Filters & Suppression </Link></li>
                                <li><Link href={'/contactus'}>• Fuse & Fuse Holders </Link></li>
                                <li><Link href={'/contactus'}>• Fasteners </Link></li>
                                <li><Link href={'/contactus'}>• Gears- Control Switch  </Link></li>
                                <li><Link href={'/contactus'}>• Global Positioning System  </Link></li>


                            </ul>

                        </div>
                        <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60  ">
                            <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center ">
                                Electronic Components
                            </h2>
                            <div className="flex mt-2 justify-center mb-12">
                                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
                            </div>
                            <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black  '>
                                <li><Link href={'/contactus'}>• Embedded Solution</Link></li>
                                <li><Link href={'/contactus'}>• IGBT Modules </Link></li>
                                <li><Link href={'/contactus'}>• Inductors & Chokes  </Link></li>
                                <li><Link href={'/contactus'}>• Labeling & Marking  </Link></li>
                                <li><Link href={'/contactus'}>• Motors - AC & DC </Link></li>
                                <li><Link href={'/contactus'}>• Optoelectronics & Displays </Link></li>
                                <li><Link href={'/contactus'}>• Panel Meters </Link></li>
                                <li><Link href={'/contactus'}>• PLCs & Industrial Computing </Link></li>
                                <li><Link href={'/contactus'}>• Power Supplies</Link></li>
                                <li><Link href={'/contactus'}>• Pneumatics</Link></li>
                                <li><Link href={'/contactus'}>• Relays & Solenoids</Link></li>
                                <li><Link href={'/contactus'}>• Resistors & Potentiometers</Link></li>
                                <li><Link href={'/contactus'}>• Semiconductors</Link></li>
                                <li><Link href={'/contactus'}>• Sensors & Transducers</Link></li>
                                <li><Link href={'/contactus'}>• Soldering Equipment</Link></li>
                                <li><Link href={'/contactus'}>• Storage Systems</Link></li>
                                <li><Link href={'/contactus'}>• Switches</Link></li>
                                <li><Link href={'/contactus'}>• Test & Measuring Equipment</Link></li>
                                <li><Link href={'/contactus'}>• Tools</Link></li>
                                <li><Link href={'/contactus'}>• Transformers</Link></li>
                                <li><Link href={'/contactus'}>• Wireless Communication</Link></li>
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
                <Image src={'/assest/logo-01.jpg'} alt='' width={1500} height={1500} className='items-center justify-center text-center' />
            </div>

            <br /><br />


        </div>
    )
}

export default Electronic