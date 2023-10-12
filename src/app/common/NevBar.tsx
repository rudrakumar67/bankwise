import { 
  UserIcon,
  EnvelopeIcon,
  BellAlertIcon
 } from '@heroicons/react/24/outline'

function Navbar() {
    return (
    <header className="z-10 py-2 border-b border-gray-200">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        <div className="flex justify-between flex-0 h-full w-96">
          <div className="relative w-full max-w-xl border-2 border-gray-200 ">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              className="w-full h-full pl-8 pr-2 pb-1.5 focus:outline-none placeholder:text-xs"
              type="text"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-5">
          <a href="" className='border-2 rounded p-2 border-gray-200'>
            <EnvelopeIcon className='h-4 w-4 text-blue-500'/>
          </a>
          <a href="" className='border-2 rounded p-2 border-gray-200'>
            <BellAlertIcon className='h-4 w-4 text-blue-500'/>
          </a>
          <a href="" className='bg-blue-900 rounded p-2 border-2 border-blue-900'>
            <UserIcon className='h-4 w-4 text-slate-50'/>
          </a>
        </ul>
      </div>
    </header>
    );
  }
  
  export default Navbar;