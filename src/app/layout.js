import { Inter } from 'next/font/google'
import { Ubuntu } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata = {
  title: 'Gnanavel Premnath Portfolio',
  description: 'Coded by Gnanavel Premnath',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>{children}</body>
    </html>
  )
}
