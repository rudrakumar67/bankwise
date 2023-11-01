'use client';
import Link from "next/link"
import {
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
import Tools from "../../common/Widget/Lead/Globals/Tools";
import AddNewPropertyLoan from "../../common/Widget/Lead/PropertyLoan/Modals/AddNewPropertyLoan";
import { NextPage } from "next";
import ImportData from "../../common/Widget/Lead/Globals/ImoprtData";
import AddTask from "../../common/Widget/Lead/Globals/AddTask";
import SetReminder from "../../common/Widget/Lead/Globals/SetReminder";
import ShareLink from "../../common/Widget/Lead/Globals/ShareLink";
import AssignTo from "../../common/Widget/Lead/Globals/AssignTo";
import Archive from "../../common/Widget/Lead/Globals/Archive";
import Delete from "../../common/Widget/Lead/Globals/Delete";

const Home: NextPage = () => {
    // Import Data Modal
    const [importDataModal, setimportDataModal] = useState(false);
    const importDataModalFun = () => setimportDataModal(true);
    const closeImportDataModal = () => setimportDataModal(false);

    // Share link Modal
    const [shareLink, setshareLink] = useState(false);
    const shareLinkFun = () => setshareLink(true);
    const closeshareLink = () => setshareLink(false);

    // Add Task Modal
    const [addTaskModal, setaddTaskModal] = useState(false);
    const addTaskModalFun = () => setaddTaskModal(true);
    const closeaddTaskModal = () => setaddTaskModal(false);

    // Set Reminder Modal
    const [setReminderModal, setsetReminderModal] = useState(false);
    const setReminderModalFun = () => setsetReminderModal(true);
    const closesetReminderModal = () => setsetReminderModal(false);

    // Add New Modal
    const [addNewModal, setAddNewModal] = useState(false);
    const addNewModalFun = () => setAddNewModal(true);
    const closeAddNewModal = () => setAddNewModal(false);

    // Assign to Modal
    const [assignToModal, setassignToModal] = useState(false);
    const assignToModalFun = () => setassignToModal(true);
    const closeassignToModal = () => setassignToModal(false);

    // Archive Modal
    const [archiveModal, setarchiveModal] = useState(false);
    const archiveModalFun = () => setarchiveModal(true);
    const closearchiveModal = () => setarchiveModal(false);

    // Delete Modal
    const [deleteModal, setdeleteModal] = useState(false);
    const deleteModalFun = () => setdeleteModal(true);
    const closedeleteModal = () => setdeleteModal(false);

  return (
    <div className='px-6'>
        <div className="flex justify-center z-50 backdrop-blur">
            <ImportData isOpen={importDataModal} onClose={closeImportDataModal}/>
            <ShareLink isOpen={shareLink} onClose={closeshareLink}/>
            <AddTask isOpen={addTaskModal} onClose={closeaddTaskModal}/>
            <SetReminder isOpen={setReminderModal} onClose={closesetReminderModal}/>
            <AddNewPropertyLoan isOpen={addNewModal} onClose={closeAddNewModal}/>
            <AssignTo isOpen={assignToModal} onClose={closeassignToModal}/>
            <Archive isOpen={archiveModal} onClose={closearchiveModal}/>
            <Delete isOpen={deleteModal} onClose={closedeleteModal}/>
        </div>
        <div className="wrapper">
            <div className="flex h-6 justify-between my-1">
                <div className='text-black font-semibold'>
                Property Loan
                </div>
                <div className='flex text-black text-xs my-auto'>
                Home <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                Lead <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                Property Loan <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> List
                </div>
            </div>
            <Tools/>
        </div>
        <div className="flex justify-between pb-6 ">
            <div className="text-black flex">
                <span onClick={importDataModalFun} className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                    <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Import Data</span>
                </span>
                <span onClick={shareLinkFun} className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                    <ShareIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Share Link</span>
                </span>
                <span onClick={addTaskModalFun} className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                    <PencilSquareIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Add Task</span>
                </span>
                <span onClick={setReminderModalFun} className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                    <CalendarDaysIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Set Reminder</span>
                </span>
            </div>
            <div className="flex h-8">
                <span onClick={addNewModalFun} className=" block flex text-white py-1.5 px-3 rounded primary-btn mr-2 flex-nowrap cursor-pointer" >
                    <PlusCircleIcon className={"h-4.5 w-4.5 text-slate-50 mr-1"}/>
                    <span className="text-sm md:text-xs font-normal my-auto">Add New</span>
                </span>
                <span onClick={assignToModalFun} className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                    <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Assign To</span>
                </span>
                <span onClick={archiveModalFun} className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                    <ArchiveBoxArrowDownIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Archive</span>
                </span>
                <span onClick={deleteModalFun} className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                    <TrashIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Delete</span>
                </span>
                <Link href="/" className="flex hover:bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2" style={{borderColor:'#0e387a'}}>
                    <ArrowUpOnSquareIcon className={"h-4.5 w-4 mr-2"} style={{color:'#0e387a'}}/>
                    <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#0e387a'}}>Export</span>
                </Link>
            </div>
        </div>
        <div className="rounded border border-t-2 border-slate-200">
            <div className="flex flex-wrap p-3">
                <div className="w-3/12 px-2 flex-0 my-auto border rounded shadow mr-4" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df', padding:"5px 5px",marginTop:'2px'}}>
                    <div className="flex w-full">
                        <input type="text" name="" id=""  placeholder="Search" className="text-xs w-full placeholder:text-gray-900 outline-none px-2"/>
                        <MagnifyingGlassIcon className="h-4 w-4" color="gray"/>
                    </div>
                </div>
                <div className="w-2/12 px-2 flex-0 my-auto border rounded shadow mr-2" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                    <Datepicker 
                    placeholder="Select Date Range"
                    inputClassName={'text-xs mb-1 placeholder:text-gray-900 outline-none px-1'}
                    value={{startDate:'15-09-2023', endDate:'15-10-2023'}} onChange={function(){
                        console.log('date');
                    }} />
                </div>
                <div className="w-2/12 w-36 px-2 flex-0 py-0.5 my-auto">
                    <select id="countries" className="bg-white text-gray-900 text-sm rounded w-full px-2 text-xs py-1 shadow" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                        <option selected>Select Product</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-2/12 w-36 px-2 flex-0 py-0.5 my-auto">
                    <select id="countries" className="bg-white text-gray-900 text-sm rounded w-full px-2 text-xs py-1 shadow" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
                        <option selected>Status</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div className="w-2/12 px-2 flex-0 py-0.5 my-auto">
                    <select id="countries" className="bg-white text-gray-900 text-sm rounded w-full px-2 text-xs py-1 shadow" style={{borderColor:'#fbfcfd', border:'1px solid #cfd7df'}}>
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
            <div className="relative overflow-x-auto">
                <table className="w-full text-xs text-left text-black border border-slate-200">
                    <thead className="text-xs" style={{backgroundColor:'#e0e7ff',color:'#333'}}>
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
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                        <tr className="bg-slate-100">
                            <th scope="row" className="px-3 py-3">
                                <input type="checkbox" name="" id="" />
                            </th>
                            <th scope="row" className="px-3 py-3 font-medium whitespace-nowrap cursor-pointer" style={{color:'#2058dc'}}>
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
                                <span className="bg-green-100 text-green-600 px-1 py-0.5 rounded text-xs font-semibold my-auto">Approved</span>
                            </td>
                            <td className="px-3 py-3">
                                Acharya Shivkumar
                            </td>
                            <td className="px-3 py-3 text-center">
                                <div className="flex justify-between">
                                    <ArchiveBoxXMarkIcon className="h-4 w-4 mx-auto" color="gray"/>
                                    <TrashIcon className="h-4 w-4 mx-auto" style={{color:'#dc3545'}}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-between p-3 my-auto">
                <div className="text-black text-xs border border-slate-300 my-auto px-2 py-1 rounded">
                    <span className="border-r border-slate-400 px-1">
                        Show 
                    </span>
                    <select name="" id="" className="text-black">
                        <option value="">10 &nbsp;</option>
                        <option value="">25 &nbsp;</option>
                        <option value="">50 &nbsp;</option>
                        <option value="">100 &nbsp;</option>
                    </select>
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-sm">
                        <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Previous
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            1
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            2
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            aria-current="page"
                            className="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                        >
                            3
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            4
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            5
                        </a>
                        </li>
                        <li>
                        <a
                            href="#"
                            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                        >
                            Next
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}
export default Home;