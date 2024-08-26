import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SALVADOR',
  description: 'AGUA CON GAS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="">{children}</body>
      
    </html>
  )
}
