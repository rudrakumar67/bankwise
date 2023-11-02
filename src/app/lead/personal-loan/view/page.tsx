'use client'
import { ArrowsRightLeftIcon, BellAlertIcon, BuildingLibraryIcon, CalculatorIcon, ChartPieIcon, ChatBubbleBottomCenterIcon, DocumentDuplicateIcon, EnvelopeIcon, PencilIcon, PencilSquareIcon, PhoneIcon, QueueListIcon, UserCircleIcon, UserIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/tooltip";
// import {Accordion, AccordionItem} from "@nextui-org/accordion";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { NextPage } from "next";
import Image from "next/image";
const View: NextPage = () => {
    const defaultContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    return (
        <>
            <div className="bg-white sticky">
                <div className="text-black w-full bottom-[calc(100vh-theme(spacing.16))] left-0 right-0 top-0 sticky ">
                    <div className="flex justify-end  bg-slate-200 py-2 rounded-t px-3">
                        <div className="flex h-8 my-auto">
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d '}}/>
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Call Customer</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Email</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Add Task</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Share Link</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Notify</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-semibold my-auto" style={{color:'#12344d'}}>Check Eligibility</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex text-black text-left">
                    <div className="w-72">
                        <div className="sticky bg-gray-100 p-4 w-full">
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
                    </div>
                    <div className="w-10/12">
                        <div className="">
                            <div>
                                <h2 className="sr-only">Steps</h2>

                                <div>
                                    <ol
                                    className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
                                    >
                                    <li className="flex items-center justify-center gap-2 p-4">
                                        <svg
                                        className="h-7 w-7 shrink-0"
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

                                        <p className="leading-none">
                                        <strong className="block font-medium"> Details </strong>
                                        <small className="mt-1"> Some info about you. </small>
                                        </p>
                                    </li>

                                    <li
                                        className="relative flex items-center justify-center gap-2 bg-gray-50 p-4"
                                    >
                                        <span
                                        className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 sm:block"
                                        >
                                        </span>

                                        <span
                                        className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-gray-100 ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white sm:block"
                                        >
                                        </span>

                                        <svg
                                        className="h-7 w-7 shrink-0"
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

                                        <p className="leading-none">
                                        <strong className="block font-medium"> Address </strong>
                                        <small className="mt-1"> Where we sending it? </small>
                                        </p>
                                    </li>

                                    <li className="flex items-center justify-center gap-2 p-4">
                                        <svg
                                        className="h-7 w-7 shrink-0"
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

                                        <p className="leading-none">
                                        <strong className="block font-medium"> Payment </strong>
                                        <small className="mt-1"> Show us the money. </small>
                                        </p>
                                    </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="h-screen overflow-y-auto w-full">
                            <Accordion isCompact>
                                <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
                                    {defaultContent}
                                </AccordionItem>
                                <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
                                {defaultContent}
                                </AccordionItem>
                                <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
                                {defaultContent}
                                </AccordionItem>
                            </Accordion>
                            </div>
                        </div>
                    </div>
                    <div className="w-12 bg-gray-100">
                        <ul className="py-3">
                            <Tooltip
                                showArrow={false}
                                content="Task" 
                                placement="left-start"
                                offset={7} 
                                closeDelay={0} 
                                classNames={{base: "text-white bg-theme rounded text-xs mr-2 py-0.5 px-2", arrow: "bg-blue-900 mr-2"}}>
                                <li className="hover:bg-slate-300 mx-1.5 p-2 rounded my-1.5 cursor-pointer">
                                    <PencilSquareIcon className="h-5 mx-auto"/>
                                </li>
                            </Tooltip>
                            <Tooltip
                                showArrow={false}
                                content="Comments" 
                                placement="left-start"
                                offset={7} 
                                closeDelay={0} 
                                classNames={{base: "text-white bg-theme rounded text-xs mr-2 py-0.5 px-2", arrow: "bg-blue-900 mr-2"}}>
                                    <li className="hover:bg-slate-300 mx-1.5 p-2 rounded my-1.5 cursor-pointer">
                                        <ChatBubbleBottomCenterIcon className="h-5 mx-auto"/>                                
                                    </li>
                            </Tooltip>
                            <Tooltip
                                showArrow={false}
                                content="Alerts" 
                                placement="left-start"
                                offset={7} 
                                closeDelay={0} 
                                classNames={{base: "text-white bg-theme rounded text-xs mr-2 py-0.5 px-2", arrow: "bg-blue-900 mr-2"}}>
                                    <li className="hover:bg-slate-300 mx-1.5 p-2 rounded my-1.5 cursor-pointer">
                                        <BellAlertIcon className="h-5 mx-auto"/>                                
                                    </li>
                            </Tooltip>
                            <Tooltip
                                showArrow={false}
                                content="EMI Calculator" 
                                placement="left-start"
                                offset={7} 
                                closeDelay={0} 
                                classNames={{base: "text-white bg-theme rounded text-xs mr-2 py-0.5 px-2", arrow: "bg-blue-900 mr-2"}}>
                                    <li className="hover:bg-slate-300 mx-1.5 p-2 rounded my-1.5 cursor-pointer">
                                        <CalculatorIcon className="h-5 mx-auto"/>                                
                                    </li>
                            </Tooltip>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View