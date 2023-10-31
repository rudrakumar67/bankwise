
import { EnvelopeIcon, PhoneIcon, UserPlusIcon } from "@heroicons/react/24/outline";
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
                <div className="flex fixed h-screen text-black">
                    <div className="sticky bg-gray-100 p-4 w-full">
                        {/* Left Side (Fixed) */}
                        <div className="overflow-y-auto">
                        <div className="text-black">
                            <div className="grid border-b border-slate-300">
                                <div className=" grid pb-2">
                                    <span className="font-semibold" style={{color:'#12344d'}}>Shivkumar Shivkumar Acharya</span>
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

                                    {/* <span className="text-xs">1234567890</span> */}
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="relative p-4">
                        {/* Right Side (Scrollable) */}
                        <div className="h-screen overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">Right Side (Scrollable)</h2>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>

                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                            <p className="text-black">
                            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default View