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
        <div className="flex justify-between border-b border-gray-200 pb-2">
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
            </div>
        </div>
        
        <div className="flex flex-wrap mt-2">
            <div className="w-2/12 px-2 flex-0 py-0.5 my-auto border rounded shadow" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                <Datepicker 
                placeholder="Select Date Range"
                inputClassName={'text-xs mb-1'}
                value={{startDate:'15-09-2023', endDate:'15-10-2023'}} onChange={function(){
                    console.log('date');
                }} />
            </div>
        </div>
    </>
  )
}
