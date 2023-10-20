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
                <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                    <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                        <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"} style={{color:'#ffffff'}}/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium" style={{color:'#00539c'}}>
                            Personal Loan
                        </p>
                    </div>
                </div>
            </Link>
            <Link href='/lead/business-loan'>
                <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                    <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                        <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600" style={{color:'#00539c'}}>
                            Business Loan
                        </p>
                    </div>
                </div>
            </Link>
            <Link href='/lead/property-loan'>
                <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                    <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                        <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600" style={{color:'#00539c'}}>
                            Property Loan
                        </p>
                    </div>
                </div>
            </Link>
            <Link href='/lead/credit-card'>
                <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                    <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                        <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600" style={{color:'#00539c'}}>
                            Credit Card
                        </p>
                    </div>
                </div>
            </Link>
            <Link href='/lead/vehicle-loan'>
                <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                    <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                        <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600" style={{color:'#00539c'}}>
                            Vehicle Loan
                        </p>
                    </div>
                </div>
            </Link>
            <Link href='/lead/education-loan'>
                <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                    <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                        <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600" style={{color:'#00539c'}}>
                            Education Loan
                        </p>
                    </div>
                </div>
            </Link>
            <Link href='/lead/gold-loan'>
                <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                    <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                        <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600" style={{color:'#00539c'}}>
                            Gold Loan
                        </p>
                    </div>
                </div>
            </Link>
        </div>
        <div className='flex pt-4 border-t border-gray-200'>
            <h5 className='text-gray-600 uppercase text-sm'>government scheme loans</h5>
        </div>
        <div className="grid gap-6 mb-8 md:grid-cols-4 xl:grid-cols-4 py-4">
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        Stand Up India Loan Scheme
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        SIDBI Loan (MSME Scheme)
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Small Industries Development Bank of India
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        CGTMSE Loan (MSME Scheme)
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Credit Guarantee Fund Trust for Micro and Small Enterprises
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        PMEGP Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Prime Ministers Employment Generation Programme
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        PMMY Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Pradhan Mantri MUDRA Yojana
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        NSIC Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        National Small Industries Corporation
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        CLCSS Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Credit Linked Capital Subsidy Scheme
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        PMJDY Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Pradhan Mantri Jan-Dhan Yojana
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
                        PMJAY Loan Scheme
                    </p>
                    <p className="text-gray-700" style={{fontSize:'12px'}}>
                        Pradhan Mantri Jan Arogya Yojna
                    </p>
                </div>
            </div>
            <div className="flex items-center p-4 md:p-2 lead-card-border rounded shadow">
                <div className="p-3 md:p-1.5 mr-4 rounded" style={{backgroundColor:'#00539c'}}>
                    <ArrowRightCircleIcon className={"h-6 w-6 text-slate-50"}/>
                </div>
                <div>
                    <p className="font-semibold mb-1 text-sm font-medium" style={{color:'#00539c'}}>
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
