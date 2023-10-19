'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";

interface AddTaskProps {
    isOpen: boolean;
    onClose: () => void;
}

const AddTask: NextPage<AddTaskProps> = ({isOpen , onClose}) => {
    return(
        <div id="extralarge-modal" className={`${isOpen ? 'animate-fade-down animate-duration-500'  : 'hidden'} max-w-screen p-4 fixed`}>
            <div className="relative p-4 w-screen max-w-2xl h-full md:h-auto">      
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-between items-start p-2 px-3 rounded-t border dark:border-gray-600 bg-slate-100">
                        <h3 className="text-md font-semibold text-gray-900 dark:text-white">Add Task</h3>
                        <span onClick={onClose} className="cursor-pointer">
                            <XMarkIcon className="h-5 w-5 text-black"/>
                        </span>
                    </div>
                    <div className="p-6 space-y-1 w-full">
                        <div className="py-1 grid grid-rows">
                            <label htmlFor="" className="text-xs font-semibold pb-1" style={{color:'#333'}}>Due Date</label>
                            <input type="date" name="" id="" className="rounded w-44 border p-1 placeholder:text-black text-black text-xs"/>
                        </div>
                        <div className="py-1">
                            <label htmlFor="" className="text-xs font-semibold" style={{color:'#333'}}>Title</label>
                            <input type="text" name="" id="" className="rounded w-full border p-1" />
                        </div>
                        <div className="py-1">
                            <label htmlFor="" className="text-xs font-semibold" style={{color:'#333'}}>Description</label>
                            <textarea name="" id=""  rows={3} className="border rounded w-full"></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button className="flex text-black py-1.5 px-5  rounded mr-2 text-sm shadow text-white" style={{backgroundColor:'#fd9b4d'}}>Save</button>
                            <button className="flex text-black bg-red-900 py-1.5 px-5 rounded shadow text-sm text-white" style={{backgroundColor:'#9fafca'}}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AddTask;