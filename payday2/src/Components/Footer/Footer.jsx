import React from "react";


function Footer() {
    return (
        <>



            <footer class="bg-white md:px-12 lg:px-24 relative z-90 dark:bg-gray-900 md:justify-center gap-10 lg:gap-0  items-center  lg:items-start lg:justify-between  flex flex-col lg:flex-row ">
                <div className=" pt-8 w-[180px]">
                    <img src="./img/llogo.png" alt="logo" title="PayDay" className=" w-[180px]" />
                </div>

                <div class="grid grid-cols-2 gap-[50px]   lg:gap-32 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 class=" font-Montserrat  mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white ">Company</h2>
                        <ul class=" font-Varela text-gray-500 dark:text-gray-400 text-seconday font-medium">
                            <li class="mb-4">
                                <a href="#" class=" hover:underline">About</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Careers</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Brand Center</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class=" font-Montserrat  mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Help center</h2>
                        <ul class=" font-Varela text-gray-500 dark:text-gray-400 text-seconday font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Discord Server</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Twitter</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Facebook</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class=" font-Montserrat  mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class=" font-Varela text-gray-500 dark:text-gray-400 text-seconday font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Licensing</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 class=" font-Montserrat  mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Download</h2>
                        <ul class=" font-Varela text-gray-500 dark:text-gray-400 text-seconday font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">iOS</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Android</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Windows</a>
                            </li>
                            <li class="mb-4">
                                <a href="#" class="hover:underline">MacOS</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

            <div class="py-2 flex justify-center item-center font-Montserrat  border-t-[1px] border-[#6c6c6c5e] ">
                <span class="  text-gray-500 dark:text-gray-300 text-center">© 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
                </span>
            </div>


        </>
    )
}


export default Footer;