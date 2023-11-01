import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
export default function Tools(){
    return(
        <div className="grid gap-4 mb-4 md:grid-cols-6 xl:grid-cols-6 py-2 ">
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border rounded shadow-xs" style={{borderColor:'#cfd7df'}}>
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4"} style={{color:'#2e4374'}}/>
                        </div>
                        <div className="grid grid-cols-2 text-xs font-semibold">
                            <p className="my-2 pd:my-1" style={{color:'#2e4374'}}>
                                Total Leads
                            </p>
                            <div className="text-black my-auto m-auto">1</div>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border rounded shadow-xs" style={{borderColor:'#cfd7df'}}>
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4"} style={{color:'#2e4374'}}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold" style={{color:'#2e4374'}}>
                                Follow Ups
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border rounded shadow-xs" style={{borderColor:'#cfd7df'}}>
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4"} style={{color:'#2e4374'}}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold" style={{color:'#2e4374'}}>
                                Logged In
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border rounded shadow-xs" style={{borderColor:'#cfd7df'}}>
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4"} style={{color:'#2e4374'}}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold" style={{color:'#2e4374'}}>
                                Sanctioned
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border rounded shadow-xs" style={{borderColor:'#cfd7df'}}>
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4"} style={{color:'#2e4374'}}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold" style={{color:'#2e4374'}}>
                                Disbursed
                            </p>
                        </div>
                    </div>
                </Link>
                <Link href='/lead/personal-loan'>
                    <div className="flex items-center h-12 md:h-10 border rounded shadow-xs" style={{borderColor:'#cfd7df'}}>
                        <div className="p-2 md:p-1 m-3 md:m-1 rounded">
                            <ArrowRightCircleIcon className={"h-6 w-6 md:h-4 md:w-4"} style={{color:'#2e4374'}}/>
                        </div>
                        <div>
                            <p className="my-2 pd:my-1 text-xs font-semibold" style={{color:'#2e4374'}}>
                                Rejected
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
    );
}