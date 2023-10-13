import Link from "next/link"
import { ArrowRightCircleIcon , PlusCircleIcon,ArchiveBoxArrowDownIcon, TrashIcon, ArrowDownTrayIcon, ChevronRightIcon, ShareIcon, UserPlusIcon} from "@heroicons/react/24/outline"
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
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
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
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
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
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
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
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
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
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
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
                            <p className="my-2 pd:my-1 md:text-xs text-sm font-medium text-gray-600">
                                Import Website Leads
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="text-black flex">
                <Link href="/" className="flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
                    <ArrowDownTrayIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                    <span className="text-sm font-semibold">Import Data</span>
                </Link>
                <Link href="/" className="flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
                    <ShareIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                    <span className="text-sm font-semibold">Share Link</span>
                </Link>
                <Link href="/" className="flex bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-4 border border-gray-400 rounded shadow mr-2">
                    <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                    <span className="text-sm font-semibold">Assign To</span>
                </Link>
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
            </div>
        </div>
    </>
  )
}
