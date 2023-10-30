
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { NextPage } from "next";
const View: NextPage = () => {
    return (
        <div className="wrapper">
            <div className="flex h-6 justify-between my-1">
                <div className='text-black font-semibold flex'>
                    <span style={{color:'#12344d'}}>
                        Personal Loan View
                    </span>
                </div>
                <div className='flex text-black text-xs my-auto'>
                Home <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                Lead <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> 
                Personal Loan <ChevronRightIcon className='h-2.5 w-2.5 my-auto mx-1' /> View
                </div>
            </div>
        </div>
    );
}

export default View