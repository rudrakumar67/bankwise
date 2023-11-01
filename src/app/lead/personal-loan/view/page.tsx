
import { ArrowsRightLeftIcon, BellAlertIcon, BuildingLibraryIcon, ChartPieIcon, ChatBubbleBottomCenterIcon, DocumentDuplicateIcon, EnvelopeIcon, PencilSquareIcon, PhoneIcon, QueueListIcon, UserCircleIcon, UserIcon, UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
import Image from "next/image";
const View: NextPage = () => {
    return (
        <>
            <div className="bg-white sticky">
                <div className="text-black w-full bottom-[calc(100vh-theme(spacing.16))] left-0 right-0 top-0 sticky ">
                    <div className="flex justify-end  bg-slate-200 py-2 rounded-t px-3">
                        <div className="flex h-8 my-auto">
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d '}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Call Customer</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Email</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Add Task</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Share Link</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Notify</span>
                            </span>
                            <span  className="flex bg-gray-50 text-gray-800 py-1 px-4 md:py-0.5 md:px-2 sec-btn-border rounded shadow mr-2 cursor-pointer" style={{borderColor:'#0e387a'}}>
                                <UserPlusIcon className={"h-4.5 w-4 mr-2"} style={{color:'#12344d'}}/>
                                <span className="text-sm md:text-xs font-normal my-auto" style={{color:'#12344d'}}>Check Eligibility</span>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex fixed text-black text-left">
                    <div className="w-72">
                        <div className="sticky bg-gray-100 p-4 w-full">
                            {/* Left Side (Fixed) */}
                            <div className="overflow-y-auto">
                                <div className="text-black">
                                    <div className="grid border-b border-slate-300">
                                        <div className=" grid pb-2">
                                            <span className="text-xs pb-2" style={{color:'#12344d'}}>Lead ID : <b>BWLPL12345</b></span>
                                            <span className="font-semibold text-sm" style={{color:'#12344d'}}>Shivkumar Shivkumar Acharya</span>
                                            <span className="text-xs" style={{color:'#12344d'}}>Business Development Manger</span>
                                        </div>
                                        <div className="grid py-3 gap-2">
                                            <span className="text-xs flex" style={{color:'#2058dc'}}>
                                            <PhoneIcon className="h-4 pr-2" color="#2058dc"/>
                                                +91 1234567890
                                            </span>
                                            <span className="text-xs flex" style={{color:'#2058dc'}}>
                                            <EnvelopeIcon className="h-4 pr-2" color="#2058dc"/>
                                                acharyashivkumar67@gmail.com
                                            </span>
                                        </div>
                                    </div>
                                    <div className="grid py-4 bg-white p-3 rounded mt-2">
                                        <ul className="text-black text-xs">
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Product Type :</span> <span className="font-semibold">Top Up</span>
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Loan Type :</span> <span className="font-semibold">Personal Loan</span> 
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Required Loan Amount :</span> <span className="font-semibold">500000</span>
                                                </div>
                                            </li>
                                            <li className="pb-0.5">
                                                <div className="flex justify-between">
                                                    <span>Monthly Income :</span> <span className="font-semibold">25000</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="grid py-4 bg-white p-3 rounded mt-2">
                                        <span className="pb-2 font-medium text-xs">
                                            Applicant Details
                                        </span>
                                        <ul className="text-black">
                                            <li className="py-3 border-b border-slate-300">
                                                <span className="flex" style={{color:'#2e4374'}}>
                                                    <ChartPieIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Overview
                                                </span>
                                            </li>
                                            <li className="py-3 border-b border-slate-300">
                                                <span className="flex" style={{color:'#2e4374'}}>
                                                    <UserIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Basic Details
                                                </span>
                                            </li>
                                            <li className="py-3 border-b border-slate-300">
                                                <span className="flex" style={{color:'#2e4374'}}>
                                                    <QueueListIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Obligation
                                                </span>
                                            </li>
                                            <li className="py-3 border-b border-slate-300">
                                                <span className="flex" style={{color:'#2e4374'}}>
                                                    <ArrowsRightLeftIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Follow Ups
                                                </span>
                                            </li>
                                            <li className="py-3 border-b border-slate-300">
                                                <span className="flex" style={{color:'#2e4374'}}>
                                                    <DocumentDuplicateIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Documents
                                                </span>
                                            </li>
                                            <li className="py-3">
                                                <span className="flex" style={{color:'#2e4374'}}>
                                                    <BuildingLibraryIcon className="h-5 my-auto pr-3 pl-1" />
                                                    Bank Logins
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>    
                    </div>
                    <div className="w-10/12">
                        <div className="p-4 w-full">
                            <div className="h-screen overflow-y-auto">
                                <h2 className="text-xl font-bold mb-4">Right Side (Scrollable)</h2>
                                <div className="bg-gray-100 rounded p-2">
                                    <span className="text-sm font-semibold pb-2">Heading</span>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                    </p>
                                </div>
                                <div className="bg-gray-100 rounded p-2">
                                    <span className="text-sm font-semibold pb-2">Heading</span>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                    </p>
                                </div>
                                <div className="bg-gray-100 rounded p-2">
                                    <span className="text-sm font-semibold pb-2">Heading</span>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                    </p>
                                </div>
                                <div className="bg-gray-100 rounded p-2">
                                    <span className="text-sm font-semibold pb-2">Heading</span>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                    </p>
                                </div>
                                <div className="bg-gray-100 rounded p-2">
                                    <span className="text-sm font-semibold pb-2">Heading</span>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                    </p>
                                </div>
                                <div className="bg-gray-100 rounded p-2">
                                    <span className="text-sm font-semibold pb-2">Heading</span>
                                    <p>
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-12 bg-gray-100">
                        <ul className="py-3">
                            <li className="hover:bg-slate-300 mx-1.5 p-2 rounded my-1.5">
                                <PencilSquareIcon className="h-5 mx-auto"/>
                            </li>
                            <li className="hover:bg-slate-300 mx-1.5 p-2 rounded my-1.5">
                                <ChatBubbleBottomCenterIcon className="h-5 mx-auto"/>
                            </li>
                            <li className="hover:bg-slate-300 mx-1.5 p-2 rounded my-1.5">
                                <BellAlertIcon className="h-5 mx-auto"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View