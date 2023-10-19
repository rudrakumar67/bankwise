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
            <div className="relative p-4 w-screen max-w-2xl h-full md:h-auto">      
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex justify-between items-start p-3 rounded-t border dark:border-gray-600">
                        <h3 className="text-md font-medium text-gray-900 dark:text-white">Assign To</h3>
                        <span onClick={onClose} className="cursor-pointer">
                            <XMarkIcon className="h-5 w-5 text-black"/>
                        </span>
                    </div>
                    <div className="p-6 space-y-6 w-full">
                        <Select
                            value={null}
                            onChange={() => {}}
                            options={options}isSearchable={true}
                            primaryColor={"blue"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default AssignTo;