'use client'
import { ArrowUpOnSquareIcon, BanknotesIcon, BellAlertIcon, BuildingLibraryIcon, CalculatorIcon, ChartPieIcon, ChatBubbleBottomCenterIcon, ChevronLeftIcon, CloudArrowUpIcon, DocumentDuplicateIcon, DocumentTextIcon, EnvelopeIcon, GiftIcon, InboxArrowDownIcon, PencilIcon, PencilSquareIcon, PhoneIcon, QueueListIcon, TrashIcon, UserCircleIcon, UserIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
// import {CloudArrowUpIcon } from '@heroicons/react/solid'
import { Tooltip } from "@nextui-org/tooltip";
import {Accordion, AccordionItem, Chip} from "@nextui-org/react";
import {  Modal,   ModalContent,   ModalHeader, Button,  ModalBody,   ModalFooter, useDisclosure} from "@nextui-org/react";
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import Select from "react-tailwindcss-select";
import Link from "next/link";
const View: NextPage = () => {
    const itemClasses = {
        heading:'bg-gray-100 px-3 rounded m-1',
        title: 'text-sm font-semibold text-[#12344d]'
      };
    const [sideMenuItem, setsideMenuItem] = useState(1);
    const [openList, setOpenList] = useState(1);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>            
            <div className="bg-white h-full overflow-hidden">
                <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                    {(onClose) => (
                        <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                            <p> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nullam pulvinar risus non risus hendrerit venenatis.
                            Pellentesque sit amet hendrerit risus, sed porttitor quam.
                            </p>
                            <p>
                            Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                            dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. 
                            Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. 
                            Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur 
                            proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                            </p>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                            Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                            Action
                            </Button>
                        </ModalFooter>
                        </>
                    )}
                    </ModalContent>
                </Modal>
                <div className="text-black w-full static">
                    <div className="flex justify-between bg-slate-200 py-2 rounded-t px-3 static">
                        <div className="my-auto" style={{color:'#2058dc'}}>
                            <div className="flex">
                                <ChevronLeftIcon className="h-3 my-auto mr-1"/>
                                <span className="text-sm font-semibold">Go Back</span>
                            </div>
                        </div>
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
                <div className="flex text-black h-screen max-h-fit">
                    <div className="w-80 bg-gray-100 overflow-y-scroll h-screen">
                        <div className="sticky p-4 w-full">
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
                                                    <span>Loan Type :</span> <span className="font-semibold">Personal Loan</span> 
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Product Type :</span> <span className="font-semibold">Fresh Loan</span>
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Required Loan :</span> <span className="font-semibold">500000</span>
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Net Salary :</span> <span className="font-semibold">5000</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="grid py-4 bg-white p-3 rounded mt-2">
                                        <span className="pb-2 font-medium text-xs">
                                            Applicant Details
                                        </span>
                                        <ul className="text-black text-sm">
                                            <li className={`py-1.5 px-2 `+(
                                                sideMenuItem === 1
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(1)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <ChartPieIcon className="h-4 my-auto pr-3 pl-1" />
                                                    Overview
                                                </span>
                                            </li>
                                            <li className={`py-1.5 px-2 `+(
                                                sideMenuItem === 2
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(2)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <UserIcon className="h-4 my-auto pr-3 pl-1" />
                                                    Applicant Details
                                                </span>
                                            </li>
                                            <li className={`py-1.5 px-2 `+(
                                                sideMenuItem === 3
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(3)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <QueueListIcon className="h-4 my-auto pr-3 pl-1" />
                                                    Obligation
                                                </span>
                                            </li>
                                            <li className={`py-1.5 px-2 `+(
                                                sideMenuItem === 4
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(4)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <DocumentDuplicateIcon className="h-4 my-auto pr-3 pl-1" />
                                                    Documents
                                                </span>
                                            </li>
                                            <li className={`py-1.5 px-2 `+(
                                                sideMenuItem === 5
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(5)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <BuildingLibraryIcon className="h-4 my-auto pr-3 pl-1" />
                                                    Bank Logins
                                                </span>
                                            </li>
                                            <li className={`py-1.5 px-2 `+(
                                                sideMenuItem === 6
                                                ? "bg-gray-100 rounded"
                                                : "")} onClick={()=>{setsideMenuItem(6)}}>
                                                <span className="flex cursor-pointer" style={{color:'#2e4374'}}>
                                                    <BanknotesIcon className="h-4 my-auto pr-3 pl-1" />
                                                    Payout
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-3 py-1 h-full">
                        <div className="py-2">
                            <div className="">
                                <div className={sideMenuItem == 1 ? 'block h-screen max-h-max overflow-y-scroll pb-32' : 'hidden'}>
                                    <div className="text-black">
                                        <div className="font-semibold py-2">Overview</div>
                                        <ul className="flex gap-4">
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-[#d2e0fb] rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-[#d2e0fb]">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-[#d2e0fb] rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-[#d2e0fb]">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-slate-200 rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-slate-200">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-slate-200 rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-slate-200">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-slate-200 rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-slate-200">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pt-6 px-3 bg-white border border-slate-200 mt-4 rounded">
                                            <div className="grid grid-cols-4 gap-5">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Lead Date</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>07-23-2023</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Created By</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar Acharya</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Referred By</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Lead Age</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>180 Days</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Applicant Age</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>24 Years</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Marital Status</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Single</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Employment Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Full Time</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Company Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>TCL Technologies Pvt Ltd</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Company Listing</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Listed</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Gross Salary</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>24000</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Total Experience</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>5 Years</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Residence Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Own House</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>No. of Obligations</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>3 Loans</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Any CIBIL Issues</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Yes</span>
                                                </p>
                                            </div>
                                            <div className="flex justify-end px-3 py-3 text-[#2058dc]">
                                                <span className="py-1 px-4 bg-slate-100 rounded text-xs font-semibold">
                                                    More Details
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border border-slate-200 mt-4 rounded">
                                            <div className="grid grid-cols-8 gap-x-7 py-6 px-3 bg-white gap-y-2">
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs pb-1" style={{color:'#12344d'}}>Last Follow Up</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs pb-1" style={{color:'#12344d'}}>Follow Up By</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-4">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs pb-1" style={{color:'#12344d'}}>Comments</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>08-11-2022/12:22 AM</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">                                            
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar Acharya</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-4">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>08-11-2022/12:22 AM</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">                                            
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar Acharya</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-4">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end px-3 pb-3 text-[#2058dc]">
                                                <span className="py-1 px-4 bg-slate-100 rounded text-xs font-semibold">
                                                    More Follow Ups
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border border-slate-200 mt-4 pt-6 px-3">
                                            <div className="grid grid-cols-6 gap-y-4 rounded">
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Bank Name</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Loan Amount</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Login Date</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Bank RSM</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Loan Application #</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Status</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>HDFC Bank</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>500000</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>08-02-2023</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>Shivkumar</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>LOS12345</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>IN PROCESS</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>HDFC Bank</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>500000</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>08-02-2023</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>Shivkumar</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>LOS12345</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>IN PROCESS</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end px-3 py-3 text-[#2058dc]">
                                                <span className="py-1 px-4 bg-slate-100 rounded text-xs font-semibold">
                                                    More Details
                                                </span>
                                            </div>
                                        </div>
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
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Any Obligations</span>
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
                                    <div className="text-[#12344d] flex w-full flex-col" >
                                        <div>
                                            <div className="text-md font-medium" style={{color:'#2e4374'}}>
                                                    Obligations
                                            </div>
                                        </div>
                                        <Button onPress={onOpen}>Open Modal</Button>
                                    </div>
                                    <div>
                                        <div className="text-sm font-semibold py-2">
                                            Add Obligation
                                        </div>
                                        <div className="grid grid-cols-4 gap-2">
                                            <div className="grid">
                                                <input type="text" className="rounded border border-slate-200 placeholder:px-1" placeholder="Bank Name"/>
                                            </div>
                                            <div className="grid">
                                                <select name="" id="" className="w-full rounded border border-slate-200 text-sm">
                                                    <option value="">Loan Type</option>
                                                    <option value="">Personal Loan</option>
                                                    <option value="">Business Loan</option>
                                                </select>
                                            </div>
                                            <div className="grid">
                                                <input type="text" className="rounded border border-slate-200 placeholder:px-2" placeholder="Loan Amount"/>
                                            </div>
                                            <div className="grid">
                                                <input type="text" className="rounded border border-slate-200 placeholder:px-2" placeholder="ROI"/>
                                            </div>
                                            <div className="grid">
                                                <input type="text" className="rounded border border-slate-200 placeholder:px-1" placeholder="EMI"/>
                                            </div>
                                            <div className="grid">
                                                <input type="text" className="rounded border border-slate-200 placeholder:px-1" placeholder="Tenure"/>
                                            </div>
                                            <div className="grid">
                                                <input type="text" className="rounded border border-slate-200 placeholder:px-2" placeholder="EMI Paid"/>
                                            </div>
                                            <div className="grid">
                                                <input type="text" className="rounded border border-slate-200 placeholder:px-2" placeholder="Loan Outstanding"/>
                                            </div>
                                        </div>
                                        <div className="flex justify-end py-2">
                                            <button className="px-3 bg-[#fd9b4d] rounded text-white">Add Obligation</button>
                                        </div>
                                    </div>
                                </div>
                                <div className={sideMenuItem == 4 ? 'block' : 'hidden'}>
                                    <div className="text-[#12344d] flex w-full flex-col" >
                                        <div className="text-black">
                                            <span className="text-md font-medium" style={{color:'#2e4374'}}>
                                                <div className="flex">
                                                    Documents
                                                </div>
                                            </span>
                                            <div className="grid grid-cols-2 gap-x-5 text-[#2e4374] pt-3">
                                                <div className="rounded p-4 bg-gray-100 border-dashed border-2 border-slate-300 cursor-pointer">
                                                    <div className="flex justify-center">
                                                        <div className="pr-4">
                                                        <CloudArrowUpIcon className="h-8"/>
                                                        </div>
                                                        <div className="grid">
                                                            <span className="text-sm font-bold">
                                                                Upload Documents
                                                            </span>
                                                            <span className="text-xs font-semibold">Upload Applicant Documents</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="rounded p-4 bg-gray-100 border-dashed border-2 border-slate-300 cursor-pointer">
                                                    <div className="flex justify-center">
                                                        <div className="pr-4">
                                                        <InboxArrowDownIcon className="h-8"/>
                                                        </div>
                                                        <div className="grid">
                                                            <span className="text-sm font-bold">
                                                            Request Documents
                                                            </span>
                                                            <span className="text-xs font-semibold">Request Documents From Applicant</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="py-6">
                                                <div className="grid pb-3 grid-cols-10 gap-x-3">
                                                    <div className="col-span-3">
                                                        <input type="text" className="w-full border border-slate-200 rounded py-0.5 placeholder:text-xs placeholder:px-1 " placeholder="Search Document"/>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <select className="rounded border border-slate-200 w-full py-1 text-xs h-full">
                                                            <option value="" disabled selected>Select Document</option>
                                                            <option value="">KYC Documents</option>
                                                            <option value="">Income Proof</option>
                                                            <option value="">Address Proof</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-span-2">
                                                        <select className="rounded border border-slate-200 w-full py-1 text-xs h-full">
                                                            <option value="" disabled selected>Status</option>
                                                            <option value="">Received</option>
                                                            <option value="">Pending</option>
                                                            <option value="">Rejected</option>
                                                            <option value="">Accepted</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <table className="w-full text-xs text-left border border-slate-200 py-4">
                                                    <thead className="text-sm bg-gray-100 rounded" style={{color:'#2e4374'}}>
                                                        <tr className="font-normal">
                                                            <th scope="row" className="px-3 py-3 font-medium" style={{color:'#2e4374'}}>
                                                                Select
                                                            </th>
                                                            <th className="p-3 font-medium">
                                                                Document Name
                                                            </th>
                                                            <th className="p-3 font-medium">
                                                                Document Type
                                                            </th>
                                                            <th className="p-3 font-medium">
                                                                Format
                                                            </th>
                                                            <th className="p-3 font-medium">
                                                                Status
                                                            </th>
                                                            <th className="p-3 font-medium">
                                                                Link Shared
                                                            </th>
                                                            <th className="p-3 font-medium">
                                                                Uploaded By
                                                            </th>
                                                            <th className="p-3 font-medium">
                                                                Last Modified
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{color:'#2e4374'}}>
                                                        <tr className="text-xs font-medium">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr>
                                                        <tr className="text-xs font-medium bg-gray-100">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr>
                                                        <tr className="text-xs font-medium">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr>
                                                        <tr className="text-xs font-medium bg-gray-100">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr>
                                                        <tr className="text-xs font-medium">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr>
                                                        <tr className="text-xs font-medium bg-gray-100">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr><tr className="text-xs font-medium">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr>
                                                        <tr className="text-xs font-medium bg-gray-100">
                                                            <td scope="row" className="px-3 py-3 px-auto">
                                                                <input type="checkbox" name="" id="" />
                                                            </td>
                                                            <td className="px-3 py-3 underline cursor-pointer" style={{color:'#2058dc'}}>
                                                                PAN Card
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                KYC Document
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                PDF
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Received
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                YES
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                Shivkumar
                                                            </td>
                                                            <td className="px-3 py-3">
                                                                02-11-2023
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={sideMenuItem == 5 ? 'block' : 'hidden'}>
                                    <div className="text-black">
                                        <span className="text-md font-medium" style={{color:'#2e4374'}}>
                                            <div className="flex ">
                                                <BuildingLibraryIcon className="h-6 my-auto mr-3"/>
                                                Bank Logins
                                            </div>
                                        </span>
                                        <div className="text-center text-slate-300 pt-1.5 rounded-t mt-2 flex justify-between">
                                            <ul className="flex flex-wrap text-sm font-semibold border-b border-slate-200 w-full">
                                                <li className="mr-2">
                                                    <a
                                                        href="#"
                                                        className={
                                                            "inline-block p-2 rounded-t-lg " +
                                                            (openList === 1
                                                            ? "text-blue-600 bg-gray-100 "
                                                            : "hover:text-gray-600 hover:border-gray-300 listing-tab-font-color-default")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenList(1);
                                                        }}
                                                    >
                                                        Eligible Bank Offers
                                                    </a>
                                                </li>
                                                <li className="mr-2">
                                                    <a
                                                        href="#"
                                                        className={
                                                            "inline-block p-2 rounded-t-lg " +
                                                            (openList === 2
                                                                ? "text-blue-600 bg-gray-100"
                                                                : "hover:text-gray-600 hover:border-gray-300 listing-tab-font-color-default")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenList(2);
                                                        }}
                                                    >
                                                        Manual Login
                                                    </a>
                                                </li>
                                                <li className="mr-2">
                                                    <a
                                                        href="#"
                                                        className={
                                                            "inline-block p-2 rounded-t-lg " +
                                                            (openList === 3
                                                            ? "text-blue-600 bg-gray-100 "
                                                            : "hover:text-gray-600 hover:border-gray-300 listing-tab-font-color-default")
                                                        }
                                                        onClick={e => {
                                                            e.preventDefault();
                                                            setOpenList(3);
                                                        }}
                                                    >
                                                        Logged In
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="pt-4">
                                            <table className="w-full text-xs text-left border border-gray-200">
                                                <thead className="text-sm bg-gray-100 rounded" style={{color:'#2e4374'}}>
                                                    <tr>
                                                        <th scope="col" className="px-3 py-2 font-semibold">
                                                            Bank Name
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 font-semibold">
                                                            Listed
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 font-semibold">
                                                            Max Loan
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 font-semibold">
                                                            ROI
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 font-semibold">
                                                            Approx EMI
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 font-semibold">
                                                            Tenure
                                                        </th>
                                                        <th scope="col" className="px-3 py-2 font-semibold text-center">
                                                            Action
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody style={{color:'#2e4374'}}>
                                                    <tr className="text-sm font-medium">
                                                        <th scope="row" className="px-3 py-3 font-medium" style={{color:'#2e4374'}}>
                                                            ICICI Bank
                                                        </th>
                                                        <td className="px-3 py-3">
                                                            CAT A
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            900000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            16-20%
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            15000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            5yr
                                                        </td>
                                                        <td className="px-3 py-3 text-center">
                                                            <span className="text-black py-1 px-4 rounded text-xs shadow text-black" style={{backgroundColor:'#fd9b4d',color:'#ffffff'}}>Login Now</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-sm font-medium bg-gray-100">
                                                        <th scope="row" className="px-3 py-3 font-medium" style={{color:'#2e4374'}}>
                                                            ICICI Bank
                                                        </th>
                                                        <td className="px-3 py-3">
                                                            CAT A
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            900000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            16-20%
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            15000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            5yr
                                                        </td>
                                                        <td className="px-3 py-3 text-center">
                                                            <span className="text-black py-1 px-4 rounded text-xs shadow text-black" style={{backgroundColor:'#fd9b4d',color:'#ffffff'}}>Login Now</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-sm font-medium">
                                                        <th scope="row" className="px-3 py-3 font-medium" style={{color:'#2e4374'}}>
                                                            ICICI Bank
                                                        </th>
                                                        <td className="px-3 py-3">
                                                            CAT A
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            900000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            16-20%
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            15000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            5yr
                                                        </td>
                                                        <td className="px-3 py-3 text-center">
                                                            <span className="text-black py-1 px-4 rounded text-xs shadow text-black" style={{backgroundColor:'#fd9b4d',color:'#ffffff'}}>Login Now</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-sm font-medium bg-gray-100">
                                                        <th scope="row" className="px-3 py-3 font-medium" style={{color:'#2e4374'}}>
                                                            ICICI Bank
                                                        </th>
                                                        <td className="px-3 py-3">
                                                            CAT A
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            900000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            16-20%
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            15000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            5yr
                                                        </td>
                                                        <td className="px-3 py-3 text-center">
                                                            <span className="text-black py-1 px-4 rounded text-xs shadow text-black" style={{backgroundColor:'#fd9b4d',color:'#ffffff'}}>Login Now</span>
                                                        </td>
                                                    </tr>
                                                    <tr className="text-sm font-medium">
                                                        <th scope="row" className="px-3 py-3 font-medium" style={{color:'#2e4374'}}>
                                                            ICICI Bank
                                                        </th>
                                                        <td className="px-3 py-3">
                                                            CAT A
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            900000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            16-20%
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            15000
                                                        </td>
                                                        <td className="px-3 py-3">
                                                            5yr
                                                        </td>
                                                        <td className="px-3 py-3 text-center">
                                                            <span className="text-black py-1 px-4 rounded text-xs shadow text-black" style={{backgroundColor:'#fd9b4d',color:'#ffffff'}}>Login Now</span>
                                                        </td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className={sideMenuItem == 6 ? 'block' : 'hidden'}>
                                <div className="text-black">
                                        <div className="font-semibold py-2">Overview</div>
                                        <ul className="flex gap-4">
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-[#d2e0fb] rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-[#d2e0fb]">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-[#d2e0fb] rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-[#d2e0fb]">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-slate-200 rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-slate-200">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-slate-200 rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-slate-200">
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="flex">
                                                    <div className="pt-[4px] p-[10] px-14 bg-slate-200 rounded-l rounded-r-0 text-xs font-semibold">Step </div>
                                                    <div className="h-0 w-0 border-t-[12px] border-l-[15px] border-b-[12px] border-solid border-t-transparent border-b-transparent border-l-slate-200">
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="pt-6 px-3 bg-white border border-slate-200 mt-4 rounded">
                                            <div className="grid grid-cols-4 gap-5">
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Lead Date</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>07-23-2023</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Created By</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar Acharya</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Referred By</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Lead Age</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>180 Days</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Applicant Age</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>24 Years</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Marital Status</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Single</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Employment Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Full Time</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Company Name</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>TCL Technologies Pvt Ltd</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Company Listing</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Listed</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Gross Salary</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>24000</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Total Experience</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>5 Years</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Residence Type</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Own House</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>No. of Obligations</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>3 Loans</span>
                                                </p>
                                                <p className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Any CIBIL Issues</span>
                                                    <span className="text-xs font-medium" style={{color:'#12344d'}}>Yes</span>
                                                </p>
                                            </div>
                                            <div className="flex justify-end px-3 py-3 text-[#2058dc]">
                                                <span className="py-1 px-4 bg-slate-100 rounded text-xs font-semibold">
                                                    More Details
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border border-slate-200 mt-4 rounded">
                                            <div className="grid grid-cols-8 gap-x-7 py-6 px-3 bg-white gap-y-2">
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs pb-1" style={{color:'#12344d'}}>Last Follow Up</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs pb-1" style={{color:'#12344d'}}>Follow Up By</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-4">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs pb-1" style={{color:'#12344d'}}>Comments</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>08-11-2022/12:22 AM</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">                                            
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar Acharya</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-4">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>08-11-2022/12:22 AM</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-2">
                                                    <p className="font-normal flex flex-col">                                            
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>Shivkumar Acharya</span>
                                                    </p>
                                                </div>
                                                <div className="col-span-4">
                                                    <p className="font-normal flex flex-col">
                                                        <span className="text-xs font-medium" style={{color:'#12344d'}}>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex justify-end px-3 pb-3 text-[#2058dc]">
                                                <span className="py-1 px-4 bg-slate-100 rounded text-xs font-semibold">
                                                    More Follow Ups
                                                </span>
                                            </div>
                                        </div>
                                        <div className="border border-slate-200 mt-4 pt-6 px-3">
                                            <div className="grid grid-cols-6 gap-y-4 rounded">
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Bank Name</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Loan Amount</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Login Date</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Bank RSM</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Loan Application #</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1" style={{color:'#12344d'}}>Status</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>HDFC Bank</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>500000</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>08-02-2023</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>Shivkumar</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>LOS12345</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>IN PROCESS</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>HDFC Bank</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>500000</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>08-02-2023</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>Shivkumar</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>LOS12345</span>
                                                </div>
                                                <div className="font-normal flex flex-col">
                                                    <span className="text-xs pb-1 font-semibold" style={{color:'#12344d'}}>IN PROCESS</span>
                                                </div>
                                            </div>
                                            <div className="flex justify-end px-3 py-3 text-[#2058dc]">
                                                <span className="py-1 px-4 bg-slate-100 rounded text-xs font-semibold">
                                                    More Details
                                                </span>
                                            </div>
                                        </div>
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
                                content="Follow Ups" 
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