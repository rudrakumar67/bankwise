import './globals.css'
import type { Metadata } from 'next'
import Navbar from './common/NevBar'
import SideBar from './common/SideBar'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
 faChartBar, faCheckSquare, faFileLines
} from "@fortawesome/free-regular-svg-icons";
import {
  faFilter,faUpRightFromSquare, faRepeat, faUsersViewfinder, faCalculator, faUserTie, faGears
 } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

import Image from 'next/image';

export const metadata: Metadata = {
  title: 'BankWise',
  // description: 'Generated by create next app',
}

export default function RootLayout({children,}: {  children: React.ReactNode}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" 
          content="width=device-width,  
                   initial-scale=1.0" />
      </head>
      <body>
        <div className='flex'>
          <aside className="fixed top-0">
            <SideBar/>
          </aside>
          <main className="h-screen w-full">
            <Navbar/>
            <div className="wrapper pl-16 pt-12 h-screen">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
