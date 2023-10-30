
import { ChevronRightIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
const View: NextPage = () => {
    return (
        <>
            <div className="wrapper">
                <div className="flex h-6 justify-end my-1">
                    {/* <div className='text-black font-semibold flex'>
                        <span style={{color:'#12344d'}}>
                            Personal Loan View
                        </span>
                    </div> */}
                    <div className='flex text-black text-xs my-auto'>
                    Home <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                    Lead <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                    Personal Loan <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> View
                    </div>
                </div>
            </div>
            <div className="text-black">
                <div className="flex justify-between  bg-slate-200 py-2 rounded-t px-3">
                    <div className="my-auto flex flex-col">
                        <span className="font-semibold text-lg">Vijay Kumar</span>
                        <span className="font-normal text-xs">Personal Loan Application</span>
                    </div>
                    <div className="flex h-8 my-auto">
                        <span  className="flex bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                            <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#00539c'}}/>
                            <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#00539c'}}>Call Customer</span>
                        </span>
                        <span  className="flex bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                            <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#00539c'}}/>
                            <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#00539c'}}>Email</span>
                        </span>
                        <span  className="flex bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                            <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#00539c'}}/>
                            <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#00539c'}}>Add Task</span>
                        </span>
                        <span  className="flex bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                            <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#00539c'}}/>
                            <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#00539c'}}>Share Link</span>
                        </span>
                        <span  className="flex bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                            <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#00539c'}}/>
                            <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#00539c'}}>Notify</span>
                        </span>
                        <span  className="flex bg-gray-100 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                            <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#00539c'}}/>
                            <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#00539c'}}>Check Eligibility</span>
                        </span>
                    </div>
                </div>
                <div className="flex bg-slate-50 rounded-b py-6">
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Phone number</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>1234567890</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Emaiil Address</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>Admin@gmail.com</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Alt Phone number</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>1234567890</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Date of birth</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>30-12-2323</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>PAN number</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>ASFA1212A</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Gender</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>Male</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Marital Status</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>Single</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Aadhar Number</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>1234 1244 1234</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Mother Name</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>Single</span>
                    </div>
                    <div className="flex flex-col my-auto px-3">
                        <span className="text-xs text-slate-500 pb-1" style={{color:'#00539c'}}>Father Name</span>
                        <span className="text-xs font-semibold" style={{color:'#12344d'}}>Single</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View