'use client'
import { BellAlertIcon, BuildingLibraryIcon, CalculatorIcon, ChartPieIcon, ChatBubbleBottomCenterIcon, DocumentDuplicateIcon, EnvelopeIcon, PencilIcon, PencilSquareIcon, PhoneIcon, QueueListIcon, UserCircleIcon, UserIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/tooltip";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
const View: NextPage = () => {
    const itemClasses = {
        heading:'bg-gray-100 px-3 rounded m-1',
        title: 'text-sm font-semibold'
      };
    const [sideMenuItem, setsideMenuItem] = useState(1);
    return (
        <>
            <div className="bg-white h-screen">
                <div className="text-black w-full static">
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
                <div className="flex text-black">
                    <div className="w-80">
                        <div className="sticky bg-gray-100 p-4 w-full h-screen">
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
                                                    <span>CIBIL Score :</span> <span className="font-semibold">760</span>
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Lead Date</span> <span className="font-semibold">02-11-2023</span> 
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Created By :</span> <span className="font-semibold">Admin</span>
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Referred By :</span> <span className="font-semibold">None</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="grid py-4 bg-white p-3 rounded mt-2">
                                        <span className="pb-2 font-medium text-xs">
                                            Applicant Details
                                        </span>
                                        <ul className="text-black">
                                            <li className={`py-2.5 px-2 `+(
                                                sideMenuItem === 1
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(1)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <ChartPieIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Overview
                                                </span>
                                            </li>
                                            <li className={`py-2.5 px-2 `+(
                                                sideMenuItem === 2
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(2)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <UserIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Applicant Details
                                                </span>
                                            </li>
                                            <li className={`py-2.5 px-2 `+(
                                                sideMenuItem === 3
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(3)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <QueueListIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Obligation
                                                </span>
                                            </li>
                                            <li className={`py-2.5 px-2 `+(
                                                sideMenuItem === 4
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(4)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <DocumentDuplicateIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Documents
                                                </span>
                                            </li>
                                            <li className={`py-2.5 px-2 `+(
                                                sideMenuItem === 5
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(5)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
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
                    <div className="w-full p-3" id="content">
                        <div className="py-3">
                            <div className="overflow-y-auto">
                                <div className={sideMenuItem == 1 ? 'block' : 'hidden'}>
                                    <div className="text-black">
                                        Overview
                                    </div>
                                </div>
                                <div className={sideMenuItem == 2 ? 'block' : 'hidden'}>
                                    <Accordion isCompact itemClasses={itemClasses} variant="splitted" defaultExpandedKeys={["1"]}>
                                        <AccordionItem key="1" aria-label="Basic Details" title="Basic Details">
                                            <div className="grid grid-cols-4 gap-7 py-6 px-3 bg-white">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Full Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar acharya</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Phone Number</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>+91 9313536582</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Alt Phone Number</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>+91 9313536582</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Email Address</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>acharyashivkumar67@gmail.com</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Date of Birth</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>89-96-2001</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Gender</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Male</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Marital Status</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Single</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>PAN Number</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>ASSD1212A</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Mother Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Mother Name</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Father Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Father Name</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>City of Residence</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>City Name</span>
                                                </p>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="2" aria-label="Loan Requirements" title="Loan Requirements">
                                            <div className="grid grid-cols-4 gap-7 py-6 px-3 bg-white">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Loan Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Personal Loan</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Product Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Fresh Loan</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Required Loan</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>500000</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Loan Purpose</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Marriage</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>CIBIL Score</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>89-96-2001</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Any CIBIL Issues </span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Yes/no</span>
                                                </p>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="3" aria-label="Employment Information" title="Employment Information">
                                            <div className="grid grid-cols-4 gap-7 py-6 px-3 bg-white">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Employment Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Full Time</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Company Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Abc pvt ltd.</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Designation</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>BDM</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Department</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Admin</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Gross Salary</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>25000</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Net Salary</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>30000</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Salary Bank Account</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>HDFC</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Working Since</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>2021</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Total Experince</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>5 yr</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Official Email Id</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Admin@gmail.com</span>
                                                </p>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="4" aria-label="Address Details" title="Address Details">
                                            <span className="text-sm font-semibold px-4">Residence Address</span>
                                            <div className="grid grid-cols-4 gap-7 py-6 px-3 bg-white">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Resident Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Own House</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Street Address</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Block 1 </span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Address 2</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Main road</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Area</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>HRBR Layout</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Pincode</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>560022</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>City</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>BLR</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Landmark </span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>NONE</span>
                                                </p>
                                            </div>
                                            <span className="text-sm font-semibold px-4">Office Address</span>
                                            <div className="grid grid-cols-4 gap-7 py-6 px-3 bg-white">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Resident Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Own House</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Street Address</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Block 1 </span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Address 2</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Main road</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Area</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>HRBR Layout</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Pincode</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>560022</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>City</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>BLR</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Landmark </span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>NONE</span>
                                                </p>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="5" aria-label="References" title="References">
                                            <span></span>
                                            <div className="grid grid-cols-3 gap-7 py-6 px-3 bg-white">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Full Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar acharya</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Phone Number</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>+91 9313536582</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Address</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>No 71, 8th Block, Babusapalya, Bangalore, 560073</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Full Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar acharya</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Phone Number</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>+91 9313536582</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Address</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>No 71, 8th Block, Babusapalya, Bangalore, 560073</span>
                                                </p>
                                            </div>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                                <div className={sideMenuItem == 3 ? 'block' : 'hidden'}>
                                    <div className="text-black">
                                        Obligation
                                    </div>
                                </div>
                                <div className={sideMenuItem == 4 ? 'block' : 'hidden'}>
                                    <div className="text-black">
                                        Documents
                                    </div>
                                </div>
                                <div className={sideMenuItem == 5 ? 'block' : 'hidden'}>
                                    <div className="text-black">
                                        Bank Logins
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-16 bg-gray-100">
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