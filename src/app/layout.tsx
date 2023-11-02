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
      <body>
        <div className='flex h-screen'>
          <SideBar/>
          <div className='flex flex-col flex-1' style={{color:'#ffffff'}}>
          <Navbar/>
            <main className="h-full pb-16 overflow-y-auto">
              <div className="wrapper mx-auto grid">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
