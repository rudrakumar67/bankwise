'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React, { useState } from "react";
import Select from "react-tailwindcss-select";

interface AssignToProps {
    isOpen: boolean;
    onClose: () => void;
}

const AssignTo: NextPage<AssignToProps> = ({isOpen , onClose}) => {      
    const options = [
        { value: "fox", label: "🦊 Fox" },
        { value: "Butterfly", label: "🦋 Butterfly" },
        { value: "Honeybee", label: "🐝 Honeybee" }
    ];
    return(
        <div id="extralarge-modal" className={`${isOpen ? 'animate-fade-down animate-duration-500'  : 'hidden'} max-w-screen p-4 fixed`}>
            <div className="relative p-4 w-screen px-20 max-w-2xl h-full pb-60">      
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-between items-start p-2 px-3 rounded-t border dark:border-gray-600 bg-slate-100">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Assign to</h3>
                        <span onClick={onClose} className="cursor-pointer">
                            <XMarkIcon className="h-5 w-5 text-black"/>
                        </span>
                    </div>
                    <div className="px-6 py-2 space-y-1 w-full h-40">
                        <div className="py-1">
                            <label htmlFor="" className="text-xs font-semibold" style={{color:'#333'}}>Select Executive</label>
                            <Select
                                value={null}
                                onChange={() => {}}
                                options={options}isSearchable={true}
                                primaryColor={"blue"}
                            />
                        </div>
                        <div className="flex justify-end pt-8">
                            <button className="flex text-black bg-red-900 py-1.5 px-5 mr-2 rounded shadow text-sm text-white" style={{backgroundColor:'#9fafca'}}>Cancel</button>
                            <button className="flex text-black py-1.5 px-5  rounded text-sm shadow text-white" style={{backgroundColor:'#fd9b4d'}}>Assign</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AssignTo;