

export default function Contactus() {
    return (
        <div><div id="contact" className="pl-18  ">
            <section className=" body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2= rounded-xl overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border-solid border-2 border-myblueDark pb-8">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2488.300937870174!2d-0.12538132393493723!3d51.41589831738447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760696b2c122ad%3A0xf9dfb337ef36cfa1!2s13%20Strathbrook%20Rd%2C%20London%20SW16%203AT%2C%20UK!5e0!3m2!1sen!2s!4v1694279936246!5m2!1sen!2s"
                            style={{ filter: " contrast(1.2) opacity(0.4)" }}
                        />
                        <div className="bg-mybg relative flex flex-wrap py-6 rounded shadow-md border-solid border-2 border-myblueDark bg-opacity-color-20">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-extrabold text-myred tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1 text-myblue">
                                    13 Strathbrook Road
                                    London SW16 3AT
                                    United Kingdom
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-extrabold text-myred tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-myblue p-500 leading-relaxed">aftab.qureshi@futureteknix.com</a>
                                <h2 className="title-font font-extrabold text-myred tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-myblue ">+44 (0) 785 2122 339</p>
                                <p className="leading-relaxed text-myblue ">+44 (0) 208 1443 090</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-mybg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border-solid border-2 rounded-xl  border-myblueDark pl-3 pr-3 ">
                        <h2 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-myred">
                            Contact
                        </h2>
                        <p className="leading-relaxed mb-5 text-myblue p-600">
                            feel free to Contact
                        </p>
                        <form action="https://formspree.io/f/xdorpeav"
                            method="POST">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-myred p-600  hover:text-mylogo">
                                    Name
                                </label >
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-myred p-600  hover:text-mylogo">
                                    Email
                                </label >
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="subject" className="leading-7 text-sm text-myred p-600  hover:text-mylogo">
                                    Subject
                                </label >
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    required
                                />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-myred p-600 hover:text-mylogo">
                                    Message
                                </label >
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-mylogo rounded border border-myredDark focus:border-myredDark focus:ring-2 focus:ring-myred text-base outline-none text-myblue p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-myblueDark"
                                    defaultValue={""}
                                    required
                                />

                            </div>

                            <button className="text-mywhite bg-myblueDark border-0 py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg font-bold">
                                Send Message
                            </button>
                        </form>

                    </div>
                </div>
            </section>

        </div>
        </div>

    )
}