'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import React, { useState } from "react";
interface ImportDataProps {
    isOpen: boolean;
    onClose: () => void;
}

const ImportData: NextPage<ImportDataProps> = ({isOpen , onClose}) => {      

    return(
        <div id="extralarge-modal" className={`flex justify-center fixed z-50 ${isOpen ? 'animate-fade-down animate-duration-750 animate-delay-100'  : 'hidden'} w-11/12 p-4 overflow-x-hidden overflow-y-auto max-h-full`}>
            <div className="relative w-12/12  max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between py-2 px-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-md font-medium text-gray-900 dark:text-white">
                            Import Data
                        </h3>
                        <span onClick={onClose} className="cursor-pointer">
                            <XMarkIcon className="h-5 w-5 text-black"/>
                        </span>
                    </div>

                    <div className="p-6 space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            The European Unions General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImportData;