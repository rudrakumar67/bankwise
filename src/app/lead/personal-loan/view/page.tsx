
import { ArrowsRightLeftIcon, BuildingLibraryIcon, ChartPieIcon, DocumentDuplicateIcon, EnvelopeIcon, PhoneIcon, QueueListIcon, UserCircleIcon, UserIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import Image from "next/image";
const View: NextPage = () => {
    return (
        <>
            <div className="bg-white sticky">
                <div className="text-black w-full bottom-[calc(100vh-theme(spacing.16))] left-0 right-0 top-0 sticky ">
                    <div className="flex justify-end  bg-slate-200 py-2 rounded-t px-3">
                        <div className="flex h-8 my-auto">
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d '}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Call Customer</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Email</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Add Task</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Share Link</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Notify</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Check Eligibility</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex fixed h-screen text-black w-auto">
                    <div className="sticky bg-gray-100 p-4 w-60">
                        {/* Left Side (Fixed) */}
                        <div className="overflow-y-auto">
                        <div className="text-black">
                            <div className="grid border-b border-slate-300">
                                <div className=" grid pb-2">
                                    <span className="text-xs pb-2" style={{color:'#12344d'}}>Lead ID : <b>BWLPL12345</b></span>
                                    <span className="font-semibold text-sm" style={{color:'#12344d'}}>Shivkumar Shivkumar Acharya</span>
                                    <span className="text-xs" style={{color:'#12344d'}}>Business Development Manger</span>
                                </div>
                                <div className="grid py-3 gap-2">
                                    <span className="text-xs flex" style={{color:'#2058dc'}}>
                                    <PhoneIcon className="h-4 pr-2" color="#2058dc"/>
                                        +91 1234567890
                                    </span>
                                    <span className="text-xs flex" style={{color:'#2058dc'}}>
                                    <EnvelopeIcon className="h-4 pr-2" color="#2058dc"/>
                                        acharyashivkumar67@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div className="grid py-4 bg-white p-3 rounded mt-2">
                                <ul className="text-black text-xs">
                                    <li className="pb-0.5">
                                        <div className="flex justify-between">
                                            <span>Product Type :</span> <span className="font-semibold">Top Up</span>
                                        </div>
                                    </li>
                                    <li className="pb-0.5">
                                        <div className="flex justify-between">
                                            <span>Loan Type :</span> <span className="font-semibold">Personal Loan</span> 
                                        </div>
                                    </li>
                                    <li className="pb-0.5">
                                        <div className="flex justify-between">
                                            <span>Required Loan Amount :</span> <span className="font-semibold">500000</span>
                                        </div>
                                    </li>
                                    <li className="pb-0.5">
                                        <div className="flex justify-between">
                                            <span>Monthly Income :</span> <span className="font-semibold">25000</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="grid py-4 bg-white p-3 rounded mt-2">
                                <span className="pb-2 font-medium text-xs">
                                    Applicant Details
                                </span>
                                <ul className="text-black">
                                    <li className="py-3 border-b border-slate-300">
                                        <span className="flex" style={{color:'#2e4374'}}>
                                            <ChartPieIcon className="h-5 my-auto pr-3 pl-1" />
                                            Overview
                                        </span>
                                    </li>
                                    <li className="py-3 border-b border-slate-300">
                                        <span className="flex" style={{color:'#2e4374'}}>
                                            <UserIcon className="h-5 my-auto pr-3 pl-1" />
                                            Basic Details
                                        </span>
                                    </li>
                                    <li className="py-3 border-b border-slate-300">
                                        <span className="flex" style={{color:'#2e4374'}}>
                                            <QueueListIcon className="h-5 my-auto pr-3 pl-1" />
                                            Obligation
                                        </span>
                                    </li>
                                    <li className="py-3 border-b border-slate-300">
                                        <span className="flex" style={{color:'#2e4374'}}>
                                            <ArrowsRightLeftIcon className="h-5 my-auto pr-3 pl-1" />
                                            Follow Ups
                                        </span>
                                    </li>
                                    <li className="py-3 border-b border-slate-300">
                                        <span className="flex" style={{color:'#2e4374'}}>
                                            <DocumentDuplicateIcon className="h-5 my-auto pr-3 pl-1" />
                                            Documents
                                        </span>
                                    </li>
                                    <li className="py-3">
                                        <span className="flex" style={{color:'#2e4374'}}>
                                            <BuildingLibraryIcon className="h-5 my-auto pr-3 pl-1" />
                                            Bank Logins
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="p-4 max-w-fit w-screen">
                        {/* Right Side (Scrollable) */}
                        <div className="h-screen overflow-y-auto max-w-prose w-screen">
                            <h2 className="text-xl font-bold mb-4">Right Side (Scrollable)</h2>
                            <div>
                                <h2 className="sr-only">Steps</h2>

                                <div
                                    className="after:mt-4 after:block after:h-1 after:w-full after:rounded-lg after:bg-gray-200"
                                >
                                    <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">
                                    <li className="relative flex justify-start text-blue-600">
                                        <span
                                        className="absolute -bottom-[1.75rem] start-0 rounded-full bg-blue-600 text-white"
                                        >
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                            />
                                        </svg>
                                        </span>

                                        <span className="hidden sm:block"> Details </span>

                                        <svg
                                        className="h-6 w-6 sm:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                        />
                                        </svg>
                                    </li>

                                    <li className="relative flex justify-center text-blue-600">
                                        <span
                                        className="absolute -bottom-[1.75rem] left-1/2 -translate-x-1/2 rounded-full bg-blue-600 text-white"
                                        >
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                            />
                                        </svg>
                                        </span>

                                        <span className="hidden sm:block"> Address </span>

                                        <svg
                                        className="mx-auto h-6 w-6 sm:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        </svg>
                                    </li>

                                    <li className="relative flex justify-end">
                                        <span
                                        className="absolute -bottom-[1.75rem] end-0 rounded-full bg-gray-600 text-white"
                                        >
                                        <svg
                                            className="h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                            />
                                        </svg>
                                        </span>

                                        <span className="hidden sm:block"> Payment </span>

                                        <svg
                                        className="h-6 w-6 sm:hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                        />
                                        </svg>
                                    </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View