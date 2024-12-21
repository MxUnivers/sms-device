import React from 'react'

const ProfileAccount = () => {
    return (
        <div
            className="dashboard-content transition-all duration-200 dark:bg-background lg:ml-64 ml-0 mt-20 min-h-[calc(100vh-80px)] p-7">
            <section className="dark:bg-background">
                <div className="container mx-auto">
                    <div className="flex text-gray-400 text-sm items-center mb-4">
                        <a href="#" className="font-medium text-gray-700 dark:text-gray-200"> Dashboard </a>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewbox="0 0 24 24" stroke="currentColor"
                            stroke-width="2" className="w-3 h-3 mx-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path>
                        </svg> <span>My Profile </span>
                    </div>
                    <div className="bg-white shadow-front-2 dark:bg-foreground rounded-lg p-6">
                        <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold"> Profile Details </h4>
                        <div className="flex justify-center mb-12">
                            <label for="profileUpload" className="cursor-pointer relative">
                                <img className="w-48 h-48 rounded-full" src="assets/img/faces/5.jpg" alt=""/>
                                    <label for="profileUpload"
                                        className="flex items-center cursor-pointer justify-center mx-auto font-medium text-gray-700 dark:text-gray-300 dark:bg-gray-800 bg-gray-200 px-3 py-2 rounded-lg -mt-3 relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-5 w-5 mr-2" viewbox="0 0 24 24"
                                            stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z">
                                            </path>
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg> Upload Photo </label>
                                    <input id="profileUpload" type="file" className="hidden"/>
                                    </label>
                                </div>
                                <h4 className="text-gray-700 dark:text-gray-300 text-xl font-semibold mb-7"> Personal Information </h4>
                                <div className="grid lg:grid-cols-2 gap-7">
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Name</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="name"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Title</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="title"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Email</label>
                                        <input type="email"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="Email"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Address</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="Address"/>
                                    </div>
                                    <div className="col-span-2">
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Bio</label>
                                        <textarea
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            id="exampleFormControlTextarea1" rows="5" placeholder="Your message"></textarea>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Email</label>
                                        <input type="email"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="Email"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Address</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="Address"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Email</label>
                                        <input type="email"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="Email"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Wbsite</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="website"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Twitter</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="twitter"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Facebook</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="Facebook"/>
                                    </div>
                                    <div>
                                        <label for="" className="text-base text-gray-700 dark:text-gray-200 block mb-3">Linkedin</label>
                                        <input type="text"
                                            className="border border-gray-200 dark:border-gray-800 text-sm dark:text-gray-300 rounded px-4 dark:bg-foreground py-[15px] shadow-input hover:border hover:border-blue-200 focus:border-blue-200 focus:outline-none w-full mb-4"
                                            placeholder="Linkedin"/>
                                    </div>
                                    <div className="col-span-2 flex flex-wrap items-center">
                                        <button type="button"
                                            className="bg-blue-500 hover:bg-blue-600 rounded-lg text-white px-10 py-2.5 mr-3 mb-4"> Save </button>
                                        <button type="button"
                                            className="border border-gray-200 rounded-lg text-gray-500 dark:text-gray-300 mb-4 dark:border-gray-800 px-10 py-[9px] mr-3">
                                            Cancel </button>
                                    </div>
                                </div>
                        </div>
                    </div>
            </section>
        </div>
    )
}

export default ProfileAccount