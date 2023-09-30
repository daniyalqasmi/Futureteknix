import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = () => {
  return (
    <div className='mb-28'>
      <div className="mb-[100px] mt-[100px]" id="Product">
        <div className="text-center mb-15 mt-16  ">
          <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl mb-4 md:text-3xl  sm:text-xl text-4xl text-mylogo capitalize text-center text-myblue">
            OUR PRODUCTS
          </h1>
          <div className="flex mt-2 justify-center mb-12">
            <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 mt-10 mr-20 ml-20 gap-x-0">
          {/*ELECTRONIC COMPONENTS*/}
          <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/electronic"}>
              <Image src={"/assest/electronic-02.jpg"}
                alt="sandwich"
                width={450}
                height={450}
                className="rounded-xl duration-500 group-hover:scale-125"
              />

              <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">ELECTRONIC COMPONENTS</h1>
              </div>
              <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">ELECTRONIC COMPONENTS</h1>
              </div>
            </Link>
          </div>
          {/* I.T INFRASTRUCTURE
          <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/I.T INFRASTRUCTURE"}>
              <Image src={"/assest/it-02.jpg"}
                alt="sandwich"
                width={450}
                height={450}
                className="rounded-xl duration-500 group-hover:scale-125"
              />

              <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">I.T INFRASTRUCTURE</h1>
              </div>
              <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">I.T INFRASTRUCTURE</h1>
              </div>
            </Link>
          </div>
          TELECOM SOLUTIONS
          <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/Oil_Gas"}>
              <Image src={"/assest/Telecom-03.jpg"}
                alt="sandwich"
                width={450}
                height={450}
                className="rounded-xl duration-500 group-hover:scale-125"
              />

              <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">TELECOM SOLUTIONS</h1>
              </div>
              <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">TELECOM SOLUTIONS</h1>
              </div>
            </Link>
          </div> */}
          {/* OIL & GAS */}
          <div className="mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative">
            <Link href={"/oil"}>
              <Image src={"/assest/oil-04.jpg"}
                alt="desserts"
                width={450}
                height={450}
                className="rounded-xl duration-500 group-hover:scale-125"
              />

              <div className="hidden lg:block absolute -bottom-25 group-hover:bottom-0 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">OIL & GAS</h1>
              </div>
              <div className="block lg:hidden absolute bottom-3 duration-500 scroll-m-20 text-xl font-bold tracking-tight  bg-myblue/70 text-center text-white w-full">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-2xl uppercase">OIL & GAS</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <section className="text-gray-600 body-font">


          <div className="text-center  mt-16  ">
            <h1 className="scroll-m-20  font-bold tracking-tight lg:text-4xl  md:text-3xl  sm:text-xl text-4xl text-mylogo capitalize text-center text-myblue">
              OUR SERVICES
            </h1>
            <div className="flex mt-2 justify-center mb-12">
              <div className="w-48 h-1 rounded-full bg-myred inline-flex" />
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
              <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                DATA CENTER
              </h2>
              <div className="flex mt-2 justify-center mb-12">
                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
              </div>
              <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black ml-8 '>
                <li>01) Enterprise Servers</li>
                <li>02) Blade Servers</li>
                <li>03) UCS</li>
                <li>04) Switching & Routing</li>
                <li>05) Security</li>
                <li>06) Management</li>
                <li>07) Storage</li>
                <li>08) Networking</li>
                <li>09) Operating Systems</li>
                <li>10) Cabling</li>
                <li>11) Monitoring</li>
                <li>12) VoIP</li>
              </ul>
             
            </div>
            <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
              <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                STRUCTURED CABLING
              </h2>
              <div className="flex mt-2 justify-center mb-12">
                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
              </div>
              <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black ml-8 '>
                <li>01) Copper Cabling</li>
                <li>02) Fiber Cabling</li>
                <li>03) Imported Server & Network</li>
                <li>04) Racks</li>
                <li>05) Cable Management Products</li>
                <li>06) Voice & Data Outlets</li>
                <li>07) Fiber Odfs</li>
                <li>08) Voice And Data Patch Panels</li>
                <li>09) Patch Cords</li>
                <li>10) Single Mode And Multimode</li>
                <li>11) Fiber Indoor And Out Door</li>
                <li>12) Fiber Connectors</li>
                <li>13) Tools And Testing Equipment</li>
              </ul>
              
            </div>

            <div className="xl:w-1/3 lg:w-1/3 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60 ">
              <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight  first:mt-0 mb-2 text-myred text-center justify-center">
                Tools And Testing
                Equipment
              </h2>
              <div className="flex mt-2 justify-center mb-12">
                <div className="w-48 h-1 rounded-full bg-myblue inline-flex" />
              </div>
              <ul className='leading-7 [&:not(:first-child)]:mt-6 text-black ml-8 '>
                <li>01) Workstations</li>
                <li>02) Servers</li>
                <li>03) Storage Servers</li>
                <li>04) Network Attached Servers</li>
                <li>05) Personal Computer Systems</li>
                <li>06) Laptopst</li>
                <li>07) Thin Client</li>
                <li>08) Printing Solutions</li>
              </ul>
             
            </div>
          </div>


        </section>


      </div>
    </div>


  )
}

export default Product