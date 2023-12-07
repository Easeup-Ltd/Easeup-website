import type { Metadata } from 'next'
import {Montserrat} from "next/font/google"
import './globals.css'
import LayourWrapper from '@/components/ui/LayourWrapper'

export const metadata: Metadata = {
  title: 'Ease Up',
  description: 'Connecting You with Skilled Handymen for All Your Home Improvement Needs',
}
const montserrat = Montserrat({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">
      <body className={montserrat.className}>
      <main className='overflow-x-hidden'>
        <LayourWrapper/>
        {children}
      </main>
    
      </body>
    </html>
  )
}
