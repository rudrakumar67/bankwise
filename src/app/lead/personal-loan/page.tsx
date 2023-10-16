'use client';
import Link from "next/link"
import { ArrowRightCircleIcon,
    PlusCircleIcon,
    ArchiveBoxArrowDownIcon,
    TrashIcon,
    ArrowDownTrayIcon,
    ChevronRightIcon,
    ShareIcon,
    UserPlusIcon,
    PencilSquareIcon,
    CalendarDaysIcon,
    ArrowUpOnSquareIcon,
    MagnifyingGlassIcon,
    ArchiveBoxXMarkIcon
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function Home() {

  return (
    <>
        <div className="wrapper">
            <div className="flex h-6 justify-between my-1">
                <div className='text-black font-semibold'>
                Personal Loan
                </div>
                <div className='flex text-black text-xs my-auto'>
                Home <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                Lead <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                Personal Loan <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> List
                </div>
            </div>
            <div className="grid gap-4 mb-4 md:grid-cols-6 xl:grid-cols-6 py-2 ">
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold text-gray-600">
                                EMI Calculator
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold text-gray-600">
                                Company Validator
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold text-gray-600">
                                Bank Criterias
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold text-gray-600">
                                Eligibility Checker
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold text-gray-600">
                                CIBIL Report
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold text-gray-600">
                                Import Website Leads
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex justify-between pb-6 ">
            <div className="text-black flex">
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Import Data</span>
                </Link>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <ShareIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Share Link</span>
                </Link>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <PencilSquareIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Add Task</span>
                </Link>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <CalendarDaysIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Set Reminder</span>
                </Link>
            </div>
            <div className="flex h-8">
                <Link href="/" className="flex text-white py-1.5 px-3 rounded primary-btn mr-2">
                    <PlusCircleIcon className={"h-4.5 w-4.5 text-slate-50 mr-1"}/>
                    <span className="text-sm md:text-xs font-medium my-auto">Add New</span>
                </Link>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Assign To</span>
                </Link>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <ArchiveBoxArrowDownIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Archive</span>
                </Link>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <TrashIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Delete</span>
                </Link>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <ArrowUpOnSquareIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-medium my-auto" style={{color:'#0e387a'}}>Export</span>
                </Link>
            </div>
        </div>
        <div className="rounded border border-t-2 border-slate-200 p-3">
            <div className="flex flex-wrap pb-3">
                <div className="w-3/12 px-2 flex-0 my-auto border rounded shadow mr-4" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df', padding:"5px 5px",marginTop:'2px'}}>
                    <div className="flex w-full">
                        <input type="text" name="" id=""  placeholder="Search" className="text-xs w-full placeholder:text-gray-900"/>
                        <MagnifyingGlassIcon className="h-4 w-4" color="gray"/>
                    </div>
                </div>
                <div className="w-2/12 px-2 flex-0 my-auto border rounded shadow mr-2" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                    <Datepicker 
                    placeholder="Select Date Range"
                    inputClassName={'text-xs mb-1 placeholder:text-gray-900'}
                    value={{startDate:'15-09-2023', endDate:'15-10-2023'}} onChange={function(){
                        console.log('date');
                    }} />
                </div>
                <div className="w-2/12 w-36 px-2 flex-0 py-0.5 my-auto">
                    <select id="countries" className="bg-gray-50 text-gray-900 text-sm rounded w-full text-xs py-1 shadow" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                        <option selected>Select Product</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-2/12 w-36 px-2 flex-0 py-0.5 my-auto">
                    <select id="countries" className="bg-gray-50 text-gray-900 text-sm rounded px-3 w-full text-xs py-1 shadow" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                        <option selected>Status</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-2/12 px-2 flex-0 py-0.5 my-auto">
                    <select id="countries" className="bg-gray-50 text-gray-900 text-sm rounded w-full px-3 text-xs py-1 shadow" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                        <option selected>Created by</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="flex h-6 my-auto m-auto justify-items-end">
                    <button className="flex text-black py-1 px-5  rounded mr-2 text-xs shadow text-black" style={{backgroundColor:'#fd9b4d',color:'#ffffff'}}>Filter</button>
                    <button className="flex text-black bg-red-900 py-1 px-5 rounded shadow text-xs" style={{backgroundColor:'#9fafca',color:'#ffffff'}}>Clear</button>
                </div>
            </div>
            <div className="relative overflow-x-auto rounded">
                <table className="w-full text-xs text-left text-black border border-slate-200">
                    <thead className="text-xs" style={{backgroundColor:'#e0e7ff',color:'#00539c'}}>
                        <tr>
                            <th scope="col" className="px-3 py-2">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Applicant Name
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Phone No
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Email Address
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Required Loan 
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Company Name
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Net Salary 
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Status 
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold">
                                Created By
                            </th>
                            <th scope="col" className="px-3 py-2 font-semibold text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap" style={{color:'#00539c'}}>
                                Vijay Anthony
                            </th>
                            <td className="px-3 py-3">
                                1234567890
                            </td>
                            <td className="px-3 py-3">
                                Admin@gmail.com
                            </td>
                            <td className="px-3 py-3">
                                500000
                            </td>
                            <td className="px-3 py-3">
                                Company name
                            </td>
                            <td className="px-3 py-3">
                                50000
                            </td>
                            <td className="px-3 py-3">
                                <span className="bg-green-600 text-white px-1 py-0.5 rounded text-xs font-normal my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" color="red"/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}
