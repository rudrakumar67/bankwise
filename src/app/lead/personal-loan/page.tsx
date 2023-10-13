import Link from "next/link"
import { ArrowRightCircleIcon , PlusCircleIcon,ArchiveBoxArrowDownIcon, TrashIcon, ArrowDownTrayIcon} from "@heroicons/react/24/outline"

export default function Home() {
  return (
    <>
        <div className="wrapper mx-auto">
            <div className="grid gap-4 mb-8 md:grid-cols-6 xl:grid-cols-6 py-4 ">
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
                                EMI Calculator
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
                                Company Validator
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
                                Bank Criterias
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
                                Eligibility Checker
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
                                CIBIL Report
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 border bg-indigo-100 border-slate-300 rounded shadow-xs">
                        <div className="p-2 md:p-1 m-3 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 text-slate-400"}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
                                Statment Analyzer
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="text-black text-xl">
                Personal Loan
            </div>
            <div className="flex h-8">
                <Link href="/" className="flex text-white py-1.5 px-3 rounded primary-btn mr-2">
                    <PlusCircleIcon className={"h-4.5 w-4.5 text-slate-50 mr-1"}/>
                    <span className="text-sm font-semibold">Add New</span>
                </Link>
                <Link href="/" className="flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
                    <ArchiveBoxArrowDownIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                    <span className="text-sm font-semibold">Archive</span>
                </Link>
                <Link href="/" className="flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
                    <TrashIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                    <span className="text-sm font-semibold">Delete</span>
                </Link>
                <Link href="/" className="flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
                    <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                    <span className="text-sm font-semibold">Import Data</span>
                </Link>
            </div>
        </div>
    </>
  )
}
