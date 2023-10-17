import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
export default function Tools(){
    return(
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
    );
}