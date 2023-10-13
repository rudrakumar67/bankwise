import Link from 'next/link';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
export default function Leads() {
  return (
    <>
        <div className='flex pt-4'>
            <h5 className='text-gray-600 uppercase text-sm'>bank loans</h5>
        </div>
        <div className="grid gap-6 mb-8 md:grid-cols-4 xl:grid-cols-4 py-4">
            <Link href='/lead/personal-loan'>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Personal Loan
                    </p>
                </div>
            </div>
            </Link>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Business Loan
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Property Loan
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Credit Card
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Vehicle Loan
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Education Loan
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="mb-2 text-sm font-medium text-gray-600">
                        Gold Loan
                    </p>
                </div>
            </div>
        </div>
        <div className='flex pt-4 border-t border-gray-200'>
            <h5 className='text-gray-600 uppercase text-sm'>government scheme loans</h5>
        </div>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4 py-4">
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        Stand Up India Loan Scheme
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        SIDBI Loan (MSME Scheme)
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Small Industries Development Bank of India
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        CGTMSE Loan (MSME Scheme)
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Credit Guarantee Fund Trust for Micro and Small Enterprises
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        PMEGP Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Prime Ministers Employment Generation Programme
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        PMMY Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Pradhan Mantri MUDRA Yojana
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        NSIC Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        National Small Industries Corporation
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        CLCSS Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Credit Linked Capital Subsidy Scheme
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        PMJDY Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Pradhan Mantri Jan-Dhan Yojana
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        PMJAY Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Pradhan Mantri Jan Arogya Yojna
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 bg-violet-100 rounded-lg shadow-xs">
                <div className="p-3 mr-4 bg-fuchsia-800 rounded">
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium text-gray-600">
                        PMJAY Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Pradhan Mantri Jan Arogya Yojna
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
