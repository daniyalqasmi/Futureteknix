import Image from 'next/image'
import React from 'react'

const Overview = () => {
    return (
        <div id='Overview'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <h1 className="scroll-m-20  font-extrabold tracking-tight lg:text-4xl mb-4 md:text-3xl  sm:text-2xl text-4xl capitalize text-center text-myblue">
                            Overview
                        </h1>
                        <div className="flex mt-2 justify-center">
                            <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">

                                <div className="flex flex-col items-start text-start justify-start">
                                    <h2 className="scroll-m-20  pb-2 text-5xl font-semibold   first:mt-0 text-myred mt-2 mb-3">
                                        200,000+
                                    </h2>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight text-myblue">
                                        Electronic Components
                                    </p>
                                    <div className="w-full h-1 bg-myredDark rounded mt-2 mb-4" />
                                    <h2 className="scroll-m-20  pb-2 text-5xl font-semibold   first:mt-0 text-myred mt-2 mb-3">
                                        100+
                                    </h2>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight text-myblue">
                                        Industry Solutions
                                    </p>
                                    <div className="w-full h-1 bg-myredDark rounded mt-2 mb-4" />
                                    <h2 className="scroll-m-20  pb-2 text-5xl font-semibold   first:mt-0 text-myred mt-2 mb-3">
                                        10,000 +
                                    </h2>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight text-myblue">
                                        Networking Products
                                    </p>
                                    <div className="w-full h-1 bg-myredDark rounded mt-2 mb-4" />
                                    <h2 className="scroll-m-20  pb-2 text-5xl font-semibold  first:mt-0 text-myred mt-2 mb-3">
                                        500 +
                                    </h2>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight text-myblue">
                                        Manufacturers
                                    </p>
                                    <div className="w-full h-1 bg-myredDark rounded mt-2 mb-4" />
                                    <h2 className="scroll-m-20  pb-2 text-5xl font-semibold  first:mt-0 text-myred mt-2 mb-3">
                                        16+
                                    </h2>
                                    <p className="scroll-m-20 text-xl font-semibold tracking-tight text-myblue">
                                        Telecom Solutions
                                    </p>
                                    <div className="w-full h-1 bg-myredDark rounded mt-2 mb-4" />
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-myblueDark sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-7 [&:not(:first-child)]:mt-6 text-myblue">
                                    Futureteknix focuses on delivering innovative products and solutions. Futureteknix prides itself in developing
                                    ground-breaking technologies that speed deployments and pave the way for tomorrows next generation networks.
                                    Futureteknix help customers connect, protect and manage networks quickly and at the lowest possible cost  without
                                    any sacrifice in quality and reliability. Futureteknix is an industry leading end-to-end technology infrastructure company that
                                    to align with the needs of every customer. With our broad portfolio of solutions, years of experience, and extensive
                                    technical support, Futureteknix can design, install, and maintain the right solutions for your business.
                                    <br />
                                    <br />
                                    Our corporate ethos stems from several principles that have guided us throughout our over 19 years of experience in the industry:
                                    <br /><br />
                                    • Customer-centricity  Be a reliable partner to our customers, facilitating the growth of their business.
                                    <br /><br />
                                    • Innovation and flexibilityBring cutting-edge technologies to market and adopt quickly to our customers needs.
                                    <br /><br />
                                    • Creative problem solvingProvide solutions that meet business objective of our customers, rather than just selling
                                    devices.
                                    <br /><br />
                                    • Quality and reliability  Ensure the highest quality and level of reliability of our products, which is essential in
                                    establishing long-term relationships with our customers.
                                    <br /><br />
                                    In addition to our Technology business, Futureteknix has made several strategic investments in
                                    <span className='font-bold'>“Electronic Components”</span>
                                    that Expanding our corporate activities on a global scale.
                                </p>


                            </div>

                        </div>
                        <div>
                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-wrap -m-4">
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden w-60">
                                                <Image src={"/assest/ELECTRONICcop-01-01.png"}
                                                    alt="sandwich"
                                                    width={450}
                                                    height={450}
                                                    className="rounded-xl duration-500 group-hover:scale-125"
                                                />
                                                <div className="p-6">
                                                    <h1 className="tscroll-m-20 text-4xl font-extrabold tracking-tight lg:text-lg mb-1 text-myblue">
                                                        ELECTRONIC COMPONENTS
                                                    </h1>

                                                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
                                                        We provide products, services
                                                        and solutions to industrial and
                                                        commercial users of electronic
                                                        components and enterprise
                                                        computing solutions. Futureteknix
                                                        serves as a supply channel partner
                                                        for over 200,000 original
                                                        equipment manufacturers,
                                                        contract manufacturers and
                                                        commercial customers through a
                                                        global network of more than 460
                                                        locations in 56 countries.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <Image src={"/assest/IT-01.png"}
                                                    alt="sandwich"
                                                    width={450}
                                                    height={450}
                                                    className="rounded-xl duration-500 group-hover:scale-125"
                                                />
                                                <div className="p-6">
                                                    <h1 className="tscroll-m-20 text-4xl font-extrabold tracking-tight lg:text-lg mb-1 text-myblue">
                                                        I.T
                                                        INFRASTRUCTURE
                                                    </h1>
                                                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
                                                        We are leading provider of IT
                                                        Infrastructure solutions. Our
                                                        services are engineered to
                                                        improve your existing IT
                                                        infrastructure and help you align
                                                        your business objectives with IT
                                                        strategies. With our extensive
                                                        industry expertise and best
                                                        practices with global clients, we
                                                        will make your business stronger
                                                        and enhance your business
                                                        processes
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-4 md:w-1/3  ">
                                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <Image src={"/assest/tele-01.png"}
                                                    alt="sandwich"
                                                    width={450}
                                                    height={450}
                                                    className="rounded-xl duration-500 group-hover:scale-125"
                                                />
                                                <div className="p-6">
                                                    <h1 className="tscroll-m-20 text-4xl font-extrabold tracking-tight lg:text-lg mb-1 text-myblue">
                                                        TELECOM
                                                        SOLUTIONS

                                                    </h1>
                                                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-sm">
                                                        We provide telecom and data
                                                        solutions. Our Integrated
                                                        Communications Platform
                                                        utilizes a Next Generation
                                                        Network interconnected with
                                                        most major carriers capable of
                                                        providing a vast array of services
                                                        to businesses. Our integrated
                                                        approach has proven to increase
                                                        the efficiency, flexibility and
                                                        security while reducing cost and
                                                        complexity
                                                    </p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Overview